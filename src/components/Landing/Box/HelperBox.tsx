// import Intercom from "@intercom/intercom-react-native";
import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";

//@ts-ignore
import File from "../../../assets/images/newImages/File.png";
//@ts-ignore
import message from "../../../assets/images/newImages/message.png";

type Props = {};

const HelperBox: React.FC<Props> = (_props) => {
  return (
    <View className="border border-[#D9D9D9] bg-white rounded-2xl p-5 mt-4">
      <TouchableOpacity
        disabled
        className="flex-row items-center justify-center py-2.5 bg-[#006271] rounded-lg opacity-50"
      >
        <Image source={File} className="w-6 h-6 mr-2.5" />
        <Text className="text-white text-base font-bold font-arizona">
          Take the Daily Assessment
        </Text>
      </TouchableOpacity>
      <View className="h-2.5" />
      <TouchableOpacity
        className="flex-row items-center justify-center py-2.5 bg-white border border-[#0062718A] rounded-lg mt-2.5"
        // onPress={() => Intercom.present()}
      >
        <Image source={message} className="w-6 h-6 mr-2.5" />
        <Text className="text-[#434343] text-base font-bold font-arizona">
          Need Help?
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HelperBox;
