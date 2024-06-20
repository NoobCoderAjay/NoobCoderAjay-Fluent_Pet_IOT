import { useNavigation } from "@react-navigation/core";
import React from "react";
import { StyleSheet } from "react-native";

import { ArrowLeftIcon } from "src/assets/icons";
import { Colors } from "src/theme/Colors";

import NavigationButtonContainer from "./NavigationButtonContainer";

interface Props {
  androidMarginFix?: boolean;
  onPress?(): void;
}

const BackButton: React.FC<Props> = ({ androidMarginFix = false, onPress }) => {
  const { goBack } = useNavigation();

  return (
    <NavigationButtonContainer
      side="left"
      androidMarginFix={androidMarginFix}
      onPress={onPress ?? goBack}
      style={styles.buttonWrapper}
    >
      <ArrowLeftIcon color={Colors.WHITE} width={19} />
    </NavigationButtonContainer>
  );
};
const styles = StyleSheet.create({
  buttonWrapper: { paddingHorizontal: 5, paddingVertical: 10 },
});

export default BackButton;
