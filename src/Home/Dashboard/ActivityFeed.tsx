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
import { AnimatedPressable, Divider } from "src/components/common";
import CustomSwitch from "src/components/common/SwitchButton";
import SnoozeBottomSheetModal from "src/components/Dashboard/BottomSheetModel";
import FormSelect from "../HouseholdAdd/FormSelect";
import { SizeV2 } from "src/theme/Size";
import DashboardItem from "src/components/Dashboard/DashboardItem/DashboardItem";
import { Button, Context, Meaning } from "src/model/interaction";
import PusherStats from "src/components/Dashboard/PusherStats/PusherStats";
import { AddIcon } from "src/assets/icons";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { Navigator, Screen } from "@navigation/constants";
import CustomButton from "src/components/common/CustomButton";
import DashboardActionSheet from "src/components/Dashboard/DashboardActionSheet";
import PolygonImageContainer from "src/components/common/PolygonImageContainer";

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
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const [showModal, setShowModal] = React.useState(false);
  const [switchValue, setSwitchValue] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Feed");
  const { showActionSheetWithOptions } = useActionSheet();
  const [actionSheetVisible, setActionSheetVisible] = useState(false);

  const handleToggleSwitch = (value: boolean) => {
    setSwitchValue(value);
    setShowModal(value);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSwitchValue(false);
  };

  const handleToggle = (activeButton: string) => {
    setSelectedOption(activeButton);
  };

  const openActionSheet = () => {
    setActionSheetVisible(true);
  };

  const handleActionSheetSelect = (index: number) => {
    setActionSheetVisible(false);
    if (index === 0) {
      navigation.navigate(Navigator.MODAL, { screen: Screen.LOG });
    } else if (index === 1) {
      navigation.navigate(Navigator.MODAL, {
        screen: Screen.JOURNAL_ENTRY_SCREEN,
        params: {
          buttonPresses: [],
        },
      });
    }
  };

  const handleActionSheetCancel = () => {
    setActionSheetVisible(false);
  };
  // const openActionSheet = () => {
  //   enum OptionName {
  //     LOG = "Log Button Press",
  //     JOURNAL = "Add Journal Entry",
  //     CANCEL = "Cancel",
  //   }
  //   const options = {
  //     [OptionName.LOG]: 0,
  //     [OptionName.JOURNAL]: 1,
  //     [OptionName.CANCEL]: 2,
  //   };
  //   const actionSheetOptions = {
  //     options: Object.keys(options),
  //     cancelButtonIndex: options[OptionName.CANCEL],
  //     // Add these properties for styling
  //     containerStyle: { backgroundColor: "#f2f2f2" },
  //     textStyle: { color: "#006271", fontFamily: FontArizona.BOLD },
  //     titleTextStyle: { fontFamily: FontArizona.BOLD, fontSize: 18 },
  //     messageTextStyle: { fontFamily: FontArizona.REGULAR, fontSize: 14 },
  //     destructiveButtonIndex: undefined,
  //     tintColor: "#006271",
  //   };
  //   showActionSheetWithOptions(actionSheetOptions, async (index) => {
  //     if (index === options[OptionName.LOG]) {
  //       navigation.navigate(Navigator.MODAL, { screen: Screen.LOG });
  //     }
  //     if (index === options[OptionName.JOURNAL]) {
  //       navigation.navigate(Navigator.LOG_DETAILS, {
  //         screen: Screen.LOG_DETAILS,
  //         params: {
  //           buttonPresses: [],
  //         },
  //       });
  //     }
  //   });
  // };

  return (
    <>
      <View className="bg-[#FFFFFF] flex-1">
        <View className="bg-white m-0 p-5 w-auto h-full rounded-t-[22px]">
          <View className="border border-[#E4E7EC] rounded-[25px] p-2 flex-row items-center">
            <View className="flex-row">
              <View className="mt-3">
                <AnimatedPressable>
                  <PolygonImageContainer
                    imageLoaded={true}
                    // intialStyle={styles.polygonIntailContainer}
                    isIntialPage
                    size={70}
                  />
                </AnimatedPressable>
              </View>
              <View className="flex-column ml-4 mt-4">
                <Text
                  className={`text-[20px] font-bold leading-[24.66px] text-left text-[#333333]`}
                  style={{ fontFamily: FontArizona.BOLD }}
                >
                  Cookie
                </Text>

                <View className="flex-row items-center gap-4 mt-2 ml-0.5 mb-2">
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
            <CustomSwitch onChange={handleToggleSwitch} value={switchValue} />
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
        <TouchableOpacity style={styles.fixedButton} onPress={openActionSheet}>
          <AddIcon color={Colors.WHITE} width={SizeV2.M} />
        </TouchableOpacity>
        <DashboardActionSheet
          visible={actionSheetVisible}
          options={[
            {
              text: "Log Button Press",
              backgroundColor: "#006271",
              textColor: "#FFFFFF",
            },
            { text: "Add Journal Entry", textColor: "#006271" },
          ]}
          onSelect={handleActionSheetSelect}
          onCancel={handleActionSheetCancel}
        />
      </View>
    </>
  );
};

export default ActivityFeed;
const FIXED_BUTTON_SIZE = 60;

const styles = StyleSheet.create({
  fixedButton: {
    height: FIXED_BUTTON_SIZE,
    width: FIXED_BUTTON_SIZE,
    backgroundColor: Colors.PRIMARY,
    position: "absolute",
    right: 0,
    bottom: 60,
    margin: SizeV2.L,
    borderRadius: FIXED_BUTTON_SIZE,
    justifyContent: "center",
    alignItems: "center",
    // shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
