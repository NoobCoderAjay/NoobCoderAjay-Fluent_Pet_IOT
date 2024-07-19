import { AntDesign } from "@expo/vector-icons";
import Intercom from "@intercom/intercom-react-native";
import React, { useEffect } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { Divider } from "src/components/common";
import { Caption2, Title1 } from "src/components/common/Text";
import { APP_VERSION } from "src/constants";
import { Colors } from "src/theme/Colors";
import { SCREEN_HEIGHT, SCREEN_WIDTH, Size, SizeV2 } from "src/theme/Size";

import Auth0Login from "../auth0";
import AuthScreen from "src/components/AuthScreen";

const Welcome: React.FC = () => {
  useEffect(() => {
    Intercom.loginUnidentifiedUser();
  }, []);

  const handleIntercomOpen = () => {
    Intercom.present();
  };
  return (
    <AuthScreen noBackButton hideForgotPassword>
      <Title1 color={Colors.PRIMARY_DARK}>Let's go</Title1>
      <Divider marginTop={Size.X3_L} marginBottom={Size.X3_L} />
      <Auth0Login />
      <View style={styles.version}>
        <Caption2 color={Colors.PRIMARY_DARK}>{APP_VERSION}</Caption2>
      </View>
      <View style={styles.addMemberButton}>
        <TouchableOpacity onPress={handleIntercomOpen}>
          <AntDesign
            name="customerservice"
            size={SizeV2.XL}
            color={Colors.PRIMARY}
          />
        </TouchableOpacity>
      </View>
    </AuthScreen>
  );
};

const styles = StyleSheet.create({
  version: {
    position: "absolute",
    right: SCREEN_WIDTH - 2,
    top: SCREEN_HEIGHT * 0.65,
    zIndex: 55,
  },
  addMemberButton: {
    backgroundColor: "white",
    padding: 4,
    borderRadius: 50,
    position: "absolute",
    left: SCREEN_WIDTH - 2,
    top: SCREEN_HEIGHT * 0.63,
    zIndex: 55,
  },
});

export default Welcome;
