import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  StyleProp,
  ViewStyle,
} from "react-native";
import { Colors } from "../../../theme/Colors";
import { Size } from "../../../theme/Size";

import { Font } from "../../../theme/Text";
import { Body } from "src/components/common/Typography";

const DEFAULT_WIDTH = 268;
const DEFAULT_HEIGHT = 52;
const ICON_CONTAINER_WIDTH = 48;

interface Props {
  label: string;
  color?: Colors;
  textColor: Colors;
  height?: number;
  width?: number | string;
  marginBottom?: Size;
  iconLeft?: React.ReactNode;
  fullWidth?: boolean;
  onPress?(): void;
}

const DrawerButton: React.FC<Props> = ({
  label,
  color = Colors.PRIMARY,
  textColor = Colors.PRIMARY_DARK,
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
  marginBottom = Size.S,
  iconLeft,
  fullWidth,
  onPress,
}) => {
  const buttonWidth = fullWidth ? "100%" : width;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        {
          marginBottom,
          height,
          width: buttonWidth,
          backgroundColor: color,
          borderRadius: Size.BORDER_RADIUS,
        } as StyleProp<ViewStyle>
      }
    >
      <View style={styles.buttonWrapper}>
        {iconLeft && <View style={styles.iconLeft}>{iconLeft}</View>}
        <Body style={styles.label} numberOfLines={1} color={textColor as any}>
          {label}
        </Body>
      </View>
    </TouchableOpacity>
  );
};

export default DrawerButton;

const styles = StyleSheet.create({
  buttonWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: Size.S,
    paddingRight: Size.S,
  },
  label: {
    flex: 1,
    fontFamily: Font.BOLD,
    letterSpacing: 1,
  },
  iconLeft: {
    width: ICON_CONTAINER_WIDTH,
    alignItems: "center",
  },
});
