import React, { useEffect, useState } from "react";
import * as Font from "expo-font";
import { View, Image, StyleSheet } from "react-native";
//@ts-ignore
import SplashScreen from "../assets/images/OnboardingImages/SplashScreen.png";
import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { FontArizona } from "./common/Typography";

export type FontSource = Parameters<typeof Font.loadAsync>[0];
interface Props {
  children: React.ReactNode;
}

const FontLoader: React.FC<Props> = ({ children }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        "Lato-Black": require("../../assets/fonts/Lato-Black.ttf"),
        "Lato-Bold": require("../../assets/fonts/Lato-Bold.ttf"),
        "Lato-SemiBold": require("../../assets/fonts/Lato-Semibold.ttf"),
        "Lato-Medium": require("../../assets/fonts/Lato-Medium.ttf"),
        "Lato-Regular": require("../../assets/fonts/Lato-Regular.ttf"),
        "Lato-Light": require("../../assets/fonts/Lato-Light.ttf"),
        [FontArizona.REGULAR]: require("../../assets/fonts/ABCArizonaSans-Regular.otf"),
        [FontArizona.BOLD]: require("../../assets/fonts/ABCArizonaSans-Bold.otf"),
        ...AntDesign.font,
        ...Entypo.font,
        ...Feather.font,
        ...FontAwesome.font,
        ...Ionicons.font,
        ...MaterialCommunityIcons.font,
      });
      setFontsLoaded(true);
    };
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <Image
          source={SplashScreen}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
    );
  }

  return <>{children}</>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default FontLoader;
