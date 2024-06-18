import {
  createStackNavigator,
  StackHeaderProps,
  StackNavigationOptions,
  TransitionPresets,
} from "@react-navigation/stack";

import { Screen, ScreenTitle } from "../constants";
import HardwareScreen from "src/Home/Hardware/HardwareScreen";
import { screenOptions } from "@navigation/options";

const Stack = createStackNavigator();

const HardWareNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name={Screen.HARDWARE_SCREEN}
        component={HardwareScreen}
        options={{ title: ScreenTitle.HARDWARE_SCREEN }}
      />
    </Stack.Navigator>
  );
};

export default HardWareNavigator;
