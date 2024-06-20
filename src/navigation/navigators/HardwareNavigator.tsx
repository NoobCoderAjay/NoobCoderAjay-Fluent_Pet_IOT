import {
  createStackNavigator,
  StackScreenProps,
} from "@react-navigation/stack";

import { Screen, ScreenTitle } from "../constants";
import HardwareScreen from "src/Home/Hardware/HardwareScreen";
import { screenOptions } from "@navigation/options";
import {
  CompositeScreenProps,
  getFirstScreenOptions,
} from "@navigation/helpers";
import { TabParamList, TabScreenProps } from "./TabNavigator";

export type HardwareStackParamList = {
  [Screen.HARDWARE_SCREEN]: undefined;
};

export type HardwareScreenProps<
  RouteName extends keyof HardwareStackParamList
> = CompositeScreenProps<
  StackScreenProps<HardwareStackParamList, RouteName>,
  TabScreenProps<keyof TabParamList>
>;

const Stack = createStackNavigator<HardwareStackParamList>();

const HardWareNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name={Screen.HARDWARE_SCREEN}
        component={HardwareScreen}
        options={getFirstScreenOptions(ScreenTitle.HARDWARE_SCREEN)}
      />
    </Stack.Navigator>
  );
};

export default HardWareNavigator;
