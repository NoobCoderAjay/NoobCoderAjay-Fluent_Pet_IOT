import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { useCallback, useEffect } from "react";

import { Navigator, Screen } from "@navigation/constants";

import { STORAGE_KEYS } from "src/lib/storageKeys";
import { Button } from "src/model/interaction";

export const shouldOpenSystemSelectionGuide = async (buttons: Button[]) => {
  const hasSeenSystemSetupScreen =
    (await AsyncStorage.getItem(STORAGE_KEYS.HAS_SEEN_SYSTEM_SETUP_GUIDE)) ===
    "true";

  if (hasSeenSystemSetupScreen) {
    return false;
  }

  const userHasNoButtons =
    buttons.filter((b: Button) => b.text !== "inaudible").length === 0;

  return userHasNoButtons;
};

// Triggers the onboarding guide (opens system selection screen)
export default function useOnboarding() {
  const { navigate } = useNavigation<NavigationProp<ParamListBase>>();

  const openSystemSelectionGuide = useCallback(async () => {
    if (true) {
      navigate(Navigator.MODAL, {
        screen: Navigator.ONBOARDING_NAV,
        params: {
          screen: Screen.PROFILE_SCREEN,
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (true) {
      (async () => {
        try {
          await openSystemSelectionGuide();
        } finally {
          // Open bug report if crash occurred during previous session
        }
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [true]);
}
