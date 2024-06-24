import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Colors } from 'src/theme/Colors';
import { SCREEN_WIDTH } from 'src/theme/Size';

import CameraViewCorner from './CameraViewCorner';

const MiddleContainer = () => (
  <View style={styles.row}>
    <View style={styles.semiTransparentArea} />
    <View style={styles.transparentScanningArea}>
      <View style={styles.cornerTopLeft}>
        <CameraViewCorner position="topLeft" />
      </View>
      <View style={styles.cornerBottomLeft}>
        <CameraViewCorner position="bottomLeft" />
      </View>
      <View style={styles.cornerTopRight}>
        <CameraViewCorner position="topRight" />
      </View>
      <View style={styles.cornerBottomRight}>
        <CameraViewCorner position="bottomRight" />
      </View>
    </View>
    <View style={styles.semiTransparentArea} />
  </View>
);

export default MiddleContainer;

const TRANSPARENT_BOX_SIZE = SCREEN_WIDTH * 0.7;

const styles = StyleSheet.create({
  transparentScanningArea: {
    width: TRANSPARENT_BOX_SIZE,
    height: TRANSPARENT_BOX_SIZE,
  },
  semiTransparentArea: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.BLACK_TRANSPARENT,
  },
  row: {
    flexDirection: 'row',
  },
  cornerTopLeft: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
  cornerBottomLeft: {
    position: 'absolute',
    left: 0,
    bottom: 0,
  },
  cornerTopRight: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  cornerBottomRight: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
});
