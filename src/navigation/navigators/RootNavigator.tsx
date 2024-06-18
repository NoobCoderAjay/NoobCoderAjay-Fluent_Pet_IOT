import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  NavigationContainer,
  NavigatorScreenParams,
} from "@react-navigation/native";

import { Navigator } from "../constants";
import OnboardingNavigator, { BetaStackParamList } from "./OnboardingNavigator";
import { HomeNavigator } from "./HomeNavigator";

export type RootStackParamList = {
  [Navigator.ONBOARDING_NAV]: NavigatorScreenParams<BetaStackParamList>;
};

const Stack = createStackNavigator();
interface Props {
  authToken: string | null;
}

const RootNavigator: React.FC<Props> = ({ authToken }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name={Navigator.ONBOARDING_NAV}
          component={OnboardingNavigator}
        />
        {/* <Stack.Screen name={Navigator.HOME_NAV} component={HomeNavigator} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
