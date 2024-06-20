import * as WebBrowser from "expo-web-browser";
import React from "react";

import { Feather } from "@expo/vector-icons";

import NavigationButtonContainer from "./NavigationButtonContainer";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontArizona } from "src/components/common/Typography";

interface Props {
  androidMarginFix?: boolean;
  onPress?(): void;
}
const SkipButton: React.FC<Props> = ({ onPress }) => {
  const { goBack } = useNavigation();

  return (
    <NavigationButtonContainer side="left" onPress={onPress ?? goBack}>
      <TouchableOpacity
        style={[styles.button, styles.skipButton]}
        onPress={onPress}
      >
        <Text style={[styles.buttonText, styles.skipButtonText]}>Skip</Text>
      </TouchableOpacity>
    </NavigationButtonContainer>
  );
};

export default SkipButton;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "transparent",
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#006271",
  },
  skipButton: {
    opacity: 0.6,
  },
  skipButtonText: {
    color: "#006271",
    fontFamily: FontArizona.REGULAR,
  },
});
