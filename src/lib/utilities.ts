import { LogBox } from 'react-native';

/**
 * Parse errors to human readable form
 * from react hook form
 *
 * @param {Object} errorsObject
 * @returns {String}
 */
export function parseErrors(errorsObject: Record<string, any>) {
  let msg = '';
  Object.keys(errorsObject).forEach((field, i) => {
    msg = i > 0 ? msg.concat(', ') : msg;
    msg = msg.concat(errorsObject[field].message);
  });
  return msg;
}

export const ignoreWarnings = () => {
  // react-query triggers this warning, safe to ignore per
  // https://github.com/tannerlinsley/react-query/issues/1259
  const reactQueryLogs = ['Setting a timer', 'Non-serializable values'];

  const sentryLogs = [
    // Sentry is disabled in dev builds (enableInExpoDevelopment: false)
    // Dev/local errors are ignored and only app releases report errors to Sentry
    'Sentry Logger [Error]: SentryError: SDK not enabled, will not capture event.',
  ];

  const techDebtLogs = [
    // Jira: FP-1442
    'Please report: Excessive number of pending callbacks: 501',
    // Deprecated register/remove listener syntax warnings (Pendo on Android)
    '`new NativeEventEmitter()` was called with a non-null argument without the required `removeListeners` method.',
  ];

  const pendoLogs = [
    // Jira ticket: FP-1270
    'State must not be null',
  ];

  LogBox.ignoreLogs([
    ...reactQueryLogs,
    ...sentryLogs,
    ...techDebtLogs,
    ...pendoLogs,
  ]);
};

export const AXIOS_ERRORS_NO_LOG_LIST = [
  'Network Error',
  'timeout of 0ms exceeded',
];
