import { Feather } from "@expo/vector-icons";
import { Navigator, Screen } from "@navigation/constants";

import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import React, { useState } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import CustomSuccessModal from "src/components/QuizComponents/Modals/SuccessModal";

import SafeAreaButtonBlock from "src/components/common/SafeAreaButtonBlock";
import { FontArizona } from "src/components/common/Typography";
import { Colors } from "src/theme/Colors";

import Checkbox from "expo-checkbox";

type Props = {};

const SetupFinish = (_props: Props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSelected, setSelection] = useState(false);
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  const handleBackBtnPress = () => {
    navigation.navigate(Screen.TEST_SCREEN);
  };
  const handleNavigationClick = () => {
    navigation.navigate(Navigator.TAB_NAV);
  };

  return (
    <>
      <ScrollView className="p-5 bg-white" showsVerticalScrollIndicator={false}>
        <View>
          <Text className="text-gray-800 font-bold text-2xl">Finish Setup</Text>
          <Text className="text-gray-800 text-base mt-1.5">
            Tell us a little about you.
          </Text>
        </View>
        <View className="mt-8">
          <Text className="text-base font-bold text-gray-800 font-arizonaRegular">
            Data consent
          </Text>
          <View className="flex-row mt-5">
            <Checkbox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            <Text className="ml-2.5 font-arizonaRegular">
              “I consent to having my pet button pressing data shared with
              qualified university researchers for the purpose of scientific
              research, and agree to allow myself to be contacted by researchers
              investigating related scientific questions.”
            </Text>
          </View>
        </View>
        <View className="flex-row mt-5">
          <Feather name="info" size={24} color="#F03738" />
          <View className="ml-2.5">
            <Text className="text-[#F03738] font-arizonaBold mt-0.75">
              Privacy you can change this at any time in settings
            </Text>
          </View>
        </View>
      </ScrollView>

      <SafeAreaButtonBlock
        leftButtonText="Cancel"
        leftButtonOnPress={handleBackBtnPress}
        rightButtonText="Next"
        rightButtonOnPress={toggleModal}
        // errors={errors}
        safeAreaEnabled={true}
        rightButtonTextStyle={styles.bottomButtonText}
      />
      <CustomSuccessModal
        visible={isModalVisible}
        onClose={() => {
          toggleModal();
          handleNavigationClick();
        }}
      />
    </>
  );
};

export default SetupFinish;

const styles = StyleSheet.create({
  bottomButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.WHITE,
  },
  checkbox: {
    alignSelf: "flex-start",
  },
});
