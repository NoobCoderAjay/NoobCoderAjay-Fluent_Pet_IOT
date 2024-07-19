import ExpoMixpanelAnalytics from '@bothrs/expo-mixpanel-analytics';
import type { NavigationState, PartialState } from '@react-navigation/routers';
import { PendoSDK, NavigationLibraryType } from 'rn-pendo-sdk';

import { Screen } from '@navigation/constants';

import { env } from 'src/lib/environment';

const analytics = new ExpoMixpanelAnalytics(env.MIXPANEL_PROJECT_TOKEN);

// Taken from https://segment.com/docs/connections/sources/catalog/libraries/mobile/react-native/#automatic-screen-tracking
const getActiveRouteName = (
  state: NavigationState | PartialState<NavigationState> | undefined,
): Screen => {
  if (!state || typeof state.index !== 'number') {
    return Screen.UNKNOWN;
  }

  const route = state.routes[state.index];
  if (route.state) {
    return getActiveRouteName(route.state);
  }

  return route.name as Screen;
};

export { getActiveRouteName };
export default analytics;

// Do this first
const navigationOptions = {
  library: NavigationLibraryType.ReactNavigation,
  navigation: null,
};
if (PendoSDK) {
  PendoSDK.setup(env.PENDO_KEY, navigationOptions);
}
