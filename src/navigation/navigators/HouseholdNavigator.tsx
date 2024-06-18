import {
  createStackNavigator,
  StackHeaderProps,
  StackNavigationOptions,
  TransitionPresets,
} from "@react-navigation/stack";
import Household from "../../Home/HouseHold/Household";

import { Screen, ScreenTitle } from "../constants";
import { screenOptions } from "@navigation/options";

const Stack = createStackNavigator();

const HouseholdNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name={Screen.HOUSEHOLD}
        component={Household}
        options={{ title: ScreenTitle.HOUSEHOLD }}
      />
    </Stack.Navigator>
  );
};

export default HouseholdNavigator;
