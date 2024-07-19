import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import React, { useState } from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import SafeAreaButtonBlock from "src/components/common/SafeAreaButtonBlock";
import { Screen } from "@navigation/constants";
import { Size } from "src/theme/Size";

type Props = {};

const TestScreen = (_props: Props) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
  };
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const handleBtnPress = () => {
    navigation.navigate(Screen.SETUP_SCREEN);
  };
  const handleBackBtnPress = () => {
    navigation.navigate(Screen.GOAL_SCREEN);
  };
  const renderOption = (option: string) => {
    return (
      <TouchableOpacity
        key={option}
        style={[
          styles.optionButton,
          selectedOption === option ? styles.selectedOption : null,
        ]}
        onPress={() => handleSelectOption(option)}
      >
        <View style={styles.radio}>
          {selectedOption === option && <View style={styles.radioBg} />}
        </View>
        <Text>{option}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <ScrollView
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{ paddingBottom: Size.L }}
        showsVerticalScrollIndicator={false}
        className="p-5 bg-white"
      >
        <View>
          <Text className="text-gray-800 font-bold text-2xl">
            Placement Test
          </Text>
          <Text className="text-gray-800 text-base mt-1.5">
            Tell us a little about you.
          </Text>
        </View>
        <View className="mt-5">
          <View>
            <Text className="text-gray-800 text-base mt-1.5 font-semibold">
              Tell us a bit about your experience !
            </Text>
          </View>
          <View className="mt-2.5">
            {[
              "First time teacher",
              "I've tried button teaching before but haven't been successful",
              "I've been using buttons for a while and have a successful learner",
            ].map(renderOption)}
          </View>
          <View className="mt-2.5">
            {[
              "First time teacher",
              "I've tried button teaching before but haven't been successful",
              "I've been using buttons for a while and have a successful learner",
            ].map(renderOption)}
          </View>
          <View className="mt-2.5">
            {[
              "First time teacher",
              "I've tried button teaching before but haven't been successful",
              "I've been using buttons for a while and have a successful learner",
            ].map(renderOption)}
          </View>
          <View className="mt-2.5">
            {[
              "First time teacher",
              "I've tried button teaching before but haven't been successful",
              "I've been using buttons for a while and have a successful learner",
            ].map(renderOption)}
          </View>
          <View className="mt-2.5">
            {[
              "First time teacher",
              "I've tried button teaching before but haven't been successful",
              "I've been using buttons for a while and have a successful learner",
            ].map(renderOption)}
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
    </>
  );
};

export default TestScreen;
const styles = StyleSheet.create({
  bottomButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  optionButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 25,
    marginBottom: 10,
    gap: 10,
  },
  selectedOption: {
    backgroundColor: "#E1F4FB",
  },
  radio: {
    width: 20,
    height: 20,
    borderColor: "black",
    borderRadius: 20,
    borderWidth: 3,
  },
  radioBg: {
    backgroundColor: "black",
    height: 8,
    width: 8,
    borderRadius: 20,
    margin: 3,
  },
});
