import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { SimpleLineIcons } from "@expo/vector-icons";

import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { Screen } from "@navigation/constants";
import { Title1 } from "src/components/common/Text";
import { Colors } from "src/theme/Colors";
import { SizeV2 } from "src/theme/Size";
import SafeAreaButtonBlock from "src/components/common/SafeAreaButtonBlock";

type Props = {};

const ConnectSetupFour = (props: Props) => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const handleBtnPress = () => {
    navigation.navigate(Screen.CONNECTION_SETUP_STEP_FIVE);
  };
  const handleBackBtnPress = () => {
    navigation.navigate(Screen.CONNECTION_TO_BASE);
  };
  return (
    <>
      <View className="flex-1 p-5 bg-white">
        <Title1 v2 color={Colors.BLACK} marginBottom={SizeV2.S}>
          Registering your base
        </Title1>

        <View className="ml-2">
          {[
            "1. Ensure your base is unplugged.",
            "2. Ensure your Wi-Fi network is a 2.4GHz network.",
            "3. Have your Wi-Fi name and password ready.",
            "4. Ensure you're close to your Wi-Fi source and are getting good reception.",
          ].map((item, index) => (
            <Text key={index} className="mt-4 text-[#666666] text-[15px]">
              {item}
            </Text>
          ))}
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

export default ConnectSetupFour;

const styles = StyleSheet.create({
  bottomButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});
