import React from "react";
import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import {
  Activity,
  Bases,
  HomeImage,
  HouseHold,
  Module,
} from "../../assets/icons";
import { Colors } from "../../theme/Colors";
import ModuleNavigator, { ModuleStackParamList } from "./ModuleNavigator";
import { Navigator, ScreenTitle } from "@navigation/constants";
import { LandingNavigator, LandingStackScreenProps } from "./LandingNavigator";
import HouseholdNavigator, {
  HouseholdStackParamList,
} from "./HouseholdNavigator";
import HardWareNavigator, { HardwareStackParamList } from "./HardwareNavigator";
import ActivityScreen from "src/Home/Dashboard/ActivityFeed";
import DashboardNavigator, {
  DashboardStackParamList,
} from "./DashboardNavigator";
import { NavigatorScreenParams } from "@react-navigation/native";
import { CompositeScreenProps } from "@navigation/helpers";
import { ModalStackParamList, ModalStackScreenProps } from "./ModalNavigator";
import { BetaStackParamList } from "./OnboardingNavigator";

export type TabParamList = {
  [Navigator.HOUSEHOLD]: NavigatorScreenParams<HouseholdStackParamList>;
  [Navigator.ACTIVITY]: NavigatorScreenParams<DashboardStackParamList>;
  [Navigator.HARDWARE]: NavigatorScreenParams<HardwareStackParamList>;
  //@ts-ignore
  [Navigator.LANDING_NAV]: NavigatorScreenParams<LandingStackScreenProps>;
  [Navigator.MODULE_NAV]: NavigatorScreenParams<ModuleStackParamList>;
};

export type TabScreenProps<RouteName extends keyof TabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<TabParamList, RouteName>,
    ModalStackScreenProps<keyof ModalStackParamList>
  >;
const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "#006271",
        tabBarStyle: {
          backgroundColor: "#006271",
          height: 70,
          padding: 10,
          position: "absolute",
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15,
        },
      }}
      initialRouteName={Navigator.LANDING_NAV}
    >
      <Tab.Screen
        //@ts-ignore
        name={Navigator.ACTIVITY}
        //@ts-ignore
        component={DashboardNavigator}
        options={{
          tabBarLabel: () => null,
          headerShown: false,
          tabBarIcon: ({ focused }) => <Activity color={Colors.WHITE} />,
        }}
      />
      <Tab.Screen
        //@ts-ignore
        name={Navigator.LANDING_NAV}
        component={LandingNavigator}
        options={{
          tabBarLabel: () => null,
          headerShown: false,
          tabBarIcon: ({ focused }) => <HomeImage color={Colors.WHITE} />,
        }}
      />

      <Tab.Screen
        //@ts-ignore
        name={Navigator.MODULE_NAV}
        component={ModuleNavigator}
        options={{
          tabBarLabel: () => null,
          headerShown: false,
          tabBarIcon: ({ focused }) => <Module color={Colors.WHITE} />,
        }}
      />
      <Tab.Screen
        //@ts-ignore
        name={Navigator.HARDWARE}
        component={HardWareNavigator}
        options={{
          tabBarLabel: () => null,
          headerShown: false,
          tabBarIcon: ({ focused }) => <Bases color={Colors.WHITE} />,
        }}
      />
      <Tab.Screen
        //@ts-ignore
        name={Navigator.HOUSEHOLD}
        component={HouseholdNavigator}
        options={{
          tabBarLabel: () => null,
          headerShown: false,
          tabBarIcon: ({ focused }) => <HouseHold color={Colors.WHITE} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
