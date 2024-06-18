import React from 'react';
import { StyleSheet, TextStyle } from 'react-native';

import { Size } from 'src/theme/Size';

import AnimatedPressable from './AnimatedPressable';
import { Caption1 } from './Text';

interface Props {
  text: string;
  style?: TextStyle;
  onPress(): void;
}

const Link: React.FC<Props> = ({ text, style, onPress }) => (
  <AnimatedPressable onPress={onPress} style={styles.touchableWrapper}>
    <Caption1 underline letterSpacing={2} style={style}>
      {text}
    </Caption1>
  </AnimatedPressable>
);

export default Link;

const styles = StyleSheet.create({
  touchableWrapper: {
    padding: Size.X2_S,
  },
});
