import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Colors } from 'src/theme/Colors';
import { Size, SizeV2 } from 'src/theme/Size';

import { Caption2 } from './Text';

interface Props {
  title: string;
  message?: string;
}

const ErrorMessage: React.FC<Props> = ({ title, message }) => {
  const titleMarginBottom: SizeV2 | Size | undefined = message
    ? SizeV2.X2_S
    : undefined;

  return (
    <View style={styles.container}>
      <AntDesign
        name="exclamationcircleo"
        size={SizeV2.S}
        color={Colors.RED}
        style={styles.errorIcon}
      />
      <View>
        <Caption2 v2 color={Colors.RED} marginBottom={titleMarginBottom}>
          {title}
        </Caption2>
        {message && (
          <Caption2 v2 color={Colors.RED}>
            {message}
          </Caption2>
        )}
      </View>
    </View>
  );
};

export default ErrorMessage;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: SizeV2.S,
  },
  errorIcon: {
    marginTop: SizeV2.X3_S,
    marginRight: SizeV2.XS,
  },
});
