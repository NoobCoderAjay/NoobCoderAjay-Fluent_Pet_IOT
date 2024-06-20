import { Image, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import {
  DrawerActions,
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
//@ts-ignore
import unassigned from "../../assets/images/newImages/unassigned.png";

import AvatarTypeSpecific from "../../components/Avatar/AvatarTypeSpecific";

import { Colors } from "../../theme/Colors";
import { FontArizona } from "src/components/common/Typography";
import { Divider } from "src/components/common";
import CustomSwitch from "src/components/common/SwitchButton";
import SnoozeBottomSheetModal from "src/components/Dashboard/BottomSheetModel";
import FormSelect from "../HouseholdAdd/FormSelect";
import { SizeV2 } from "src/theme/Size";
import DashboardItem from "src/components/Dashboard/DashboardItem/DashboardItem";
import { Button, Context, Meaning } from "src/model/interaction";
import PusherStats from "src/components/Dashboard/PusherStats/PusherStats";

type Props = {
  navigation: any;
  number: number;
  onPress: () => void;
};

type StatisticItemProps = {
  value: string | number;
  label: string;
};

const StatisticItem = ({ value, label }: StatisticItemProps) => {
  return (
    <View className="flex items-center ">
      <Text className="font-bold text-[24px] text-[#101828] ml-2">{value}</Text>
      <Text className="text-[#808080] ml-2">{label}</Text>
    </View>
  );
};
const ActivityFeed = (props: Props) => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [showModal, setShowModal] = React.useState(false);
  const [selectedOption, setSelectedOption] = useState("Feed");

  const handleToggleSwitch = () => {
    toggleSwitch();
    if (!isEnabled) {
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setIsEnabled(false);
    setShowModal(false);
  };

  const handleToggle = (activeButton: string) => {
    setSelectedOption(activeButton);
  };

  return (
    <View className="bg-[#E2F3FB] flex-1">
      <View className="bg-white m-0 p-5 w-auto h-full rounded-t-[22px]">
        <View className="border border-[#E4E7EC] rounded-[25px] p-2 flex-row items-center">
          <View className="flex-row">
            <AvatarTypeSpecific name={"H"} pushers={[]} size={80} />
            <View className="flex-column ml-4 mt-4">
              <Text
                className={`text-[20px] font-bold leading-[24.66px] text-left text-[#333333]`}
                style={{ fontFamily: FontArizona.BOLD }}
              >
                Cookie
              </Text>

              <View className="flex-row items-center gap-4 mt-2 ml-0.5">
                <StatisticItem value="23" label="Days" />
                <View className="w-[2px] h-8 bg-[#E4E7EC]" />
                <StatisticItem value="08" label="Buttons" />
                <View className="w-[2px] h-8 bg-[#E4E7EC]" />
                <StatisticItem value="27" label="Presses" />
              </View>
            </View>
          </View>
        </View>
        <Divider
          width="100%"
          height={1}
          color={Colors.GREY_LIGHTER}
          style={{ marginTop: 20 }}
        />
        <View className="mt-5">
          <FormSelect
            buttonLabels={["Feed", "Stats"]}
            onToggle={handleToggle}
          />
        </View>
        <Divider
          width="100%"
          height={1}
          color={Colors.GREY_LIGHTER}
          style={{ marginTop: 20 }}
        />
        <View className="flex-row justify-between mt-6">
          <Text className="text-[16px] font-bold text-[#006271]">
            Snooze notifications
          </Text>
          <CustomSwitch onChange={handleToggleSwitch} />
          <SnoozeBottomSheetModal
            visible={showModal}
            onClose={handleCloseModal}
          />
        </View>

        <View className="flex-row mt-2">
          <Image source={unassigned} />
          <Text className="text-black ml-2 font-bold">
            You have 15 unassigned Presses
          </Text>
        </View>
        <Divider
          width="100%"
          height={1}
          color={Colors.GREY_LIGHTER}
          style={{ marginTop: 18 }}
        />
        {selectedOption === "Feed" ? (
          <View className="mt-5">
            <DashboardItem
              index={0}
              pusherName={""}
              pushers={[]}
              isLastItem={false}
              isSelected={false}
              isMultiSelectModeActive={false}
              onPress={() => {}}
              onLongPress={() => {}}
              onPusherLongPress={() => {}}
              onPusherPress={() => {}}
              onEllipsisPress={() => {}}
              onButtonPress={() => {}}
              onContextPress={() => {}}
              onMeaningPress={() => {}}
              setIsUpdateInteractions={() => {}}
              interaction={undefined}
              setSelectedActivityIndex={() => {}}
            />
          </View>
        ) : (
          <View className="mt-5">
            <PusherStats />
          </View>
        )}
      </View>
    </View>
  );
};

export default ActivityFeed;

// const styles = StyleSheet.create({
//   Button: {
//     flexDirection: "row",
//     alignItems: "center",
//     width: "auto",
//     height: 38,
//     borderRadius: 20,
//     backgroundColor: "#E5F4F5",
//     paddingHorizontal: SizeV2.S,
//     paddingVertical: SizeV2.XS,
//   },
// });
