import { RefreshTokenData } from "src/Authentication/auth0";
import { UserProps } from "src/UserProps";
import { BackendEnvType } from "src/lib/environment";

export interface GlobalState {
  backendEnv: BackendEnvType;
  backendUrl: string;
  user: UserProps;
  authToken: string | null;
  isLoading: boolean;
  errors: string | null;
  loginAs?: string | null;
  refreshTokenData?: RefreshTokenData | null;
  expiresDateTime?: number | null;
  isIntercomLoggedIn?: boolean;
  expoPushToken?: string | null;
}
