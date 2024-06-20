import {
  createStackNavigator,
  StackScreenProps,
} from "@react-navigation/stack";
import React from "react";

import { Screen, ScreenTitle } from "../constants";
import { CompositeScreenProps } from "../helpers/CompositeScreenProps";
import { screenOptions } from "../options";
import HomeScreen from "src/Home/Landing/HomeScreen";
import ModuleScreen from "src/Home/Module/ModuleScreen";
import { getFirstScreenOptions } from "@navigation/helpers";
import { TabParamList, TabScreenProps } from "./TabNavigator";

export type LandingStackParamList = {
  [Screen.LANDING]: undefined;
  [Screen.MODULE_SCREEN]: undefined;
};

export type LandingStackScreenProps<
  RouteName extends keyof LandingStackParamList
> = CompositeScreenProps<
  StackScreenProps<LandingStackParamList, RouteName>,
  TabScreenProps<keyof TabParamList>
>;

const Stack = createStackNavigator<LandingStackParamList>();

export const LandingNavigator = () => (
  <Stack.Navigator screenOptions={screenOptions}>
    <Stack.Screen
      name={Screen.LANDING}
      component={HomeScreen}
      options={getFirstScreenOptions({
        title: ScreenTitle.FLUENTPET,
      })}
    />

    <Stack.Screen
      name={Screen.MODULE_SCREEN}
      component={ModuleScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
