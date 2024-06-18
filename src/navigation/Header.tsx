import React from "react";
import { ImageBackground, StyleSheet, View, Text } from "react-native";
//@ts-ignore
import HeaderImg from "../assets/images/header/HeaderImg.png";
import { Colors } from "src/theme/Colors";
import { Font, TextSize } from "src/theme/Text";

interface CustomHeaderProps {
  title: string;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ title }) => (
  <ImageBackground source={HeaderImg} style={styles.headerBackground}>
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  </ImageBackground>
);

const styles = StyleSheet.create({
  headerBackground: {
    width: "100%",
    height: "100%",
  },
  headerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.SECONDARY_LIGHT,
  },
  headerTitle: {
    fontSize: TextSize.body.fontSize,
    fontFamily: Font.BLACK,
    letterSpacing: 3,
    color: Colors.PRIMARY_DARK,
  },
});

export default CustomHeader;
