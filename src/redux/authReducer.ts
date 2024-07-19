import { GlobalState } from "src/GlobalState";
import * as types from "./authActionTypes";
import { BackendEnvType } from "src/lib/environment";
import { emptyUserObject } from "src/UserProps";

const initialState: GlobalState = {
  backendEnv: BackendEnvType.LOCAL,
  backendUrl: "",
  user: emptyUserObject,
  authToken: null,
  isLoading: false,
  errors: null,
  loginAs: null,
  refreshTokenData: null,
  expiresDateTime: null,
  isIntercomLoggedIn: false,
  expoPushToken: null,
};

const authReducer = (state = initialState, action: any): GlobalState => {
  switch (action.type) {
    case types.SIGN_IN:
      return {
        ...state,
        user: action.payload.userInfo,
        authToken: action.payload.authToken,
        refreshTokenData: action.payload.refreshTokenData,
        expiresDateTime: Date.now() + action.payload.expiresIn * 1000,
      };
    case types.SIGN_OUT:
      return {
        ...state,
        user: emptyUserObject,
        authToken: null,
        loginAs: null,
        refreshTokenData: null,
        expiresDateTime: null,
      };
    case types.SWITCH_ENVIRONMENT:
      return {
        ...state,
        backendEnv: action.payload,
      };
    case types.SET_PUSH_NOTIFICATION_TOKEN:
      return {
        ...state,
        expoPushToken: action.payload,
      };
    case types.SET_LOGIN_AS:
      return {
        ...state,
        loginAs: action.payload,
      };
    case types.SET_INTERCOM_LOGGED_IN:
      return {
        ...state,
        isIntercomLoggedIn: action.payload,
      };
    case types.SET_ONBOARDED_STATUS:
      return {
        ...state,
        user: {
          ...state.user,
          isOnboarded: action.payload,
        },
      };
    case types.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case types.SET_ERROR:
      return {
        ...state,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
