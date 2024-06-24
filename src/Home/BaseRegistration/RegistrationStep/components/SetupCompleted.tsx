import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import { images } from 'src/assets/images';
import { BatteryLevel } from 'src/components/BatteryLevel';
import { BodyBold, HeadlineLight, Title1 } from 'src/components/common/Text';
import { Base } from 'src/model/base';
import { Colors } from 'src/theme/Colors';
import { Size, SizeV2 } from 'src/theme/Size';

interface Props {
  base?: Base;
}

export const SetupCompleted: React.FC<Props> = ({ base }) => {
  const batteryLevel = base?.shadow?.state.reported?.bat_level;

  return (
    <View style={styles.fullWidth}>
      <Title1 v2 color={Colors.PRIMARY_DARK} marginBottom={SizeV2.X2_L}>
        Your Base is connected
      </Title1>
      <Image
        style={styles.baseImage}
        source={images.baseRegistration.base}
        resizeMode="contain"
      />
      <HeadlineLight v2 marginBottom={Size.X2_S}>
        Base Name
      </HeadlineLight>
      <BodyBold marginBottom={Size.M}>{base?.name ?? 'Base'}</BodyBold>
      <HeadlineLight v2 marginBottom={Size.X2_S}>
        Base Serial Number
      </HeadlineLight>
      <BodyBold marginBottom={Size.M}>{base?.serial_number ?? ''}</BodyBold>
      <HeadlineLight v2 marginBottom={Size.X2_S}>
        Battery Level
      </HeadlineLight>
      {batteryLevel !== undefined && (
        <BatteryLevel value={parseInt(batteryLevel, 10)} />
      )}
    </View>
  );
};

const BASE_IMAGE_SIZE = 200;

const styles = StyleSheet.create({
  fullWidth: {
    width: '100%',
  },
  baseImage: {
    alignSelf: 'center',
    width: BASE_IMAGE_SIZE,
    height: BASE_IMAGE_SIZE,
    marginBottom: SizeV2.L,
  },
});
