import { Navigator, Screen } from "@navigation/constants";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import React, { useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import ProfileForm from "src/components/QuizComponents/Forms/ProfileForm";
import { AnimatedPressable } from "src/components/common";
import PolygonImageContainer from "src/components/common/PolygonImageContainer";
import SafeAreaButtonBlock from "src/components/common/SafeAreaButtonBlock";
import CustomSwitch from "src/components/common/SwitchButton";
import { PolygonShapePoints } from "src/components/common/helpers/constants";

const ProfileScreen: React.FC = () => {
  const [errors, setErrors] = useState({});
  const [switchValue, setSwitchValue] = useState<boolean>(false);
  const navigationFunction = useNavigation<NavigationProp<ParamListBase>>();

  const handleSwitchChange = (value: boolean) => {
    setSwitchValue(value);
    navigationFunction.navigate(Navigator.HARDWARE, {
      screen: Screen.BASE_SETUP_PERMISSIONS,
    });
    setSwitchValue(false);
  };

  const navigateToNextScreen = () => {
    navigationFunction.navigate(Screen.INFORMATION_SCREEN);
  };

  const handleCancel = () => {
    Alert.alert(
      "Are you sure?",
      "Do you want to cancel onboarding and go to homepage?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Yes",
          onPress: () => navigationFunction.navigate(Navigator.TAB_NAV),
          style: "destructive",
        },
      ]
    );
  };

  return (
    <>
      <ScrollView
        className="p-5 bg-[#FFFFFF]"
        contentContainerStyle={{ paddingBottom: 130 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="mb-5">
          <Text className="text-[#333333] text-2xl font-bold font-arizona-bold">
            Add a profile picture
          </Text>
          <Text className="text-[#666666] text-base mt-1.5 font-arizona-regular">
            Tell us a little about you.
          </Text>
        </View>
        <View className="justify-center items-center mt-5">
          <AnimatedPressable>
            <PolygonImageContainer
              points={PolygonShapePoints.HEXAGON}
              imageLoaded={true}
              intialStyle={styles.polygonIntailContainer}
              isIntialPage
            />
          </AnimatedPressable>
        </View>
        <View className="mt-5">
          <ProfileForm />
          <View className="flex-row justify-between mt-2.5">
            <Text className="text-[#006271] text-sm font-arizona-bold">
              Do you have FluentPet connect smart buttons{"\n"}you need to
              setup?
            </Text>
            <CustomSwitch onChange={handleSwitchChange} value={switchValue} />
          </View>
        </View>
      </ScrollView>
      <SafeAreaButtonBlock
        leftButtonText="Cancel"
        leftButtonOnPress={handleCancel}
        rightButtonText="Next"
        rightButtonOnPress={navigateToNextScreen}
        errors={errors}
        safeAreaEnabled={true}
        rightButtonTextStyle={styles.bottomButtonText}
      />
    </>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  bottomButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  polygonIntailContainer: { top: -30, right: -25 },
});
