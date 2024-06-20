import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

import { SimpleLineIcons } from "@expo/vector-icons";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";

//@ts-ignore
import Wifi from "../../assets/images/baseRegistration/WiFi_List.png";
import { Screen } from "@navigation/constants";
import { Body, Title1 } from "src/components/common/Text";
import { Colors } from "src/theme/Colors";
import { Size, SizeV2 } from "src/theme/Size";
import { TextInput } from "src/components/common/Form";
import SafeAreaButtonBlock from "src/components/common/SafeAreaButtonBlock";
type Props = {};

const ConnectStepThree = (props: Props) => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const handleBtnPress = () => {
    navigation.navigate(Screen.CONNECTION_SETUP_STEP_FOUR);
  };
  const handleBackBtnPress = () => {
    navigation.navigate(Screen.CONNECTION_TO_BASE);
  };
  return (
    <>
      <View className="flex-1 p-5 bg-white">
        <Title1 v2 color={Colors.BLACK} marginBottom={SizeV2.S}>
          Select your Wi-Fi Network
        </Title1>
        <Body v2 marginBottom={Size.L}>
          Scan the QR code on the bottom of the Base to automatically connect to
          it.
        </Body>

        <TextInput
          autoCapitalize="characters"
          placeholder="Search Wi-Fi Networks"
          backgroundColor={Colors.LIGHT_WHITE}
          value={undefined}
        />
        <View className="mt-10 ">
          <Image source={Wifi} />
        </View>
        <View className="flex-row mt-10 justify-center">
          <SimpleLineIcons name="question" size={20} color={Colors.BLUE_NEW} />
          <Text className="ml-2 font-bold text-[#006271]">
            Tap here for troubleshooting support.
          </Text>
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

export default ConnectStepThree;

const styles = StyleSheet.create({
  bottomButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});
