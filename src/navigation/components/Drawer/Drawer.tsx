import { AntDesign } from "@expo/vector-icons";

import {
  DrawerActions,
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import * as WebBrowser from "expo-web-browser";

import React, { useContext } from "react";
import { Dimensions, StyleSheet, View, ScrollView, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Navigator, Screen } from "../../constants";

import DrawerButton from "./DrawerButton";
import TopButtons, { TopButton } from "./TopButtons";
import { BookIcon, LogoutIcon, SettingsIcon } from "../../../assets/icons";
import { SCREEN_WIDTH, Size, ViewportSize } from "../../../theme/Size";

import { Colors } from "../../../theme/Colors";
import Avatar from "src/components/Avatar/Avatar";
import { AvatarSize } from "src/components/Avatar/constants/AvatarSize";
import { Divider } from "src/components/common";
import CloseButton from "../CloseButton";
import AvatarTypeSpecific from "src/components/Avatar/AvatarTypeSpecific";
import { FontArizona } from "src/components/common/Typography";

const { width } = Dimensions.get("window");
export const DRAWER_WIDTH = width * 0.8;
const TEACHING_GUIDES_URL = "https://flnt.pt/teaching";

const Drawer = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const { top: topSafeArea } = useSafeAreaInsets();

  const topButtons: TopButton[] = [
    {
      visible: true,
      iconLeft: <BookIcon />,
      label: "TEACHING GUIDES",
      onPress: () => {
        WebBrowser.openBrowserAsync(TEACHING_GUIDES_URL);
      },
    },
    {
      visible: true,
      iconLeft: <SettingsIcon />,
      label: "SETTINGS",
      onPress: () => {
        closeDrawer();
        navigation.navigate(Navigator.HOME_NAV, {
          screen: Screen.SETTINGS,
        });
      },
    },
    {
      visible: true,
      iconLeft: (
        <AntDesign
          name="customerservice"
          marginBottom={-Size.X2_S}
          size={24}
          color="black"
        />
      ),
      label: "HELP",
      onPress: () => {
        // Intercom.present();
      },
    },
  ];

  const handleSignOut = () => {};
  // const getUserName = ({ name, email }: UserProps) => {
  //   if (name) {
  //     // fullname can be an email address
  //     return name.split("@")[0];
  //   }

  //   return email ? email.split("@")[0] : "";
  // };

  const closeDrawer = () => {
    navigation.dispatch(DrawerActions.closeDrawer());
  };
  // On smaller screens and if Bases Button is displayed
  // decrease spacing between items in the menu
  const spacingBetweenButtons =
    SCREEN_WIDTH <= ViewportSize.SMALL ? Size.XS : Size.S;

  return (
    <ScrollView
      style={{ paddingTop: topSafeArea, ...styles.container }}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.closeButtonHolder}>
        <CloseButton
          withBackground
          color={Colors.WHITE}
          backgroundColor={Colors.PRIMARY}
          onPress={closeDrawer}
        />
      </View>
      {/* <View style={styles.userInfo}> */}
      {/* <Avatar
          size={AvatarSize.LARGE}
          name=""
          // imageUri={globalState.user.avatar}
          style={styles.avatar}
        /> */}
      {/* {globalState.user && (
          <Title1 align="center" style={styles.fullName}>
            {getUserName(globalState.user)}
          </Title1>
        )} */}
      {/* <Divider
          marginTop={Size.XS}
          marginBottom={Size.XS}
          color={Colors.PRIMARY}
          height={2}
        /> */}
      {/* {globalState.user && (
          <HeadlineLight
            align="center"
            marginBottom={Size.S}
            style={styles.email}>
            {globalState.user.email}
          </HeadlineLight>
        )} */}
      {/* </View> */}
      <View className="flex-row mt-5 mb-5 border-[#0000001A] border-2 rounded-[25px] p-4 items-center justify-center">
        <AvatarTypeSpecific name={"H"} pushers={[]} size={60} />
        <View className="flex-column ml-4 mt-0">
          <Text
            className={`text-[20px] font-bold font-[${FontArizona.BOLD}] leading-[24.66px] text-left text-[#006271]`}
          >
            Sandra Hensly
          </Text>
          <Text
            className={`text-[12px] font-bold font-[${FontArizona.BOLD}] leading-[14.8px] text-left text-[#006271] mt-1.5`}
          >
            Joined since July 15, 2023
          </Text>
        </View>
      </View>
      <TopButtons buttons={topButtons} marginBottom={spacingBetweenButtons} />

      <DrawerButton
        fullWidth
        marginBottom={spacingBetweenButtons}
        iconLeft={<LogoutIcon color={Colors.RED} />}
        label={"LOGOUT"}
        color={Colors.WHITE}
        textColor={Colors.RED}
        onPress={handleSignOut}
      />
    </ScrollView>
  );
};

export default Drawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: { paddingHorizontal: Size.L, paddingBottom: Size.L },

  closeButtonHolder: {
    left: -Size.L,
    width: "100%",
  },
});
