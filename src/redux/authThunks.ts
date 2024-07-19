import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import {
  signIn,
  signOut,
  // populateErrors,
  // refreshToken,
  switchEnvironment,
  setPushNotificationToken,
  setIsIntercomLoggedIn,
  setError,
  refreshToken,
} from "./authActions";
import { AuthParams } from "src/AuthParams";
import { isAdmin, isConnectAdmin, parseRoles } from "src/model/user";
import { UserProps } from "src/UserProps";
import Intercom from "@intercom/intercom-react-native";
import { RootState } from "../../store";
import { BackendEnvType } from "src/lib/environment";
import { identifyUser, resetUser } from "src/helpers/trackUser";
import { APP_VERSION } from "src/constants";

import { TokenData, fetchAccessToken, signOut as signOutFromServer } from 'src/Authentication/auth0';

function attachUserProps(user: any, roles: string[]): UserProps {
  user.groups = user.groups || {};
  user.featureFlags = user.featureFlags || {};

  user.groups.isAdmin = isAdmin(roles);
  user.groups.isConnectAdmin = isConnectAdmin(roles);
  user.groups.appVersion = APP_VERSION;

  return user;
}

export const signInThunk = createAsyncThunk(
  "auth/signIn",
  async (
    { userInfo, authToken, avatar, refreshTokenData, expiresIn }: AuthParams,
    { dispatch }
  ) => {
    try {
      const response = await axios.get("/api/v2/user", {
        headers: { Authorization: `Bearer ${authToken}` },
      });

      const roles = parseRoles(userInfo);

      if (response.data) {
        Intercom.loginUserWithUserAttributes({
          email: response.data.email,
          userId: response.data.email,
        });
        dispatch(setIsIntercomLoggedIn(true));

        const user: UserProps = attachUserProps(
          {
            id: response.data.id,
            name: response.data.fullname,
            email: response.data.email,
            avatar: avatar || "",
            roles: roles,
            groups: response.data?.groups,
            featureFlags: response.data?.feature_flags,
          },
          roles
        );

        await SecureStore.setItemAsync("user", JSON.stringify(user));
        await SecureStore.setItemAsync("authToken", authToken);
        await SecureStore.setItemAsync(
          "refreshTokenData",
          JSON.stringify(refreshTokenData)
        );
        const expiresDateTime = Date.now() + expiresIn;
        await SecureStore.setItemAsync(
          "expiresDateTime",
          String(expiresDateTime)
        );

        identifyUser({
          email: user.email,
          name: user.name,
          id: user.id,
          householdId: user.household_id || -1,
          userProps: { groups: user.groups || {} },
        });

        dispatch(
          signIn({
            userInfo,
            authToken,
            avatar,
            refreshTokenData,
            expiresIn,
            user,
            expiresDateTime,
          })
        );
      } else {
        dispatch(setError("Login failed, please try again."));
      }
    } catch (error: any) {
      dispatch(setError(error.message));
    }
  }
);

export const signOutThunk = createAsyncThunk(
  "auth/signOut",
  async (_, { dispatch, getState }) => {
    const state = getState() as RootState;
    const { authToken } = state.auth;
    if (authToken) {
      try {
        await SecureStore.deleteItemAsync("user");
        await SecureStore.deleteItemAsync("authToken");
        await SecureStore.deleteItemAsync("refreshTokenData");
        await SecureStore.deleteItemAsync("expiresDateTime");
        if (state.auth.expoPushToken) {
          await axios.delete("/api/v1/push_notifications", {
            data: { token: state.auth.expoPushToken },
          });
        }

        await signOutFromServer(authToken);
      } catch (error) {
        console.error("sign out error", error);
      }
    }
    dispatch(signOut());
    resetUser();
  }
);

export const switchEnvironmentThunk = createAsyncThunk(
  "auth/switchEnvironment",
  async (backendEnv: BackendEnvType, { dispatch }) => {
    await SecureStore.deleteItemAsync("user");
    await SecureStore.deleteItemAsync("authToken");
    await SecureStore.deleteItemAsync("refreshTokenData");
    await SecureStore.deleteItemAsync("expiresDateTime");
    await SecureStore.setItemAsync("backendEnv", backendEnv);
    dispatch(signOutThunk());
    dispatch(switchEnvironment(backendEnv));
  }
);

export const refreshTokenThunk = createAsyncThunk(
  "auth/refreshToken",
  async (_, { dispatch, getState }) => {
    const state = getState() as RootState;
    const { refreshTokenData } = state.auth;
    if (!refreshTokenData) {
      return;
    }

    try {
      let tokenData = {} as TokenData;
   

      const {
        authToken,
        refreshTokenData: newRefreshTokenData,
        expiresIn,
      } = await fetchAccessToken(tokenData);

      const expiresDateTime = Date.now() + expiresIn;

      dispatch(
        refreshToken({
          authToken,
          refreshTokenData: newRefreshTokenData,
          expiresDateTime,
        })
      );

      await SecureStore.setItemAsync("authToken", authToken);
      if (newRefreshTokenData) {
        await SecureStore.setItemAsync(
          "refreshTokenData",
          JSON.stringify(newRefreshTokenData)
        );
      }
      await SecureStore.setItemAsync(
        "expiresDateTime",
        String(expiresDateTime)
      );
    } catch (error: any) {
      const status = error.data?.status;
      const message =
        status === 401
          ? "Your session has expired. Please login again."
          : `We had a problem with your session. Please try again or log out. (${status})`;
      dispatch(setError(message));
      if (status === 401) {
        dispatch(signOutThunk());
      }
    }
  }
)

export const setPushNotificationTokenThunk = createAsyncThunk(
  "auth/setPushNotificationToken",
  async (token: string, { dispatch }) => {
    try {
      // You might want to send this token to your backend here
      dispatch(setPushNotificationToken(token));
    } catch (error: any) {
      dispatch(setError(error.message));
    }
  }
);
