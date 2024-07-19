import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Navigator } from "../../../navigation/constants";
import { FontArizona } from "src/components/common/Typography";
import { images } from "src/assets/images";

type Props = {};

const WelComeBox = (_props: Props) => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const handleBtnPress = () => {
    navigation.navigate(Navigator.MODULE_NAV);
  };

  return (
    <View className="bg-[#F9E1C0] relative mt-4 w-full h-56 rounded-2xl overflow-hidden flex-row items-end">
      <View className="flex-1 justify-between pb-5 ml-5">
        <View className="mb-2 ml-1">
          <Text
            className="text-lg font-bold text-[#006271]"
            style={{ fontFamily: FontArizona.BOLD }}
          >
            Welcome Teacher !
          </Text>
          <Text
            className="text-xs font-bold text-[#0062718A] mt-1.5"
            style={{ fontFamily: FontArizona.REGULAR }}
          >
            Let’s start training
          </Text>
        </View>
        <TouchableOpacity
          className="bg-[#006271] py-2.5 rounded-xl w-2/5 mt-5 mb-5 "
          onPress={handleBtnPress}
        >
          <Text className="text-white text-[14px] font-bold text-center">
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
      <Image
        source={images.welcomeBpx.Dog}
        className="absolute bottom-0 right-0"
      />
    </View>
  );
};

export default WelComeBox;
