import * as WebBrowser from "expo-web-browser";
import React from "react";

import { Feather } from "@expo/vector-icons";

import NavigationButtonContainer from "./NavigationButtonContainer";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface Props {
  androidMarginFix?: boolean;
  onPress?(): void;
}
const IconLeft: React.FC<Props> = ({ onPress }) => {
  const { goBack } = useNavigation();

  return (
    <NavigationButtonContainer side="left" onPress={onPress ?? goBack}>
      <Feather name="chevron-left" size={24} color="#006271" />
    </NavigationButtonContainer>
  );
};

export default IconLeft;
