import React from "react";
import { Text, View } from "react-native";
import AvatarTypeSpecific from "src/components/Avatar/AvatarTypeSpecific";

import { FontArizona } from "src/components/common/Typography";

type Props = {};

const UserInfoBox: React.FC<Props> = (_props) => {
  return (
    <View className="flex-row">
      <AvatarTypeSpecific name={"H"} pushers={[]} size={80} />
      <View className="flex-column ml-4 mt-4">
        <Text
          className={`text-[20px] font-bold font-[${FontArizona.BOLD}] leading-[24.66px] text-left text-[#333333]`}
        >
          Welcome Teacher!
        </Text>
        <Text
          className={`text-[12px] font-bold font-[${FontArizona.BOLD}] leading-[14.8px] text-left text-[#666666] mt-1.5`}
        >
          Joined since July 15, 2023
        </Text>
      </View>
    </View>
  );
};

export default UserInfoBox;
