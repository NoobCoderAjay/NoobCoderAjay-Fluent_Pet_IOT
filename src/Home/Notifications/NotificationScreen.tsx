import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SearchBar } from "src/components/common/Form";
import { Divider } from "src/components/common";
import { Colors } from "src/theme/Colors";
//@ts-ignore
import Complete from "../../assets/images/newImages/Complete.png";
import NotificatonComplete from "src/assets/icons/NotificationComplete";
import NotificatonUnread from "src/assets/icons/NotificationUnread";
import NotificationItem from "./component/NotificationItem";

type Props = {};

const NotificationScreen = (props: Props) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(
    null
  );

  const handleItemPress = (index: number) => {
    setSelectedItemIndex(index === selectedItemIndex ? null : index);
  };
  return (
    <View className="p-5 bg-[#FFFFFF]">
      <SearchBar
        currentSearch={""}
        placeholderText={"Search"}
        onChangeText={() => {}}
        onClearButtonPress={() => {}}
      />

      <Divider
        width="100%"
        height={1.5}
        color={Colors.SECONDARY_LIGHTER}
        style={{ marginTop: 18 }}
      />

      <NotificationItem
        title="Button has been pressed"
        message="Lorem ipsum sit dolor amet."
        time="08:14 PM"
        isSelected={selectedItemIndex === 0}
        onPress={() => handleItemPress(0)}
      />

      <NotificationItem
        title="Another notification"
        message="Some other message."
        time="09:30 PM"
        isSelected={selectedItemIndex === 1}
        onPress={() => handleItemPress(1)}
      />
    </View>
  );
};

export default NotificationScreen;
