import Constants from "expo-constants";
import { Platform } from "react-native";

export const IS_ANDROID = Platform.OS === "android";
export const IS_IOS = Platform.OS === "ios";
export const TAB_BAR_HEIGHT = 60;
export const packageName = "com.fluentpet.mobile";

export const APP_VERSION =
  (Constants?.expoConfig?.runtimeVersion as string) ??
  (Constants?.expoConfig?.version as string);
