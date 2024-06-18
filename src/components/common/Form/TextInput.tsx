import React, { forwardRef, ReactElement, useState } from 'react';
import { FieldError } from 'react-hook-form';
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  View,
} from 'react-native';

import { IconProps } from 'src/assets/icons/types';
import { Colors } from 'src/theme/Colors';
import { Size } from 'src/theme/Size';
import { Font, TextSize } from 'src/theme/Text';

import AnimatedPressable from '../AnimatedPressable';
import RoundedIcon from './RoundedIcon';

export interface TextInputProps extends RNTextInputProps {
  height?: number;
  IconRight?: ReactElement;
  icon?: React.FC<IconProps>;
  backgroundColor?: Colors;
  touched?: boolean;
  error?: string | FieldError;
  toggleTextIsMasked?: boolean;
  marginBottom?: Size;
  disablePointerEvents?: boolean;
  disableValidation?: boolean;
  value: any;
}

const TextInput = forwardRef<RNTextInput, TextInputProps>(
  (
    {
      height = Size.TEXT_INPUT_HEIGHT,
      icon: Icon,
      IconRight,
      backgroundColor = Colors.GREY,
      touched,
      error,
      value,
      toggleTextIsMasked,
      marginBottom,
      disablePointerEvents,
      disableValidation,
      ...props
    },
    ref,
  ) => {
    const [textIsMasked, setTextIsMasked] = useState(!!props.secureTextEntry);

    const validationColor = error ? Colors.RED : Colors.PRIMARY;
    const placeholderColor = touched ? validationColor : Colors.GREY_DARK;
    const iconColor = touched ? validationColor : Colors.SECONDARY;

    const toggleTextMask = () => {
      setTextIsMasked((prevState) => !prevState);
    };

    return (
      <View
        pointerEvents={disablePointerEvents ? 'none' : 'auto'}
        style={{ marginBottom, backgroundColor, ...styles.container }}>
        {Icon && (
          <View
            style={{
              backgroundColor,
              ...styles.leftIconContainer,
            }}>
            <Icon color={iconColor} />
          </View>
        )}
        <RNTextInput
          underlineColorAndroid="transparent"
          placeholderTextColor={placeholderColor}
          style={{
            height,
            ...styles.textInput,
          }}
          value={value}
          {...{ ref }}
          {...props}
          secureTextEntry={textIsMasked}
        />
        {IconRight}
        {!!value && toggleTextIsMasked && (
          <View
            style={{
              backgroundColor,
              ...styles.rightIconContainer,
            }}>
            <AnimatedPressable onPress={toggleTextMask}>
              <RoundedIcon
                name={textIsMasked ? 'eye' : 'eye-off'}
                size={Size.XL}
              />
            </AnimatedPressable>
          </View>
        )}
        {touched && !disableValidation && (
          <View
            style={{
              backgroundColor,
              ...styles.rightIconContainer,
            }}>
            <RoundedIcon
              name={!error ? 'check' : 'x'}
              size={Size.L}
              backgroundColor={!error ? Colors.PRIMARY : Colors.RED}
              color={Colors.WHITE}
            />
          </View>
        )}
      </View>
    );
  },
);

export default TextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: Size.BORDER_RADIUS,
    paddingHorizontal: Size.S,
  },
  textInput: {
    fontFamily: Font.REGULAR,
    fontSize: TextSize.body.fontSize,
    flexGrow: 1,
  },
  leftIconContainer: {
    width: Size.XL,
    justifyContent: 'center',
  },
  rightIconContainer: {
    justifyContent: 'center',
  },
});
