import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";

import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { Screen } from "@navigation/constants";
import CustomButton from "src/components/common/CustomButton";

type Props = {};

const SetupConnection = (props: Props) => {
  const [isSelected, setSelection] = useState(false);
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const handleBtnPress = () => {
    navigation.navigate(Screen.CONNECTION_SETUP_STEP_ONE);
  };

  return (
    <>
      <ScrollView className="p-5 bg-white">
        <View className="mb-5">
          <Text className="text-[#333333] text-2xl font-bold font-[${FontArizona.BOLD}]">
            Let’s configure your settings
          </Text>
          <Text className="text-[#666666] text-base mt-1.5 font-[${FontArizona.REGULAR}]">
            To setup your Base, please configure the following permissions.
          </Text>
        </View>
        <View className="mt-3">
          <Text className="text-base font-bold text-gray-800 font-[${FontArizona.REGULAR}]">
            Data consent
          </Text>
          <View className="flex-row mt-5">
            <View className="mt-1.5">
              <Checkbox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
              />
            </View>
            <View className="ml-2.5">
              <Text className="text-base font-bold font-[${FontArizona.BOLD}] text-[#666666]">
                Allow the app to access your phone’s camera.
              </Text>
              <Text className="text-base font-bold font-[${FontArizona.REGULAR}] text-[#999999]">
                (Optional)
              </Text>
              <Text className="text-base font-[${FontArizona.REGULAR}] text-[#999999] mt-2">
                This lets the app allow access to your camera in order to take a
                photo of the QR code on the bottom of your Base, and connect to
                your Base automatically.
              </Text>
            </View>
          </View>
          <View className="flex-row mt-5">
            <View className="mt-1.5">
              <Checkbox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
              />
            </View>
            <View className="ml-2.5">
              <Text className="text-base font-bold font-[${FontArizona.BOLD}] text-[#666666]">
                Allow the app to receive push notifications.
              </Text>
              <Text className="text-base font-bold font-[${FontArizona.REGULAR}] text-[#999999]">
                (Optional)
              </Text>
              <Text className="text-base font-[${FontArizona.REGULAR}] text-[#999999] mt-2">
                Allow the app to receive push notifications.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View className="absolute bottom-5 px-5 w-full bg-white">
        <CustomButton
          text="Next"
          className="bg-[#006271] ml-2.5"
          textStyle={styles.bottomButtonText}
          onPress={handleBtnPress}
        />
      </View>
    </>
  );
};

export default SetupConnection;

const styles = StyleSheet.create({
  checkbox: {
    alignSelf: "flex-start",
  },
  bottomButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});
