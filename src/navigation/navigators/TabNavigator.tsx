import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Activity,
  Bases,
  HomeImage,
  HouseHold,
  Module,
} from "../../assets/icons";
import { Colors } from "../../theme/Colors";
import ModuleNavigator from "./ModuleNavigator";
import { Navigator } from "@navigation/constants";
import { LandingNavigator } from "./LandingNavigator";
import HouseholdNavigator from "./HouseholdNavigator";
import HardWareNavigator from "./HardwareNavigator";

const Tab = createBottomTabNavigator();
type Props = {};

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
      {/* <Tab.Screen
        name={Navigator.ACTIVITY.replace("Nav", "")}
        //@ts-ignore
        component={ActivityScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => <Activity color={Colors.WHITE} />,
        }}
      /> */}
      <Tab.Screen
        name={Navigator.LANDING_NAV.replace("Nav", "")}
        component={LandingNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => <HomeImage color={Colors.WHITE} />,
        }}
      />

      <Tab.Screen
        name={Navigator.MODULE_NAV.replace("Nav", "")}
        component={ModuleNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => <Module color={Colors.WHITE} />,
        }}
      />
      <Tab.Screen
        name={Navigator.HARDWARE.replace("Nav", "")}
        component={HardWareNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => <Bases color={Colors.WHITE} />,
        }}
      />
      <Tab.Screen
        name={Navigator.HOUSEHOLD.replace("Nav", "")}
        component={HouseholdNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => <HouseHold color={Colors.WHITE} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
