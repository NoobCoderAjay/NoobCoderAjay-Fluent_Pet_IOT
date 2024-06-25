import { DrawerNavigationOptions } from "@react-navigation/drawer";
import {
  StackNavigationOptions,
  TransitionPresets,
} from "@react-navigation/stack";
import React from "react";
import { Colors } from "src/theme/Colors";
import { Font, TextSize } from "src/theme/Text";
import { Image, StyleSheet } from "react-native";
import { FontArizona } from "src/components/common/Typography";
import IconLeft from "./components/IconLeft";
import { images } from "src/assets/images";
const styles = StyleSheet.create({
  headerBackground: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

export const screenOptions: StackNavigationOptions = {
  headerMode: "screen",
  headerStyle: {
    backgroundColor: Colors.SECONDARY_LIGHT,
  },
  cardStyle: { backgroundColor: Colors.WHITE },
  headerTintColor: Colors.PRIMARY_DARK,
  headerTitleStyle: {
    fontSize: TextSize.body.fontSize,
    fontFamily: FontArizona.BOLD,
    letterSpacing: 2,
  },

  headerBackTitleVisible: false,
  headerBackImage: () => <IconLeft />,
  headerBackground: () => (
    <Image
      source={images.navigationHeader.headerImg}
      style={styles.headerBackground}
    />
  ),
  // Android
  headerTitleAlign: "center",
  ...TransitionPresets.SlideFromRightIOS,
};

export const screenOptionsDrawerNavigation: DrawerNavigationOptions = {
  headerStyle: {
    backgroundColor: Colors.SECONDARY_LIGHT,
  },
  headerTintColor: Colors.PRIMARY_DARK,
  headerTitleStyle: {
    fontSize: TextSize.body.fontSize,
    fontFamily: Font.BLACK,
    letterSpacing: 3,
  },
  headerShown: false,
  // Android
  headerTitleAlign: "center",
  drawerType: "front",
};
