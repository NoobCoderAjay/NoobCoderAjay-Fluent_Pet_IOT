import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AvatarTypeSpecific from "src/components/Avatar/AvatarTypeSpecific";
import { FontArizona } from "src/components/common/Typography";
import { Ionicons } from "@expo/vector-icons"; // Make sure to install this package

type UserCardProps = {
  name: string;
  userType: string;
  isPressed: boolean;
  onPress: () => void;
  isAddUser?: boolean;
};

const UserCard: React.FC<UserCardProps> = ({
  name,
  userType,
  isPressed,
  onPress,
  isAddUser = false,
}) => {
  if (isAddUser) {
    return (
      <TouchableOpacity
        onPress={onPress}
        className="border-dashed border-2 border-[#0071802A] rounded-[25px] p-4 items-center justify-center w-[32%] mr-1.5 bg-transparent h-[150px]"
      >
        <AvatarTypeSpecific name={"AJ"} pushers={[]} size={60} />
        <Text
          className="mt-3 text-[15px] text-[#007180]"
          style={{ fontFamily: FontArizona.BOLD }}
        >
          Add User
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`border border-[#E4E7EC] rounded-[25px] p-4 items-center w-[32%] mr-1.5 ${
        isPressed ? "bg-[#006271]" : "bg-transparent"
      }`}
    >
      <AvatarTypeSpecific name={"AJ"} pushers={[]} size={60} />
      <Text
        className={`mt-3 text-[15px] ${
          isPressed ? "text-[#FFFFFF]" : "text-[#000000]"
        }`}
        style={{ fontFamily: FontArizona.BOLD }}
      >
        {name}
      </Text>
      <Text
        className={`mt-2 text-[13px] ${
          isPressed ? "text-[#99C6CC]" : "text-[#9A96B2]"
        }`}
        style={{ fontFamily: FontArizona.REGULAR }}
      >
        {userType}
      </Text>
    </TouchableOpacity>
  );
};

export default UserCard;
