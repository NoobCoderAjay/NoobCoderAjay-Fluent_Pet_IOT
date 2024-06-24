import React from 'react';
import { View, StyleSheet } from 'react-native';

import { BodyBold, Title1 } from 'src/components/common/Text';
import { Colors } from 'src/theme/Colors';
import { SizeV2 } from 'src/theme/Size';

const TopContainer = () => {
  return (
    <View style={styles.topContainer}>
      <Title1 v2 color={Colors.WHITE} align="center" marginBottom={SizeV2.X2_S}>
        Scan QR Code
      </Title1>
      <BodyBold color={Colors.WHITE} align="center" marginBottom={SizeV2.X2_S}>
        Scan the QR Code on the bottom of your Base.
      </BodyBold>
      <BodyBold color={Colors.WHITE} align="center">
        Place the QR code inside the frame.
      </BodyBold>
    </View>
  );
};

export default TopContainer;

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: Colors.BLACK_TRANSPARENT,
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    padding: SizeV2.L,
  },
});
