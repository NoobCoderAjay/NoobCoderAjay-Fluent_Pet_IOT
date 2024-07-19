import { RefreshTokenData } from "src/Authentication/auth0";

import { UserProps } from "./UserProps";

export interface AuthParams {
  authToken: string;
  loginAs?: string | null;
  avatar: string;
  userInfo: any;
  refreshTokenData: RefreshTokenData | null;
  expiresIn: number;
  user?: UserProps;
  expiresDateTime?: number;
}
