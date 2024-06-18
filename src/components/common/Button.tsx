import Color from 'color';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Colors } from 'src/theme/Colors';
import { Size, SizeV2 } from 'src/theme/Size';
import { Font, TextSize } from 'src/theme/Text';

import AnimatedPressable from './AnimatedPressable';
import { Body } from './Text';

interface LabelStyle {
  color?: Colors;
  fontFamily?: Font;
  fontSize?: number;
  letterSpacing?: number;
}

export interface ButtonProps {
  label: string;
  labelStyle?: LabelStyle;
  color?: Colors | string;
  height?: number;
  width?: number | string;
  marginBottom?: Size | SizeV2;
  iconLeft?: React.ReactNode;
  fullWidth?: boolean;
  isDisabled?: boolean;
  outline?: boolean;
  onPress?(): void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  color = Colors.PRIMARY,
  labelStyle,
  width = Size.BUTTON_WIDTH,
  height = Size.BUTTON_HEIGHT,
  marginBottom,
  fullWidth,
  isDisabled = false,
  outline = false,
  onPress,
}) => {
  const buttonWidth = fullWidth ? '100%' : width;
  const disabledColor = Color(color)
    .mix(Color('white'))
    .rgb()
    .desaturate(0.2)
    .string();
  const currentColor = isDisabled ? disabledColor : color;
  const borderColor = outline ? labelStyle?.color ?? Colors.PRIMARY : undefined;
  const borderWidth = outline ? 2 : 0;

  return (
    <AnimatedPressable
      disabled={isDisabled || !onPress}
      style={{
        width: buttonWidth,
        marginBottom,
        ...styles.touchableWrapper,
      }}
      onPress={onPress}>
      <View
        style={{
          height,
          backgroundColor: currentColor,
          borderColor,
          borderWidth,
          ...styles.buttonInner,
        }}>
        <Body
          align="center"
          color={labelStyle?.color ?? Colors.WHITE}
          style={{
            fontFamily: labelStyle?.fontFamily ?? Font.BOLD,
            fontSize: labelStyle?.fontSize ?? TextSize.body.fontSize,
          }}
          letterSpacing={
            labelStyle?.letterSpacing ?? Size.BUTTON_LETTER_SPACING
          }>
          {label}
        </Body>
      </View>
    </AnimatedPressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  touchableWrapper: {
    flexDirection: 'row',
  },
  buttonInner: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Size.XS,
    borderRadius: Size.BORDER_RADIUS,
  },
});
