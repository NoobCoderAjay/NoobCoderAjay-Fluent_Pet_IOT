import { AuthParams } from "src/AuthParams";
import * as types from "./authActionTypes";

import { BackendEnvType } from "src/lib/environment";
import { RefreshTokenData } from "src/Authentication/auth0";

export const signIn = (params: AuthParams) => ({
  type: types.SIGN_IN,
  payload: params,
});

export const signOut = () => ({
  type: types.SIGN_OUT,
});
export const refreshToken = (payload: {
  authToken: string;
  refreshTokenData: RefreshTokenData | null;
  expiresDateTime: number;
}) => ({
  type: types.REFRESH_TOKEN,
  payload,
});

export const switchEnvironment = (backendEnv: BackendEnvType) => ({
  type: types.SWITCH_ENVIRONMENT,
  payload: backendEnv,
});

export const setPushNotificationToken = (token: string) => ({
  type: types.SET_PUSH_NOTIFICATION_TOKEN,
  payload: token,
});

export const setLoginAs = (email: string | null) => ({
  type: types.SET_LOGIN_AS,
  payload: email,
});

export const setIsIntercomLoggedIn = (isIntercomLoggedIn: boolean) => ({
  type: types.SET_INTERCOM_LOGGED_IN,
  payload: isIntercomLoggedIn,
});

export const setOnboardedStatus = (isOnboarded: boolean) => ({
  type: types.SET_ONBOARDED_STATUS,
  payload: isOnboarded,
});

export const setLoading = (isLoading: boolean) => ({
  type: types.SET_LOADING,
  payload: isLoading,
});

export const setError = (error: string | null) => ({
  type: types.SET_ERROR,
  payload: error,
});
