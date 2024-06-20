import {
  createStackNavigator,
  StackHeaderProps,
  StackNavigationOptions,
  StackScreenProps,
  TransitionPresets,
} from "@react-navigation/stack";
import Household from "../../Home/HouseHold/Household";

import { Screen, ScreenTitle } from "../constants";
import { screenOptions } from "@navigation/options";
import {
  CompositeScreenProps,
  getFirstScreenOptions,
} from "@navigation/helpers";
import { TabParamList, TabScreenProps } from "./TabNavigator";

export type HouseholdStackParamList = {
  [Screen.HOUSEHOLD]: undefined;
};

export type HouseholdStackScreenProps<
  RouteName extends keyof HouseholdStackParamList
> = CompositeScreenProps<
  StackScreenProps<HouseholdStackParamList, RouteName>,
  TabScreenProps<keyof TabParamList>
>;
const Stack = createStackNavigator<HouseholdStackParamList>();

const HouseholdNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name={Screen.HOUSEHOLD}
        component={Household}
        options={getFirstScreenOptions({
          title: ScreenTitle.HOUSEHOLD,
          showDrawerButton: true,
        })}
      />
    </Stack.Navigator>
  );
};

export default HouseholdNavigator;
