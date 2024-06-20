import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import NotificatonComplete from "src/assets/icons/NotificationComplete";
import NotificatonUnread from "src/assets/icons/NotificationUnread";

type NotificationItemProps = {
  title: string;
  message: string;
  time: string;
  isSelected: boolean;
  onPress: () => void;
};

const NotificationItem = ({
  title,
  message,
  time,
  isSelected,
  onPress,
}: NotificationItemProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View className="flex-row mt-5">
        <View
          className={`rounded-lg p-2 mb-4 ${
            isSelected ? "bg-[#E2F3FB7A]" : "bg-white"
          }`}
        >
          <View className="flex-row justify-between w-full">
            <View className="flex-row ml-1 flex-1">
              <NotificatonComplete />
              <View className="ml-2 flex-1">
                <Text className="font-bold text-sm mt-2 mb-2 text-[#2E3A59]">
                  {title}
                </Text>
                <Text className="font-semibold text-xs text-[#9A96B2]">
                  {message}
                </Text>
              </View>
            </View>
            <View className="flex-row items-center">
              <Text className="font-semibold text-xs text-[#9A96B2] mr-2">
                {time}
              </Text>
              <NotificatonUnread />
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NotificationItem;
