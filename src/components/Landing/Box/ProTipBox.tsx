import React from "react";
import { Image, StyleSheet, Text, View, Dimensions } from "react-native";

//@ts-ignore
import Graduate from "../../../assets/images/newImages/Graduate.png";
//@ts-ignore
import PressButton from "../../../assets/images/newImages/PressButton.png";
import { Size, SizeV2 } from "../../../theme/Size";
import { FontArizona } from "src/components/common/Typography";

type Props = {};

const ProTipBox = (_props: Props) => {
  return (
    <View style={styles.secondBoxContainer}>
      <View style={styles.tipContainer}>
        <Image source={Graduate} style={styles.imageStyle} />
        <View style={styles.tipTextContainer}>
          <Text style={styles.tipText}>Pro tip: Did you know?</Text>
          <Text style={styles.tipCookieText}>
            Consistent routines reduce stress, aid training, and strengthen
            bonds with pets.
          </Text>
        </View>
      </View>
      <Image source={PressButton} style={styles.pressButtonImage} />
    </View>
  );
};

export default ProTipBox;

const styles = StyleSheet.create({
  secondBoxContainer: {
    backgroundColor: "#E1F4FB",
    position: "relative",
    marginTop: SizeV2.S,
    width: "100%",
    borderRadius: 20,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  imageStyle: { marginTop: Size.X2_S },
  tipContainer: {
    flexDirection: "row",
    padding: SizeV2.S,
    marginTop: SizeV2.S,
  },
  tipTextContainer: {
    marginLeft: SizeV2.M,
  },
  tipText: {
    fontSize: SizeV2.M,
    fontFamily: FontArizona.BOLD,
    color: "#006271",
  },
  tipCookieText: {
    fontSize: SizeV2.S,
    fontFamily: FontArizona.BOLD,
    color: "#0062718A",
    marginTop: SizeV2.XS,
    width: Dimensions.get("window").width * 0.5,
  },
  pressButtonImage: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 100,
    height: 80,
  },
});
