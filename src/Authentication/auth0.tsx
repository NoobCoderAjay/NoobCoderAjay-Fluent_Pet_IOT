/// <reference lib="dom" />
import axios from "axios";
import * as Application from "expo-application";
import * as AuthSession from "expo-auth-session";
import React, { useContext } from "react";
import { Alert, View, StyleSheet } from "react-native";

import { Button } from "src/components/common";
import { Body } from "src/components/common/Text";
import { IS_IOS, packageName } from "src/constants";
import { BackendEnvType } from "src/lib/environment";
import { Colors } from "src/theme/Colors";
import { Size } from "src/theme/Size";

const auth0ClientId = "AIrOPMfqW9CSVaKxJPsPR8sG2NdUGggY";
const auth0domain = "auth.fluent.pet";
const authorizationEndpoint = `https://${auth0domain}/authorize`;
const appId = Application.applicationId;
// Disable Expo proxy on iOS so that 'expo.io' is replaced
// with 'fluent.pet' in the auth request prompt
const redirectUri = IS_IOS
  ? `${appId}://${auth0domain}/ios/${appId}/callback`
  : `${packageName}://${auth0domain}/android/${packageName}/callback`;

interface Token {
  access_token: string;
  expires_in: number;
  // Only sends back a refresh token if rotation is enabled
  // https://auth0.com/docs/tokens/refresh-tokens/refresh-token-rotation
  refresh_token?: string;
  token_type: string;
}

interface TokenData {
  grant_type: "authorization_code";
  client_id: string;
  code: string;
  redirect_uri: string;
  code_verifier: string;
}

export interface RefreshTokenData {
  grant_type: "refresh_token";
  client_id: string;
  refresh_token: string;
  redirect_uri: string;
  code_verifier: string;
}

export class AuthenticationError extends Error {
  data: Response;

  constructor(message: string, data: Response) {
    super(message);
    this.name = "AuthenticationError";
    this.data = data;
  }
}

// Based on
// https://github.com/tiagob/create-full-stack/blob/master/packages/cfs-expo-auth0/src/index.tsx
export async function fetchAccessToken(data: TokenData | RefreshTokenData) {
  // URLSearchParams doesn't work in RN.
  // `new URLSearchParams(Object.entries({ a: "b", c: "d" })).toString()` gives "0=a,b&1=c,d"
  // So manually do the encoding
  const formBody = Object.entries(data)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");
  // Fetch the access token and possibly the refresh token (if rotation is
  // enabled) following
  // https://auth0.com/docs/tokens/refresh-tokens/get-refresh-tokens
  const tokenResponse = await fetch(`https://${auth0domain}/oauth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
    body: formBody,
  });

  if (tokenResponse.ok) {
    const token = (await tokenResponse.json()) as Token;
    const userInfoResponse = await fetch(`https://${auth0domain}/userinfo`, {
      headers: { Authorization: `Bearer ${token.access_token}` },
    });
    const userInfo = await userInfoResponse.json();

    let refreshTokenData: RefreshTokenData | null = null;
    if (token.refresh_token) {
      refreshTokenData = {
        ...data,
        refresh_token: token.refresh_token,
        grant_type: "refresh_token",
      };
    }

    return {
      authToken: token.access_token,
      userInfo,
      refreshTokenData,
      expiresIn: token.expires_in * 1000,
    };
  } else {
    console.log(`tokenResponse error: ${JSON.stringify(tokenResponse)}`);
    throw new AuthenticationError(
      "Failed to fetch access token",
      tokenResponse
    );
  }
}

export async function signOut(token: string) {
  await fetch(`https://${auth0domain}/v2/logout`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  console.log("Logged out.");
}

export default function Auth0Login() {
  const { globalState, signIn } = useContext(AuthContext);

  const [auth0request, auth0Result, promptAsync] = AuthSession.useAuthRequest(
    {
      redirectUri,
      clientId: auth0ClientId,
      // id_token will return a JWT token
      // responseType: 'token id_token',
      responseType: AuthSession.ResponseType.Code,
      // retrieve the user's profile
      scopes: ["user", "openid", "profile", "email", "offline_access"],
      extraParams: {
        audience: "https://app.fluent.pet",
        prompt: "login",
      },
    },
    { authorizationEndpoint } as AuthSession.DiscoveryDocument
  );

  React.useEffect(() => {
    async function getToken() {
      if (!auth0Result) {
        return;
      }

      if (
        auth0Result.type === "success" &&
        auth0Result?.params?.code &&
        auth0request?.redirectUri &&
        auth0request?.codeVerifier
      ) {
        try {
          const { authToken, userInfo, refreshTokenData, expiresIn } =
            await fetchAccessToken({
              grant_type: "authorization_code",
              client_id: auth0ClientId,
              code: auth0Result.params.code,
              redirect_uri: auth0request.redirectUri,
              // Expo AuthSession uses Authorization Code Flow with PKCE
              // Code verifier is required with PKCE
              // https://auth0.com/docs/flows/call-your-api-using-the-authorization-code-flow-with-pkce
              code_verifier: auth0request.codeVerifier,
            });

          // Create user after local signup, in the staging and prod
          // environments this is handled by an Auth0 action
          if (__DEV__ && globalState.backendEnv === BackendEnvType.LOCAL) {
            try {
              await axios.post(`${globalState.backendUrl}/api/v1/users`, {
                email: userInfo.email,
                name: userInfo.name,
              });
            } catch (e) {
              Alert.alert(`Failed to create user after local signup: ${e}.`);
            }
          }

          // Request bigger resolution of avatar
          const avatar = userInfo.picture.replace("=s96-c", "=s400-c");

          await signIn({
            userInfo,
            authToken,
            avatar,
            refreshTokenData,
            expiresIn,
          });
        } catch (e: any) {
          const error: AuthenticationError = e;
          if (error.name === "AuthenticationError") {
            const status: number = error.data.status;
            if (status === 401) {
              Alert.alert("Your login has expired, Please log in again. (401)");
            } else {
              Alert.alert(
                `We had a problem with your session. Please log in again. (${status})`
              );
              throw e;
            }
          }
        }
      } else {
        let message = null;
        switch (auth0Result.type) {
          case "success":
          case "cancel":
            break;
          case "dismiss":
            break;
          case "locked":
            message = "Login locked.";
            break;
          case "error":
            message = `Login failed. Please try again. (Code ${auth0Result.errorCode} - ${auth0Result.params.error_description})`;
            break;
        }
        if (message) {
          console.error("authentication error", JSON.stringify(auth0Result)); // log auth0 error to Sentry
          Alert.alert("Authentication error", message);
        }
      }
    }
    getToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth0Result, auth0ClientId]);

  return (
    <>
      <View style={styles.errorTextContainer}>
        {globalState.errors && (
          <Body color={Colors.RED}>{globalState.errors}</Body>
        )}
      </View>
      <Button
        label="LOGIN"
        marginBottom={Size.X4_L}
        onPress={() => promptAsync()}
      />
    </>
  );
}

const styles = StyleSheet.create({
  errorTextContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: Size.X3_L,
  },
});
