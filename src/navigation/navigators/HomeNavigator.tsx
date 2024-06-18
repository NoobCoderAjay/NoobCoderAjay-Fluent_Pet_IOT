import { Navigator, Screen, ScreenTitle } from "@navigation/constants";
import { screenOptionsDrawerNavigation } from "@navigation/options";
import {
  createDrawerNavigator,
  DrawerContent,
  DrawerScreenProps,
} from "@react-navigation/drawer";
import { NavigatorScreenParams } from "@react-navigation/native";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import useOnboarding from "src/hooks/useOnboarding";
import { Colors } from "src/theme/Colors";
import { ModalNavigator } from "./ModalNavigator";
import ModuleScreen from "src/Home/Module/ModuleScreen";
import BackButton from "@navigation/components/BackButton";
import { DRAWER_WIDTH } from "@navigation/components/Drawer";

// export type HomeDrawerParamList = {
//   [Navigator.MODAL]: NavigatorScreenParams<ModalStackParamList>;
//   [Screen.SETTINGS]: undefined;
// };

// export type HomeDrawerScreenProps<RouteName extends keyof HomeDrawerParamList> =
//   CompositeScreenProps<
//     DrawerScreenProps<HomeDrawerParamList, RouteName>,
//     RootStackScreenProps<keyof RootStackParamList>
//   >;

const Drawer = createDrawerNavigator();

export const HomeNavigator: React.FC = () => {
  // Trigger the onboarding flow (opens system selection modal)
  useOnboarding();

  // const updateUserMutation = useUpdateUser();

  // // Patch user details on app launch / log in
  // useEffect(() => {
  //   updateUserMutation.mutate();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

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
      <Drawer.Screen
        name={Screen.SETTINGS}
        component={ModuleScreen}
        options={{
          headerShown: true,
          title: ScreenTitle.SETTINGS,
          headerLeft: () => <BackButton />,
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawer: {
    width: DRAWER_WIDTH,
  },
});
