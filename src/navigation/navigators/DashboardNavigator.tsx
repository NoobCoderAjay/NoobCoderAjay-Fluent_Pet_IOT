import {
  createStackNavigator,
  StackHeaderProps,
  StackNavigationOptions,
  StackScreenProps,
  TransitionPresets,
} from "@react-navigation/stack";

import { Screen, ScreenTitle } from "../constants";
import HardwareScreen from "src/Home/Hardware/HardwareScreen";
import { screenOptions } from "@navigation/options";
import ActivityScreen from "src/Home/Dashboard/ActivityFeed";
import {
  CompositeScreenProps,
  getFirstScreenOptions,
} from "@navigation/helpers";
import { TabParamList, TabScreenProps } from "./TabNavigator";

export type DashboardStackParamList = {
  [Screen.ACTIVITY]: undefined;
};

export type DashboardScreenProps<
  RouteName extends keyof DashboardStackParamList
> = CompositeScreenProps<
  StackScreenProps<DashboardStackParamList, RouteName>,
  TabScreenProps<keyof TabParamList>
>;

const Stack = createStackNavigator<DashboardStackParamList>();

const DashboardNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name={Screen.ACTIVITY}
        //@ts-ignore
        component={ActivityScreen}
        options={getFirstScreenOptions(ScreenTitle.ACTIVITY_SCREEN)}
      />
    </Stack.Navigator>
  );
};

export default DashboardNavigator;
