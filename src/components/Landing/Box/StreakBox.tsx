import { Entypo } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

//@ts-ignore
import Batches from "../../../assets/images/newImages/Batch.png";
import { FontArizona } from "src/components/common/Typography";

type Props = {};

const StreakBox = (_props: Props) => {
  return (
    <View style={styles.secondBoxContainer}>
      <View style={styles.tipContainer}>
        <View style={styles.imageContainer}>
          <Image source={Batches} style={styles.image} />
        </View>
        <View style={styles.tipTextContainer}>
          <View>
            <Text style={styles.tipText}>Congrats on a 5 day streak! </Text>
            <Text style={styles.tipCookieText}>You earned 25 points</Text>
          </View>
          <View>
            <Entypo name="cross" size={24} color="black" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default StreakBox;

const styles = StyleSheet.create({
  secondBoxContainer: {
    backgroundColor: "#FFF9F1",
    position: "relative",
    marginTop: 15,
    width: "100%",
    borderRadius: 20,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  tipContainer: {
    flexDirection: "row",
    flex: 1,
  },
  imageContainer: {
    marginRight: 20,
    justifyContent: "center",
    marginTop: 15,
  },
  image: {
    width: 50,
    height: 50,
  },
  tipTextContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  tipText: {
    fontSize: 16,
    fontFamily: FontArizona.BOLD,
    lineHeight: 24.66,
    textAlign: "left",
    color: "#006271",
  },
  tipCookieText: {
    fontSize: 14,
    fontFamily: FontArizona.BOLD,
    lineHeight: 16,
    textAlign: "left",
    color: "#666666",
    marginTop: 6,
  },
});
