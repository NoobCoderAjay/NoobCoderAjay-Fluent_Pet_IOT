import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import React from "react";
//@ts-ignore
import BaseImage from "../../assets/images/baseImages/BaseImage.png";
//@ts-ignore
import BaseImageTwo from "../../assets/images/baseImages/BaseImageTwo.png";

import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { Screen } from "@navigation/constants";
import CustomButton from "src/components/common/CustomButton";

type Props = {};

const HardwareScreen = (props: Props) => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const handleBtnPress = () => {
    navigation.navigate(Screen.CONNECTION_SETUP);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View className="flex-row justify-between border p-4 border-[#CCCCCC] rounded-lg">
          <View className="flex-col">
            <Text className="mr-4 font-arizona text-base font-bold">
              Buttons
            </Text>
            <Text className="mr-4">Total Buttons: 0</Text>
            <View className="mt-4 h-10 ">
              <CustomButton text="Add a Button" className="px-5 rounded-lg" />
            </View>
          </View>
          <Image source={BaseImage} className="mt-4" />
        </View>

        <View className="justify-center items-center">
          <View className="flex-col justify-center items-center mt-10">
            <Image source={BaseImageTwo} />
            <View className="mt-10">
              <Text className="font-arizona text-lg font-bold">
                You don’t have any Bases yet!
              </Text>
              <Text className="font-arizona-sans text-base font-normal ml-10">
                Add a base to continue
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomButtonContainer}>
        <CustomButton
          text="Connect a Base"
          className="bg-[#006271] ml-2.5"
          textStyle={[styles.bottomButtonText]}
          onPress={handleBtnPress}
        />
      </View>
    </View>
  );
};

export default HardwareScreen;
const screenHeight = Dimensions.get("window").height;
const paddingBottom = screenHeight * 0.09;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollView: {
    padding: 20,
  },
  bottomButtonContainer: {
    position: "absolute",
    bottom: paddingBottom,
    left: 10,
    right: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  bottomButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});
