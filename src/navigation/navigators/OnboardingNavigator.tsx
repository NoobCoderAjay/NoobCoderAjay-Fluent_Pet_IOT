import {
  StackScreenProps,
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import React from "react";

import { Navigator, Screen, ScreenTitle } from "../constants";
import { CompositeScreenProps } from "@react-navigation/native";
import ProfileScreen from "src/Home/QuizScreens/ProfileScreen";
import InformationScreen from "src/Home/QuizScreens/InformationScreen";
import GoalScreen from "src/Home/QuizScreens/GoalScreen";
import TestScreen from "src/Home/QuizScreens/TestScreen";
import SetupFinish from "src/Home/QuizScreens/SetupFinish";
import { screenOptions } from "@navigation/options";
import TabNavigator, { TabParamList, TabScreenProps } from "./TabNavigator";
import { HomeNavigator } from "./HomeNavigator";
import { getFirstScreenOptions } from "@navigation/helpers";
import IconLeft from "@navigation/components/IconLeft";
import SkipButton from "@navigation/components/SkipButton";

export type BetaStackParamList = {
  [Screen.PROFILE_SCREEN]: { id: number };
  [Screen.INFORMATION_SCREEN]: undefined;
  [Screen.LEARNING_SCREEN]: undefined;
  [Screen.GOAL_SCREEN]: undefined;
  [Screen.TEST_SCREEN]: undefined;
  [Screen.SETUP_SCREEN]: undefined;
};
export type BaseStackScreenProps<RouteName extends keyof BetaStackParamList> =
  CompositeScreenProps<
    StackScreenProps<BetaStackParamList, RouteName>,
    TabScreenProps<keyof TabParamList>
  >;
const Stack = createStackNavigator<BetaStackParamList>();

const OnboardingNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name={Screen.PROFILE_SCREEN}
        component={ProfileScreen}
        options={({ navigation }) => ({
          title: "",
          headerLeft: () => undefined,
          headerRight: () => (
            <SkipButton
              onPress={() => {
                navigation.navigate(Screen.INFORMATION_SCREEN);
              }}
            />
          ),
        })}
      />
      <Stack.Screen
        name={Screen.INFORMATION_SCREEN}
        component={InformationScreen}
        options={({ navigation }) => ({
          title: "",
          headerLeft: () => (
            <IconLeft
              onPress={() => {
                navigation.navigate(Screen.PROFILE_SCREEN);
              }}
            />
          ),
          headerRight: () => (
            <SkipButton
              onPress={() => {
                navigation.navigate(Screen.GOAL_SCREEN);
              }}
            />
          ),
        })}
      />

      <Stack.Screen
        name={Screen.GOAL_SCREEN}
        component={GoalScreen}
        options={({ navigation }) => ({
          title: "",
          headerLeft: () => (
            <IconLeft
              onPress={() => {
                navigation.navigate(Screen.INFORMATION_SCREEN);
              }}
            />
          ),
          headerRight: () => (
            <SkipButton
              onPress={() => {
                navigation.navigate(Screen.TEST_SCREEN);
              }}
            />
          ),
        })}
      />
      <Stack.Screen
        name={Screen.TEST_SCREEN}
        component={TestScreen}
        options={({ navigation }) => ({
          title: "",
          headerLeft: () => (
            <IconLeft
              onPress={() => {
                navigation.navigate(Screen.GOAL_SCREEN);
              }}
            />
          ),
          headerRight: () => (
            <SkipButton
              onPress={() => {
                navigation.navigate(Screen.SETUP_SCREEN);
              }}
            />
          ),
        })}
      />
      <Stack.Screen
        name={Screen.SETUP_SCREEN}
        component={SetupFinish}
        options={({ navigation }) => ({
          title: "",
          headerLeft: () => (
            <IconLeft
              onPress={() => {
                navigation.navigate(Screen.TEST_SCREEN);
              }}
            />
          ),
          headerRight: () => (
            <SkipButton
              onPress={() => {
                navigation.navigate(Navigator.LANDING_NAV);
              }}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default OnboardingNavigator;
