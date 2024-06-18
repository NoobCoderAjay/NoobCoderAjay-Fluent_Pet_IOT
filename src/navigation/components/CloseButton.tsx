import { useNavigation } from "@react-navigation/core";
import React from "react";
import { StyleSheet, ViewStyle } from "react-native";

import { CloseIcon, DeleteIcon } from "../../assets/icons";
import { Colors } from "../../theme/Colors";
import NavigationButtonContainer from "./NavigationButtonContainer";

interface Props {
  withBackground?: boolean;
  color?: Colors | string;
  backgroundColor?: Colors;
  containerStyle?: ViewStyle;
  androidMarginFix?: boolean;
  onPress?(): void;
}

const CloseButton: React.FC<Props> = ({
  withBackground,
  color = Colors.WHITE,
  backgroundColor,
  containerStyle,
  androidMarginFix = false,
  onPress,
}) => {
  const { goBack } = useNavigation();

  return (
    <NavigationButtonContainer
      side="left"
      style={{
        ...containerStyle,
        ...styles.buttonWrapper,
      }}
      androidMarginFix={androidMarginFix}
      onPress={onPress ?? goBack}
    >
      {!withBackground ? (
        <CloseIcon color={color} width={19} />
      ) : (
        <DeleteIcon color={color} backgroundColor={backgroundColor} />
      )}
    </NavigationButtonContainer>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: { paddingHorizontal: 5, paddingVertical: 10 },
});
export default CloseButton;
