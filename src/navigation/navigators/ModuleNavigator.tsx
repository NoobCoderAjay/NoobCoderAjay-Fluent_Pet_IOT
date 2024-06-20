import {
  StackScreenProps,
  createStackNavigator,
} from "@react-navigation/stack";
import React from "react";

import { Screen, ScreenTitle } from "@navigation/constants";
import ModuleScreen from "src/Home/Module/ModuleScreen";
import { screenOptions } from "@navigation/options";
import CourseScreen from "src/Home/Course/CourseScreen";
import { TabParamList, TabScreenProps } from "./TabNavigator";
import {
  CompositeScreenProps,
  getFirstScreenOptions,
} from "@navigation/helpers";

export type ModuleStackParamList = {
  [Screen.MODULE_SCREEN]: undefined;
};
export type ModuleStackScreenProps<
  RouteName extends keyof ModuleStackParamList
> = CompositeScreenProps<
  StackScreenProps<ModuleStackParamList, RouteName>,
  TabScreenProps<keyof TabParamList>
>;
const Stack = createStackNavigator<ModuleStackParamList>();

const ModuleNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name={Screen.MODULE_SCREEN}
        component={ModuleScreen}
        options={getFirstScreenOptions(ScreenTitle.FLUENTPET_EDU)}
      />
    </Stack.Navigator>
  );
};

export default ModuleNavigator;
