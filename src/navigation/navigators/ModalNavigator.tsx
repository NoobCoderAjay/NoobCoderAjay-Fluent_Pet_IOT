import { Navigator, Screen, ScreenTitle } from "@navigation/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigatorScreenParams } from "@react-navigation/native";
import {
  createStackNavigator,
  StackScreenProps,
} from "@react-navigation/stack";

import React from "react";
import { Alert } from "react-native";
import TabNavigator, { TabParamList } from "./TabNavigator";
import OnboardingNavigator, { BetaStackParamList } from "./OnboardingNavigator";
import { CompositeScreenProps } from "@navigation/helpers";
import { HomeDrawerParamList, HomeDrawerScreenProps } from "./HomeNavigator";
import { HouseholdStackParamList } from "./HouseholdNavigator";
import HouseholdAdd from "src/Home/HouseholdAdd";
import { screenOptions } from "@navigation/options";

import BaseRegisterNavigator from "./BaseRegisterNavigator";
import CourseScreen from "src/Home/Course/CourseScreen";

export type ModalStackParamList = {
  [Navigator.TAB_NAV]: NavigatorScreenParams<TabParamList>;
  [Navigator.ONBOARDING_NAV]: NavigatorScreenParams<BetaStackParamList>;
  [Screen.HOUSEHOLD_ADD]: NavigatorScreenParams<HouseholdStackParamList>;
  [Navigator.BASE_NAVIGATOR]: undefined;
};

export type ModalStackScreenProps<RouteName extends keyof ModalStackParamList> =
  CompositeScreenProps<
    StackScreenProps<ModalStackParamList, RouteName>,
    HomeDrawerScreenProps<keyof HomeDrawerParamList>
  >;

const Stack = createStackNavigator<ModalStackParamList>();
export const ModalNavigator = () => (
  <Stack.Navigator screenOptions={screenOptions}>
    <Stack.Screen
      name={Navigator.TAB_NAV}
      component={TabNavigator}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={Navigator.ONBOARDING_NAV}
      component={OnboardingNavigator}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={Screen.HOUSEHOLD_ADD}
      component={HouseholdAdd}
      options={{ title: ScreenTitle.HOUSEHOLD_ADD }}
    />

    <Stack.Screen
      //@ts-ignore
      name={Screen.COURSE_SCREEN}
      component={CourseScreen}
      options={{ headerShown: false }}
    />

    {/* testing */}

    <Stack.Screen
      name={Navigator.BASE_NAVIGATOR}
      component={BaseRegisterNavigator}
      options={{ title: ScreenTitle.BASE_REGISTRATION }}
    />
  </Stack.Navigator>
);
