import React from "react";
import { Image, Text, View } from "react-native";
//@ts-ignore
import Nexts from "../../../assets/images/newImages/Nexts.png";

import { NextBadge, StrekIcon, TargetIcon } from "src/assets/icons";

type Props = {};

const AchievementBox = (_props: Props) => {
  return (
    <View className="bg-white border border-[#D9D9D9] mt-4 rounded-2xl overflow-hidden">
      <View className="p-5 pb-0">
        <Text className="text-lg font-bold font-arizona text-[#006271]">
          Achievements
        </Text>
      </View>
      <View className="flex-row justify-around items-center py-2.5">
        <View className="items-center">
          <StrekIcon />
          <Text className="mt-2.5 text-base font-bold font-arizona text-[#9A96B2]">
            5-Day Streak
          </Text>
        </View>

        <View className="items-center">
          <TargetIcon />
          <Text className="mt-2.5 text-base font-bold font-arizona text-[#9A96B2]">
            Target Master
          </Text>
        </View>
        <View className="items-center">
          <Image source={Nexts} />

          <Text className="mt-2.5 text-base font-bold font-arizona text-[#9A96B2]">
            Next Badge
          </Text>
        </View>
      </View>
    </View>
  );
};

export default AchievementBox;
