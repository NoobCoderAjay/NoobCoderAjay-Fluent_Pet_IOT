import _ from 'lodash';
import React from 'react';
import { View, ViewStyle } from 'react-native';

import { Colors } from 'src/theme/Colors';
import { Size, SizeV2 } from 'src/theme/Size';

interface Props {
  width?: number | '100%';
  height?: number;
  color?: Colors;
  marginTop?: Size | SizeV2;
  marginBottom?: Size | SizeV2;
  marginHorizontal?: Size | SizeV2;
  style?: ViewStyle;
  fullWidth?: boolean;
}

const Divider: React.FC<Props> = ({
  width = Size.X4_L,
  height = 3,
  color = Colors.PRIMARY,
  marginTop,
  marginBottom,
  marginHorizontal,
  style,
  fullWidth,
}) => {
  const borderRadius = _.isNumber(width) ? width / 2 : 0;

  return (
    <View
      style={[
        {
          height,
          backgroundColor: color,
          borderRadius,
          marginTop,
          marginBottom,
          marginHorizontal,
        },
        // eslint-disable-next-line react-native/no-inline-styles
        fullWidth ? { flex: 1 } : { width },
        style,
      ]}
    />
  );
};

export default Divider;
