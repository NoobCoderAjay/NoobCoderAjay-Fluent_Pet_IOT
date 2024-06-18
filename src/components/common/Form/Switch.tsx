import Color from 'color';
import React from 'react';
import { Switch as RNSwitch, SwitchProps } from 'react-native';

import { IS_ANDROID } from 'src/constants';
import { Colors } from 'src/theme/Colors';

const Switch: React.FC<SwitchProps> = (props) => {
  const getAndroidEnabledTrackColor = () => {
    if (props.disabled) {
      return undefined;
    } else {
      return Color(Colors.PRIMARY).lighten(0.5).hex.toString();
    }
  };

  const getAndroidThumbColor = () => {
    if (props.disabled) {
      return undefined;
    } else if (props.value) {
      return Colors.PRIMARY;
    } else {
      return Colors.WHITE;
    }
  };

  return (
    <RNSwitch
      trackColor={{
        true: IS_ANDROID ? getAndroidEnabledTrackColor() : Colors.PRIMARY,
      }}
      thumbColor={IS_ANDROID ? getAndroidThumbColor() : Colors.WHITE}
      {...props}
    />
  );
};

export default Switch;
