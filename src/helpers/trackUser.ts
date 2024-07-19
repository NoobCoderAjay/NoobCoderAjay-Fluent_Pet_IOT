import { PendoSDK } from 'rn-pendo-sdk';
import * as Sentry from 'sentry-expo';

import { flattenJSON } from 'src/helpers/flattenJSON';
import analytics from 'src/lib/analytics';

interface Params {
  email?: string;
  name?: string;
  id?: number | null;
  householdId: number | null;
  userProps: Object;
}

export const identifyUser = ({
  email = 'Unknown',
  name = 'Unknown',
  id = null,
  householdId = null,
  userProps = {},
}: Params) => {
  // Register this user in Sentry
  Sentry.Native.setUser({ email, name });

  // Register this user for global tracking
  console.debug(
    `Analytics identify: ${email}: ${JSON.stringify(flattenJSON(userProps))}`,
  );
  analytics.identify(email);

  if (PendoSDK) {
    console.log('Pendo Starting Session');
    PendoSDK.startSession(
      email,
      householdId?.toString() || 'Unknown',
      { email: email, name: name, id: id, ...flattenJSON(userProps) },
      {},
    );
  } else {
    console.log('Pendo not yet ready for startSession');
  }
};

export const resetUser = () => {
  // Clear user in Sentry
  Sentry.Native.configureScope((scope) => scope.setUser(null));
};
