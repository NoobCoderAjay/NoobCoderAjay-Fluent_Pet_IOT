import { Feather as Icon } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Colors } from 'src/theme/Colors';
import { Size } from 'src/theme/Size';

export interface RoundedIconProps {
  name: string;
  size: number;
  color?: Colors;
  backgroundColor?: Colors;
  iconRatio: number;
  align: 'center' | 'flex-start' | 'flex-end';
}

const RoundedIcon = ({
  name,
  size,
  color,
  backgroundColor,
  iconRatio,
  align,
}: RoundedIconProps) => {
  const iconSize = size * iconRatio;
  return (
    <View
      style={{
        height: size,
        width: size,
        alignItems: align,
        borderRadius: size / 2,
        backgroundColor,
        ...styles.container,
      }}>
      <Icon size={iconSize} color={color} {...({ name } as any)} />
    </View>
  );
};

RoundedIcon.defaultProps = {
  iconRatio: 0.7,
  align: 'center',
};

export default RoundedIcon;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginRight: Size.XS,
  },
});
