import Lottie from 'lottie-react-native';
import React, { useRef } from 'react';
import { StyleSheet, View } from 'react-native';

import { lottieJSON } from 'src/assets/lottie';
import { AnimatedEllipses } from 'src/components/common';
import { Body } from 'src/components/common/Text';
import { Colors } from 'src/theme/Colors';
import { SizeV2 } from 'src/theme/Size';

interface Props {
  loadingText: string;
  body: string;
}

export const FullScreenLoader: React.FC<Props> = ({ loadingText, body }) => {
  const animation = useRef(null);

  return (
    <View style={styles.centerHorizontal}>
      <AnimatedEllipses text={loadingText} marginBottom={SizeV2.S} />
      <Body v2 align="center" marginBottom={SizeV2.X4_L}>
        {body}
      </Body>
      <Lottie
        autoPlay
        ref={animation}
        style={styles.lottieView}
        source={lottieJSON.dogWalking}
      />
    </View>
  );
};

const LOTTIE_VIEW_SIZE = 300;

const styles = StyleSheet.create({
  centerHorizontal: {
    flex: 1,
    alignItems: 'center',
  },
  lottieView: {
    width: LOTTIE_VIEW_SIZE,
    height: LOTTIE_VIEW_SIZE,
    backgroundColor: Colors.WHITE,
  },
});
