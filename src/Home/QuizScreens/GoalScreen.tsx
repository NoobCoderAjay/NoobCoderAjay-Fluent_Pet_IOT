import { Feather } from "@expo/vector-icons";
import { Screen } from "@navigation/constants";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import moment from "moment";
import React, { useState } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { ClockSmallIcon } from "src/assets/icons";
import TimeSelectModal from "src/components/QuizComponents/Modals/TimeSelectModal";
import { Select } from "src/components/common/Form";
import SafeAreaButtonBlock from "src/components/common/SafeAreaButtonBlock";
import { FontArizona } from "src/components/common/Typography";
import use24hourClock from "src/hooks/use24hourClock";
import { Colors } from "src/theme/Colors";

type PickerMode = "date" | "time" | "datetime" | undefined;
const INPUT_FIELD_HEIGHT = 50;

const GoalScreen: React.FC = () => {
  const is24hourClock = use24hourClock();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [dateTimePickerVisible, setDateTimePickerVisible] = useState(false);
  const [pickerMode] = useState<PickerMode>("time");
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const onTimeSelected = (selectedDate: Date) => {
    const formatString = is24hourClock ? "H:mm" : "h:mm A";
    const time = moment(selectedDate).format(formatString);
    setDateTimePickerVisible(false);
  };
  const handleBtnPress = () => {
    navigation.navigate(Screen.TEST_SCREEN);
  };
  const handleBackBtnPress = () => {
    navigation.navigate(Screen.INFORMATION_SCREEN);
  };
  return (
    <>
      <ScrollView
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{ paddingBottom: 130 }}
        showsVerticalScrollIndicator={false}
        className="p-5 bg-white"
      >
        <View>
          <Text
            className={`text-[#333333] text-2xl font-bold font-[${FontArizona.BOLD}]`}
          >
            Goals/Commitment
          </Text>

          <Text className="text-[#666666] text-base mt-1.5 font-arizona-regular">
            Tell us a little about you
          </Text>
        </View>
        <View className="mt-5">
          <View>
            <Text className="text-sm mb-5 font-bold font-arizona-bold text-[#333333]">
              What time each day would you like to dedicate to practice button
              teaching?
            </Text>

            <DateTimePickerModal
              isVisible={dateTimePickerVisible}
              date={undefined}
              mode={pickerMode}
              is24Hour={Boolean(is24hourClock)}
              locale={is24hourClock ? "en_GB" : undefined}
              onConfirm={onTimeSelected}
              onCancel={() => setDateTimePickerVisible(false)}
              modalPropsIOS={{
                supportedOrientations: ["portrait", "landscape"],
              }}
            />
            <Select
              icon={ClockSmallIcon}
              height={INPUT_FIELD_HEIGHT}
              placeholder="Time"
              onPress={() => {
                setDateTimePickerVisible(true);
              }}
              backgroundColor={Colors.LIGHT_WHITE}
              value={""}
            />
          </View>
        </View>
        <View className="mt-5 flex-row items-center">
          <View className="items-center">
            <Feather name="info" size={20} color="#B3B3B3" />
          </View>
          <View className="ml-2.5">
            <Text className="text-[#B3B3B3] font-arizona-bold items-center mt-0.75">
              Privacy you can change this at any time in settings
            </Text>
          </View>
        </View>
      </ScrollView>

      <SafeAreaButtonBlock
        leftButtonText="Cancel"
        leftButtonOnPress={handleBackBtnPress}
        rightButtonText="Next"
        rightButtonOnPress={handleBtnPress}
        // errors={errors}
        safeAreaEnabled={true}
        rightButtonTextStyle={styles.bottomButtonText}
      />
      <TimeSelectModal visible={isModalVisible} onClose={toggleModal} />
    </>
  );
};

export default GoalScreen;

const styles = StyleSheet.create({
  bottomButtonContainer: {
    position: "absolute",
    bottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },

  saveButton: {
    backgroundColor: Colors.PRIMARY_DARK,
    marginLeft: 10,
  },
  bottomButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.WHITE,
  },

  infoContainer: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  infoIcon: {
    alignContent: "center",
  },
  infoText: {
    marginLeft: 10,
  },
  infoTextContent: {
    color: "#B3B3B3",
    fontFamily: FontArizona.BOLD,
    alignContent: "center",
    marginTop: 3,
  },
});
