import React from "react";
import {
  StackScreenProps,
  createStackNavigator,
} from "@react-navigation/stack";
import {
  NavigationContainer,
  NavigatorScreenParams,
} from "@react-navigation/native";

import { Navigator } from "../constants";
import OnboardingNavigator, { BetaStackParamList } from "./OnboardingNavigator";
import { HomeDrawerParamList, HomeNavigator } from "./HomeNavigator";

export type RootStackParamList = {
  // [Navigator.AUTHENTICATION]: NavigatorScreenParams<AuthenticationStackParamList>;
  [Navigator.HOME_NAV]: NavigatorScreenParams<HomeDrawerParamList>;
};

export type RootStackScreenProps<RouteName extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, RouteName>;

interface Props {
  authToken: string | null;
}
const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator: React.FC<Props> = ({ authToken }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name={Navigator.HOME_NAV}
          component={HomeNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
