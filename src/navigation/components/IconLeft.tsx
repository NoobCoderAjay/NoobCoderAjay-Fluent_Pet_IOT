import * as WebBrowser from "expo-web-browser";
import React from "react";

import { Feather } from "@expo/vector-icons";

import NavigationButtonContainer from "./NavigationButtonContainer";
import { View } from "react-native";

const IconLeft: React.FC = () => {
  const onPress = async () => {
    // await WebBrowser.openBrowserAsync('https://fluent.pet/collections/kits');
  };

  return (
    <NavigationButtonContainer side="right" onPress={onPress}>
      <Feather name="chevron-left" size={24} color="#006271" />
    </NavigationButtonContainer>
  );
};

export default IconLeft;
