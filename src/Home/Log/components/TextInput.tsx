import React, { ReactNode } from 'react';
import {
  StyleSheet,
  View,
  TextInput as RNTextInput,
  TextInputProps,
  ViewStyle,
  StyleProp,
} from 'react-native';

import { Colors } from 'src/theme/Colors';
import { SizeV2 } from 'src/theme/Size';
import { TextSizeV2 } from 'src/theme/Text';

export interface Props extends TextInputProps {
  iconRight?: ReactNode;
  color?: Colors;
  containerStyle?: StyleProp<ViewStyle>;
}

export const TextInput: React.FC<Props> = (props) => {
  const { iconRight, color, containerStyle, ...rest } = props;
  return (
    <View style={[styles.container, containerStyle]}>
      <RNTextInput {...rest} style={[styles.textInput, { color }]} />
      {iconRight && <View style={styles.iconContainer}>{iconRight}</View>}
    </View>
  );
};

const TEXT_INPUT_HEIGHT = SizeV2.X2_L;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.SECONDARY_LIGHT,
    borderRadius: SizeV2.X2_S,
    height: TEXT_INPUT_HEIGHT,
    paddingLeft: SizeV2.M,
    flexDirection: 'row',
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  textInput: {
    flex: 1,
    height: TEXT_INPUT_HEIGHT,
    ...TextSizeV2.caption2,
  },
  iconContainer: {
    height: TEXT_INPUT_HEIGHT,
    width: TEXT_INPUT_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
