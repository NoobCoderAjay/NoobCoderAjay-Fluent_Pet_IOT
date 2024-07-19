import { Camera } from "expo-camera";
import * as Location from "expo-location";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import React, { useEffect, useState } from "react";
import { Platform, ScrollView, StyleSheet } from "react-native";

import { Screen } from "@navigation/constants";
// import { BaseRegistrationStackScreenProps } from "@navigation/navigators/BaseRegistrationNavigator";

// import { ScreenWrapper } from "src/components";
import { SafeAreaBottomButton } from "src/components/common";
import { Body, Title1 } from "src/components/common/Text";
import { Colors } from "src/theme/Colors";
import { SizeV2 } from "src/theme/Size";

import CheckboxSetting, { CheckboxSettingProps } from "./CheckboxSetting";
import { PERMISSIONS_TO_DISPLAY, PERMISSION_ERRORS } from "./constants";

// type Props = BaseRegistrationStackScreenProps<Screen.BASE_SETUP_PERMISSIONS>;
type Props = {};
const BaseSetupPermissions: React.FC<Props> = ({}) => {
  const [locationPermission, requestLocationPermission] =
    Location.useForegroundPermissions();
  const [cameraPermission, requestCameraPermission] =
    Camera.useCameraPermissions();
  const [pushNotificationPermission, requestPushNotificationPermission] =
    Notifications.usePermissions();

  const [shouldUpdatePushToken, setShouldUpdatePushToken] = useState(false);

  useEffect(() => {
    const updateExpoPushToken = async () => {
      try {
        // Simulate fetching push token
        console.log("Fetching Expo push token...");
      } catch (error) {
        console.error("Failed to fetch Expo push token.", error);
      }
    };

    if (shouldUpdatePushToken && pushNotificationPermission?.granted) {
      setShouldUpdatePushToken(false);
      updateExpoPushToken();
    }
  }, [shouldUpdatePushToken, pushNotificationPermission]);

  const platform = Platform.OS as "ios" | "android";

  const requestPushPermission = () => {
    requestPushNotificationPermission();
    if (Device.isDevice) {
      setShouldUpdatePushToken(true);
    }
  };

  const SETTINGS: CheckboxSettingProps[] = [
    {
      isVisible: PERMISSIONS_TO_DISPLAY[platform].location,
      isSelected: locationPermission?.granted ?? false,
      title:
        "Allow the app to access your Base’s location while using the app only",
      description: "This lets the app connect to your Base.",
      error:
        locationPermission?.canAskAgain === false
          ? PERMISSION_ERRORS.location
          : undefined,
      onPress: requestLocationPermission,
    },
    {
      isVisible: PERMISSIONS_TO_DISPLAY[platform].camera,
      isSelected: cameraPermission?.granted ?? false,
      title: "Allow the app to access your phone's camera",
      description:
        "This lets the app allow access to your camera in order to take a photo of the QR code on the bottom of your Base, and connect to your Base automatically.",
      isOptional: true,
      error:
        cameraPermission?.canAskAgain === false
          ? PERMISSION_ERRORS.camera
          : undefined,
      onPress: requestCameraPermission,
    },
    {
      isVisible: PERMISSIONS_TO_DISPLAY[platform].notifications,
      isSelected: pushNotificationPermission?.granted ?? false,
      title: "Allow the app to receive push notifications.",
      description:
        "This lets the app receive notifications, e.g. when a Connect Button is pressed by your Learner.",
      isOptional: true,
      error:
        pushNotificationPermission?.canAskAgain === false
          ? PERMISSION_ERRORS.notifications
          : undefined,
      onPress: requestPushPermission,
    },
  ];

  const requiredPermissionsNotGranted = SETTINGS.some(
    ({ isVisible, isOptional, isSelected }) =>
      isVisible && !isOptional && !isSelected
  );

  const onContinue = () => {
    // navigation.navigate(Screen.BASE_REGISTRATION);
  };

  return (
    <>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Title1 v2 marginBottom={SizeV2.S} color={Colors.PRIMARY_DARK}>
          Let's configure your settings
        </Title1>
        <Body v2 marginBottom={SizeV2.X2_L}>
          To setup your Base, please configure the following permissions.
        </Body>
        {SETTINGS.map((setting, idx) =>
          setting.isVisible ? (
            <CheckboxSetting key={`${setting.title}${idx}`} {...setting} />
          ) : null
        )}
      </ScrollView>
      <SafeAreaBottomButton
        isDisabled={requiredPermissionsNotGranted}
        label="CONTINUE"
        onPress={onContinue}
      />
    </>
  );
};

export default BaseSetupPermissions;

const styles = StyleSheet.create({
  contentContainer: {
    padding: SizeV2.L,
    paddingVertical: SizeV2.X2_L,
  },
});
