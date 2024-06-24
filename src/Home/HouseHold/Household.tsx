import { Text, View } from "react-native";
import React from "react";
import AvatarTypeSpecific from "../../components/Avatar/AvatarTypeSpecific";

import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { Screen } from "../../navigation/constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontArizona } from "src/components/common/Typography";
import CustomButton from "src/components/common/CustomButton";
import { AnimatedPressable } from "src/components/common";
import PolygonImageContainer from "src/components/common/PolygonImageContainer";

type Props = {};
const Member = ({ name, role }: { name: string; role: string }) => (
  <View className="flex-row px-3 mt-5">
    <AnimatedPressable>
      <PolygonImageContainer
        imageLoaded={true}
        // intialStyle={styles.polygonIntailContainer}
        isIntialPage
        size={60}
      />
    </AnimatedPressable>
    <View className="flex-col ml-3 mt-1">
      <Text
        className={`text-[20px] font-bold text-[#333333] font-[${FontArizona.BOLD}]`}
      >
        {name}
      </Text>
      <Text
        className={`text-[12px]  text-[#333333] font-[${FontArizona.BOLD} mt-1]`}
      >
        {role}
      </Text>
    </View>
  </View>
);
const Household: React.FC<Props> = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const handleNavigation = () => {
    navigation.navigate(Screen.HOUSEHOLD_ADD);
  };
  return (
    <View className="p-5 bg-white h-full">
      <View className="flex-row px-3">
        <AnimatedPressable>
          <PolygonImageContainer
            imageLoaded={true}
            // intialStyle={styles.polygonIntailContainer}
            isIntialPage
            size={70}
          />
        </AnimatedPressable>
        <View className="flex-col gap-2 ml-2">
          <Text
            className={`font-bold text-[#006271] font-[${FontArizona.BOLD}] text-2xl`}
          >
            Rameet D’Souza
          </Text>
          <Text className={`font-bold font-[${FontArizona.BOLD}] text-1xl`}>
            Teacher
          </Text>
        </View>
      </View>
      <View className="px-3 py-5">
        <Text className={`font-bold font-[${FontArizona.BOLD}] text-[16px]`}>
          Add a member
        </Text>
        <Text
          className={`text-[14px] mt-3 text-[#8C8C8C] font-[${FontArizona.REGULAR}]`}
        >
          This request submits a request to delete all of your account data
          within 5 business days.
        </Text>
      </View>
      <View className="h-12 px-1.5">
        <CustomButton
          text="Add a Member"
          textStyle={{ color: "#006271" }}
          onPress={handleNavigation}
        />
      </View>
      <Member name="Floyd Miles" role="Teacher" />
      <Member name="Cookie" role="Teacher" />
    </View>
  );
};

export default Household;
