import iot from './iot.env';
import production from './production.env';
import staging from './staging.env';

enum BackendEnvType {
  PRODUCTION = 'PRODUCTION',
  STAGING = 'STAGING',
  IOT = 'IOT',
  LOCAL = 'LOCAL',
}

const backendEnvs = {
  PRODUCTION: production.API_URL,
  STAGING: staging.API_URL,
  IOT: iot.API_URL,
  LOCAL: '',
};

// Only include LOCAL backend if the app is run in Expo's DEV mode
if (__DEV__) {
  backendEnvs[BackendEnvType.LOCAL] = 'http://localhost:3000';
  // uncomment below for Android emulator usage
  // backendEnvs[BackendEnvType.LOCAL] = 'http://10.0.2.2:3000';
}

const defaultBackendEnv = __DEV__
  ? BackendEnvType.IOT
  : BackendEnvType.PRODUCTION;

const env = __DEV__ ? iot : production;

export { env, backendEnvs, defaultBackendEnv, BackendEnvType };
