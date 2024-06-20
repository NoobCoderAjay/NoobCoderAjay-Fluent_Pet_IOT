import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

//@ts-ignore
import BaseButtonFour from "../../assets/images/baseImages/BaseButtonFour.png";

import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { Screen } from "@navigation/constants";
import SafeAreaButtonBlock from "src/components/common/SafeAreaButtonBlock";

type Props = {};

const ConnectStepTwo = (props: Props) => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const handleBackBtnPress = () => {
    navigation.navigate(Screen.CONNECTION_SETUP_STEP_ONE);
  };
  const handleBtnPress = () => {
    navigation.navigate(Screen.CONNECTION_TO_BASE);
  };
  return (
    <>
      {/* <Header /> */}
      <ScrollView className="p-5 bg-white">
        <View className="mb-5">
          <Text className="text-[#333333] text-2xl font-bold">
            Step 2: Connect your Base
          </Text>
          <Text className="text-[#666666] text-base mt-1.5">
            To setup your Base, please configure the following permissions.
          </Text>
        </View>
        <View className="flex justify-center items-center mb-5">
          <Image source={BaseButtonFour} />
        </View>
        <View>
          <Text className="font-bold mt-4 text-[#333333]">
            Hold down the Base Button for over 5 seconds, then let go
          </Text>
          <View className="ml-2">
            {[
              "1. The Base Button is on the bottom of your Base.",
              "2. After Holding for 5 seconds, the LED (on the front of your Base) will flash quickly.",
              "3. Let go and your Base LED should ‘breathe’ cyan and blue.",
              "4. The Base will play a 4-step ringing sound.",
            ].map((item, index) => (
              <Text key={index} className="mt-4 text-[#666666]">
                {item}
              </Text>
            ))}
          </View>
        </View>
      </ScrollView>
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

export default ConnectStepTwo;

const styles = StyleSheet.create({
  bottomButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});
