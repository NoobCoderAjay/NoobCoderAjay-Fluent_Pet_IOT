import { FontAwesome, Ionicons } from '@expo/vector-icons';
import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';

import { SizeV2 } from 'src/theme/Size';

import { BatteryIconProps, BatteryState } from './constants';

interface Props {
  value?: number;
}

export const BatteryLevel: React.FC<Props> = ({ value }) => {
  const batteryIconProps = useMemo(() => {
    if (value === undefined) {
      return BatteryIconProps[BatteryState.UNAVAILABLE];
    } else if (value > 90) {
      return BatteryIconProps[BatteryState.FULL];
    } else if (value > 64) {
      return BatteryIconProps[BatteryState.THREE_QUARTERS];
    } else if (value > 45) {
      return BatteryIconProps[BatteryState.HALF];
    } else if (value > 20) {
      // backend reports to user at this level
      return BatteryIconProps[BatteryState.QUARTER];
    } else if (value >= 0) {
      return BatteryIconProps[BatteryState.EMPTY];
    } else if (value === -1) {
      return BatteryIconProps[BatteryState.CHARGING];
    } else {
      return BatteryIconProps[BatteryState.UNAVAILABLE];
    }
  }, [value]);

  return (
    <View style={styles.container}>
      {batteryIconProps.name === 'battery-charging-sharp' ? (
        <Ionicons
          size={16}
          name={batteryIconProps.name}
          color={batteryIconProps.color}
          style={styles.batteryIcon}
        />
      ) : (
        <FontAwesome
          name={batteryIconProps.name}
          color={batteryIconProps.color}
          style={styles.batteryIcon}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  batteryIcon: {
    marginRight: SizeV2.XS,
    marginBottom: SizeV2.X2_S / 2,
  },
});
