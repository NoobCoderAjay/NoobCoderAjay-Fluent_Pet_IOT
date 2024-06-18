import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import { Colors } from 'src/theme/Colors';

interface Props {
  value: boolean;
  // Set disabled to true if checkbox wrapped in pressable wrapper
  // Fixed issues on Android
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  onValueChange?(value: boolean): void;
}

const Checkbox: React.FC<Props> = ({
  value,
  disabled,
  style,
  onValueChange,
}) => {
  return (
    <CheckBox
      disabled={disabled}
      pointerEvents={disabled ? 'none' : 'auto'}
      value={value}
      onValueChange={onValueChange}
      // iOS
      onCheckColor={Colors.PRIMARY}
      onTintColor={Colors.PRIMARY}
      // Android
      tintColors={{
        true: Colors.PRIMARY,
        false: Colors.SECONDARY_LIGHT,
      }}
      style={style}
    />
  );
};

export default Checkbox;
