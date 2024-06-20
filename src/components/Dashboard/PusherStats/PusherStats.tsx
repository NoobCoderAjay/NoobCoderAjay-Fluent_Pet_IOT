import React from "react";
import { View, Text } from "react-native";
import { Divider } from "src/components/common";
import { Colors } from "src/theme/Colors";

const PusherStats = () => {
  return (
    <View>
      <View className="flex-row justify-between">
        <View className="border border-[#E4E7EC] rounded-[25px] p-2 items-start w-[48%]">
          <Text className="font-bold text-[42px] text-[#101828] ml-3">23</Text>
          <Text className="text-[#666666] text-[12px] mt-2 ml-2">
            Average Daily Presses
          </Text>
        </View>
        <View className="w-[48%] border border-[#E4E7EC] rounded-[25px] p-2 items-start">
          <Text className="font-bold text-[42px] text-[#101828] ml-2">08</Text>
          <Text className="text-[#666666] mt-2 text-[12px] mb-3">
            Unique Buttons Pressed
          </Text>
        </View>
      </View>
      <Divider
        width="100%"
        height={1}
        color={Colors.GREY_LIGHTER}
        style={{ marginTop: 18 }}
      />
    </View>
  );
};

export default PusherStats;
