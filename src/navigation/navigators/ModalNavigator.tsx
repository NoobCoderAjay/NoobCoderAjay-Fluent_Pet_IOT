import { Navigator } from "@navigation/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigatorScreenParams } from "@react-navigation/native";
import {
  createStackNavigator,
  StackScreenProps,
} from "@react-navigation/stack";

import React from "react";
import { Alert } from "react-native";
import TabNavigator from "./TabNavigator";
import OnboardingNavigator from "./OnboardingNavigator";

// export type ModalStackParamList = {
//   [Navigator.TAB_NAV]: NavigatorScreenParams<TabParamList>;

// };

const Stack = createStackNavigator();

// export type ModalStackScreenProps<RouteName extends keyof ModalStackParamList> =
//   CompositeScreenProps<
//     StackScreenProps<ModalStackParamList, RouteName>,
//     HomeDrawerScreenProps<keyof HomeDrawerParamList>
//   >;

export const ModalNavigator = () => (
  <Stack.Navigator screenOptions={{}}>
    <Stack.Screen
      name={Navigator.TAB_NAV}
      component={TabNavigator}
      options={{ headerShown: false }}
    />
    {/* <Stack.Screen
      name={Navigator.ONBOARDING_NAV}
      component={OnboardingNavigator}
      options={{ headerShown: false }}
    /> */}
  </Stack.Navigator>
);
