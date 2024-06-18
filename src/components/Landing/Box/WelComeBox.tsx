import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

//@ts-ignore
import Dog from "../../../assets/images/newImages/Dog.png";
import { Navigator } from "../../../navigation/constants";
import { FontArizona } from "src/components/common/Typography";

//@ts-ignore
// import Loading from '../../../assets/images/newImages/Loading.png';

type Props = {};

const WelComeBox = (_props: Props) => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const handleBtnPress = () => {
    navigation.navigate(Navigator.MODULE_NAV);
  };

  return (
    <View style={styles.boxContainer}>
      {/* <Image source={Loading} style={styles.loadingImage} /> */}
      <View style={styles.textButtonContainer}>
        <View>
          <Text style={styles.welcomeText}>Welcome Teacher!</Text>
          <Text style={styles.teachCookieText}>Let’s start training</Text>
        </View>
        <TouchableOpacity style={styles.Button} onPress={handleBtnPress}>
          <Text style={styles.ButtonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
      <Image source={Dog} style={styles.imageContainer} />
    </View>
  );
};

export default WelComeBox;

const styles = StyleSheet.create({
  boxContainer: {
    backgroundColor: "#F9E1C0",
    position: "relative",
    marginTop: 15,
    width: "100%",
    height: 220,
    borderRadius: 20,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  // loadingImage: {
  //   position: 'absolute',
  //   top: 15,
  //   left: 15,
  // },
  textButtonContainer: {
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: 20,
    marginLeft: 20,
  },

  imageContainer: { position: "absolute", bottom: 0, right: 0 },
  welcomeText: {
    fontSize: 18,
    fontFamily: FontArizona.BOLD,
    color: "#006271",
  },
  teachCookieText: {
    fontSize: 12,
    fontFamily: FontArizona.BOLD,
    color: "#0062718A",
    marginTop: 6,
  },
  Button: {
    backgroundColor: "#006271",
    paddingVertical: 12,
    borderRadius: 15,
    width: "40%",
    marginTop: 20,
  },
  ButtonText: {
    color: "#fff",
    fontSize: 14,
    fontFamily: FontArizona.BOLD,
    textAlign: "center",
  },
});
