import _ from 'lodash';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { images } from 'src/assets/images';
import {
  ErrorMessage,
  SecondaryButton,
  SupportLink,
} from 'src/components/common';
import { TextInput } from 'src/components/common/Form';
import { Body, Caption2, Title1 } from 'src/components/common/Text';
import { Colors } from 'src/theme/Colors';
import { SCREEN_WIDTH, Size, SizeV2 } from 'src/theme/Size';

import { BASE_SERIAL_NUMBER_LENGTH } from '../../constants';
import { validateBaseSerialNumber } from '../../helpers';

interface Props {
  baseSerialNumber: string;
  onChangeBaseSerialNumber(ssid: string): void;
  onOpenQRScanner(): void;
}

export const ConnectToBase: React.FC<Props> = ({
  baseSerialNumber,
  onChangeBaseSerialNumber,
  onOpenQRScanner,
}) => {
  const serialNumberValid = validateBaseSerialNumber(baseSerialNumber);
  const showSerialNumberError =
    baseSerialNumber.length >= BASE_SERIAL_NUMBER_LENGTH && !serialNumberValid;

  const Divider = () => (
    <View style={styles.dividerContainer}>
      <View style={styles.dividerLine} />
      <Caption2 v2 style={styles.dividerText}>
        OR
      </Caption2>
      <View style={styles.dividerLine} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Title1 v2 color={Colors.PRIMARY_DARK} marginBottom={SizeV2.S}>
        Connect to your Base
      </Title1>
      <Body v2 marginBottom={Size.L}>
        Scan the QR code on the bottom of the Base to automatically connect to
        it.
      </Body>
      <SecondaryButton
        label="SCAN QR CODE ON BASE"
        fullWidth
        onPress={onOpenQRScanner}
      />
      <Divider />
      <Body v2 marginBottom={SizeV2.S}>
        Enter the serial number of your Base, and tap “CONNECT”. The serial
        number is 12 letters/digits, written on the bottom of your base, below
        the QR code.
      </Body>
      <TextInput
        touched={serialNumberValid}
        autoCapitalize="characters"
        placeholder="Serial number"
        value={baseSerialNumber}
        onChangeText={(value) => onChangeBaseSerialNumber(_.trim(value))}
      />
      {showSerialNumberError ? (
        <ErrorMessage title="The entered Base serial number is not valid." />
      ) : (
        <Body v2 />
      )}
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={images.baseRegistration.baseSerial}
          resizeMode="contain"
        />
      </View>
      <SupportLink linkName="connectToBase" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: Size.XL,
  },
  dividerLine: {
    flex: 1,
    height: 2,
    backgroundColor: Colors.GREY_4,
  },
  dividerText: {
    marginHorizontal: Size.S,
  },
  image: {
    width: SCREEN_WIDTH - Size.L * 2,
  },
  imageContainer: {
    alignItems: 'center',
  },
});
