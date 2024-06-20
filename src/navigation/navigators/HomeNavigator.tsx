import { Navigator, Screen, ScreenTitle } from "@navigation/constants";
import { screenOptionsDrawerNavigation } from "@navigation/options";
import {
  createDrawerNavigator,
  DrawerScreenProps,
} from "@react-navigation/drawer";
import { NavigatorScreenParams } from "@react-navigation/native";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import useOnboarding from "src/hooks/useOnboarding";
import { Colors } from "src/theme/Colors";
import { ModalNavigator, ModalStackParamList } from "./ModalNavigator";
import ModuleScreen from "src/Home/Module/ModuleScreen";
import BackButton from "@navigation/components/BackButton";
import { RootStackParamList, RootStackScreenProps } from "./RootNavigator";
import { CompositeScreenProps } from "@navigation/helpers";
import DrawerContent, { DRAWER_WIDTH } from "../components/Drawer";
export type HomeDrawerParamList = {
  [Navigator.MODAL]: NavigatorScreenParams<ModalStackParamList>;
  [Screen.MODULE_SCREEN]: undefined;
};

export type HomeDrawerScreenProps<RouteName extends keyof HomeDrawerParamList> =
  CompositeScreenProps<
    DrawerScreenProps<HomeDrawerParamList, RouteName>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

const Drawer = createDrawerNavigator<HomeDrawerParamList>();

export const HomeNavigator: React.FC = () => {
  // Trigger the onboarding flow (opens system selection modal)
  useOnboarding();

  return (
    <Drawer.Navigator
      screenOptions={screenOptionsDrawerNavigation}
      //@ts-ignore
      drawerContent={() => <DrawerContent />}
    >
      <Drawer.Screen
        options={{
          headerShown: false,
          overlayColor: Colors.PRIMARY_TRANSPARENT,
          drawerStyle: styles.drawer,
        }}
        name={Navigator.MODAL}
        component={ModalNavigator}
      />
      {/* <Drawer.Screen
        name={Screen.MODULE_SCREEN}
        component={ModuleScreen}
        options={{
          headerShown: true,
          title: ScreenTitle.SETTINGS,
          headerLeft: () => <BackButton />,
        }}
      /> */}
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawer: {
    width: DRAWER_WIDTH,
  },
});
