import React from 'react';
import { Pressable } from 'react-native';

interface Props {
  children: React.ReactNode;
  disabled?: boolean;
  onLongPress?: any;
  onPress?: any;
  onPressIn?: any;
  onPressOut?: any;
  style?: any;
}

const AnimatedPressable: React.FC<Props> = ({
  children,
  disabled,
  onLongPress,
  onPress,
  onPressIn,
  onPressOut,
  style,
}) => {
  return (
    <Pressable
      disabled={disabled}
      onLongPress={onLongPress}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      style={({ pressed }) =>
        [{ opacity: pressed ? 0.25 : 1.0 }].concat(style)
      }>
      {children}
    </Pressable>
  );
};

export default AnimatedPressable;
