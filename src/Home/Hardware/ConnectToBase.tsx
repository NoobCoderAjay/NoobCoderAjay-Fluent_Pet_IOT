import _ from "lodash";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { BASE_SERIAL_NUMBER_LENGTH } from "./constants";

import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";

import { SimpleLineIcons } from "@expo/vector-icons";
import { Body, Caption2, Title1 } from "src/components/common/Text";
import { Screen } from "@navigation/constants";
import { Colors } from "src/theme/Colors";
import { SCREEN_WIDTH, Size, SizeV2 } from "src/theme/Size";
import CustomButton from "src/components/common/CustomButton";
import { TextInput } from "src/components/common/Form";
import { ErrorMessage } from "src/components/common";
import { images } from "src/assets/images";
import SafeAreaButtonBlock from "src/components/common/SafeAreaButtonBlock";
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
  const serialNumberValid = baseSerialNumber;
  const showSerialNumberError =
    baseSerialNumber?.length >= BASE_SERIAL_NUMBER_LENGTH && !serialNumberValid;
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const Divider = () => (
    <View style={styles.dividerContainer}>
      <View style={styles.dividerLine} />
      <Caption2 v2 style={styles.dividerText}>
        OR
      </Caption2>
      <View style={styles.dividerLine} />
    </View>
  );
  const handleBtnPress = () => {
    navigation.navigate(Screen.CONNECTION_SETUP_STEP_THREE);
  };
  const handleBackBtnPress = () => {
    navigation.navigate(Screen.CONNECTION_SETUP_STEP_TWO);
  };

  return (
    <>
      <View className="flex-1 p-5 bg-white">
        <Title1 v2 color={Colors.BLACK} marginBottom={SizeV2.S}>
          Connect to your Base
        </Title1>
        <Body v2 marginBottom={SizeV2.L}>
          Scan the QR code on the bottom of the Base to automatically connect to
          it.
        </Body>
        <View className="h-14">
          <CustomButton text="SCAN QR CODE ON BASE" />
        </View>
        <Divider />
        <Body v2 marginBottom={SizeV2.S}>
          Enter the serial number of your Base, and tap “CONNECT”. The serial
          number is 12 letters/digits, written on the bottom of your base, below
          the QR code.
        </Body>
        <TextInput
          autoCapitalize="characters"
          placeholder="Serial number"
          value={baseSerialNumber}
          onChangeText={(value) => onChangeBaseSerialNumber(_.trim(value))}
          backgroundColor={Colors.LIGHT_WHITE}
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
      </View>
      <SafeAreaButtonBlock
        leftButtonText="Cancel"
        leftButtonOnPress={handleBackBtnPress}
        rightButtonText="Next"
        rightButtonOnPress={handleBtnPress}
        // errors={errors}
        safeAreaEnabled={true}
        rightButtonTextStyle={styles.bottomButtonText}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
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
    alignItems: "center",
  },
  bottomButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});
