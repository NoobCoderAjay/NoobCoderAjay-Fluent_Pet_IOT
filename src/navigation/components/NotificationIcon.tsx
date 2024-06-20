import * as WebBrowser from "expo-web-browser";
import React from "react";

import { Ionicons } from "@expo/vector-icons";

import NavigationButtonContainer from "./NavigationButtonContainer";
import { View } from "react-native";

const NotificationIcon: React.FC = () => {
  const onPress = async () => {
    // await WebBrowser.openBrowserAsync('https://fluent.pet/collections/kits');
  };

  return (
    <NavigationButtonContainer side="right" onPress={onPress}>
      <Ionicons name="notifications-outline" size={24} color="#006271" />
    </NavigationButtonContainer>
  );
};

export default NotificationIcon;
