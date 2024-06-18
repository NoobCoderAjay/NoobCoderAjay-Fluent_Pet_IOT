import React from "react";
import { StyleProp, TouchableOpacity, ViewStyle } from "react-native";

import { Size } from "../../theme/Size";
import { IS_ANDROID } from "src/constants";

const PADDING_LARGE = Size.L;
const PADDING_SMALL = Size.M;
const ANDROID_MARGIN = 11;

interface Props {
  side: "left" | "right";
  onPress(): void;
  androidMarginFix?: boolean;
  style?: StyleProp<ViewStyle>;
  children: React.ReactChild;
}

const NavigationButtonContainer: React.FC<Props> = ({
  side,
  onPress,
  androidMarginFix = false,
  style,
  children,
}) => {
  const padding = {
    paddingLeft: side === "left" ? PADDING_LARGE : PADDING_SMALL,
    paddingRight: side === "right" ? PADDING_LARGE : PADDING_SMALL,
  };

  const containerStyle = {
    marginLeft: IS_ANDROID && androidMarginFix ? -ANDROID_MARGIN : 0,
  };

  return (
    <TouchableOpacity
      style={[containerStyle, padding, style]}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};

export default NavigationButtonContainer;
