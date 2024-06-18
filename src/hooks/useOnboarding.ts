import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";

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

export default function useOnboarding() {
  const { navigate } = useNavigation<NavigationProp<ParamListBase>>();
  const [isFetchedAfterMount, setIsFetchedAfterMount] = useState(false);
  const [isOnboarded, setIsOnboarded] = useState(false);
  const [isAlpha, setIsAlpha] = useState(false);

  // Simulate fetching buttons data after component mounts
  useEffect(() => {
    const fetchButtonsData = async () => {
      // Simulate a delay for fetching data
      setTimeout(() => {
        setIsFetchedAfterMount(true);
      }, 1000);
    };
    fetchButtonsData();
  }, []);

  // Simulate fetching feature flags
  useEffect(() => {
    const fetchFeatureFlags = async () => {
      // Simulate fetching feature flags from local storage or other source
      const onboarded =
        (await AsyncStorage.getItem(STORAGE_KEYS.IS_ONBOARDED)) === "true";
      const alpha =
        (await AsyncStorage.getItem(STORAGE_KEYS.IS_ALPHA)) === "true";
      setIsOnboarded(onboarded);
      setIsAlpha(alpha);
    };
    fetchFeatureFlags();
  }, []);

  const openSystemSelectionGuide = useCallback(async () => {
    if (isAlpha && isOnboarded) {
      navigate(Navigator.MODAL, {
        screen: Navigator.ONBOARDING_NAV,
        params: {
          screen: Screen.PROFILE_SCREEN,
        },
      });
    }
  }, [isAlpha, isOnboarded, navigate]);

  useEffect(() => {
    if (isFetchedAfterMount) {
      (async () => {
        try {
          await openSystemSelectionGuide();
        } finally {
          // Handle any cleanup or additional functionality
          // For example, open a bug report if needed
        }
      })();
    }
  }, [isFetchedAfterMount, openSystemSelectionGuide]);

  return {
    isFetchedAfterMount,
    isOnboarded,
    isAlpha,
    openSystemSelectionGuide,
  };
}
