import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { Screen } from "@navigation/constants";
import { Colors } from "src/theme/Colors";
import SafeAreaButtonBlock from "src/components/common/SafeAreaButtonBlock";

import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { images } from "src/assets/images";
type Props = {};

const ConnectStepOne = (props: Props) => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const handleBtnPress = () => {
    navigation.navigate(Screen.CONNECTION_SETUP_STEP_TWO);
  };
  const handleBackBtnPress = () => {
    navigation.navigate(Screen.CONNECTION_SETUP);
  };
  return (
    <>
      {/* <Header /> */}
      <ScrollView className="p-5 bg-white">
        <View className="mb-5">
          <Text className="text-[#333333] text-2xl font-bold">
            Step 1: Prep
          </Text>
          <Text className="text-[#666666] text-base mt-1.5">
            To setup your Base, please configure the following permissions.
          </Text>
        </View>
        <View className="flex justify-center items-center mb-5">
          <Image source={images.baseButtons.baseButtonThree} />
        </View>
        <View>
          <Text className="font-bold mt-4 text-[#333333]">
            Get your Base and Wi-Fi network info ready
          </Text>
          <View className="ml-2">
            {[
              "1. Ensure your base is unplugged.",
              "2. Ensure your Wi-Fi network is a 2.4GHz network.",
              "3. Have your Wi-Fi name and password ready.",
              "4. Ensure you're close to your Wi-Fi source and are getting good reception.",
            ].map((item, index) => (
              <Text key={index} className="mt-4 text-[#666666]">
                {item}
              </Text>
            ))}
          </View>
        </View>
        <View className="flex-row mt-6">
          <Ionicons name="videocam-outline" size={24} color={Colors.BLUE_NEW} />
          <Text className="ml-4 font-bold text-[#006271]">
            Tap here for an end-to-end onboarding video.
          </Text>
        </View>
        <View className="flex-row mt-4">
          <SimpleLineIcons name="question" size={20} color={Colors.BLUE_NEW} />
          <Text className="ml-4 font-bold text-[#006271]">
            Tap here for troubleshooting support.
          </Text>
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

export default ConnectStepOne;

const styles = StyleSheet.create({
  bottomButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});
