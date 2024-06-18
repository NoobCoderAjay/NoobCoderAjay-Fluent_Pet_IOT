export const BASE_NETWORK_PREFIX = "FPCON_";
export const BASE_SSID_INITIAL_STATE = BASE_NETWORK_PREFIX;
export const BASE_NETWORK_DEFAULT_PASSWORD = "12345678";
export const BASE_CREATE_URL = "/api/v1/webhooks/bases/";
export const ANDROID_CONNECTION_LIMIT_ERROR =
  "apps are only allowed to scan wifi networks a few times";
export const CAMERA_PERMISSION_MESSAGE: Record<string, string> = {
  ios: "Please go to Settings on your phone and give the FluentPet app permission to use your camera.",
  android:
    "Please try again. The FluentPet app needs access to your camera in order to scan the QR code.",
};
export const BASE_SERIAL_NUMBER_LENGTH = 12;
export const RETRY_NEARBY_NETWORKS_INTERVAL = 2500;
export const RETRY_BASE_REGISTERED_INTERVAL = 2500;
export const MAX_POLL_BASES_RETRIES = 20;

export enum Steps {
  WELCOME_GUIDE = 1,
  WIFI_MODE_GUIDE = 2,
  CONNECT_TO_BASE = 3,
  QR_SCANNER = 4,
  CONNECTING = 5,
  CONNECT_TO_BASE_AP_FAILED = 6,
  CONNECT_TO_BASE_AP_SUCCESSFUL = 7,
  GET_WIFI_CREDENTIALS = 8,
  CONNECTION_CHECKLIST = 9,
  BASE_SETUP_COMPLETED = 10,
  FIRMWARE_UPDATE = 11,
}

export const TOTAL_PROGRESS_BAR_STEPS = 6;
export const STEPS_TO_PROGRESS_MAP: Record<number, number> = {
  [Steps.WELCOME_GUIDE]: 1,
  [Steps.WIFI_MODE_GUIDE]: 1,
  [Steps.CONNECT_TO_BASE]: 2,
  [Steps.QR_SCANNER]: 2,
  [Steps.CONNECTING]: 2,
  [Steps.CONNECT_TO_BASE_AP_FAILED]: 2,
  [Steps.CONNECT_TO_BASE_AP_SUCCESSFUL]: 2,
  [Steps.GET_WIFI_CREDENTIALS]: 3,
  [Steps.CONNECTION_CHECKLIST]: 4,
  [Steps.FIRMWARE_UPDATE]: 5,
  [Steps.BASE_SETUP_COMPLETED]: 6,
};

export enum ChecklistPoints {
  CONNECT_BASE_TO_WIFI = 1,
  REGISTER_BASE = 2,
  CONNECT_PHONE_TO_WIFI = 3,
  CONFIRM_BASE_REGISTERED = 4,
}

export interface ChecklistError {
  message: string;
  buttonLabel: string;
  onContinue(): void;
}

export enum ChecklistErrors {
  LOST_CONNECTION_WITH_BASE = "There was an issue when trying to communicate with your Base. Please try again.",
  REGISTER_BASE = "Could not register your Base. Please try again.",
  CONNECT_TO_WI_FI = "Could not connect your Base to the selected Wi-Fi network. Please check your password and try again.",
}
