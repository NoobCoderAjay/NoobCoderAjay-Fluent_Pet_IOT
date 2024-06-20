import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

//@ts-ignore
import Foundation from "../../../assets/images/newImages/Foundation.png";
import { Screen } from "../../../navigation/constants";
import { SizeV2 } from "../../../theme/Size";
import { FontArizona } from "src/components/common/Typography";

type Props = {
  title: string;
  id: number;
};

const ImageCardBox = (props: Props) => {
  const { title, id } = props;
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const handleBtnPress = () => {
    navigation.navigate(Screen.COURSE_SCREEN);
  };
  return (
    <View>
      <View style={styles.imageBox}>
        <TouchableOpacity onPress={handleBtnPress}>
          <ImageBackground source={Foundation} style={styles.imageBackground}>
            <Text style={styles.text}>{title}</Text>
            <Text style={styles.subText}>Understanding the Process</Text>
            {/* <View style={styles.iconContainer}>
              <Ionicons
                name="notifications-outline"
                size={SizeV2.XL}
                color="#FFFFFF"
              />
            </View> */}
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ImageCardBox;

const styles = StyleSheet.create({
  imageBox: {
    overflow: "hidden",
    borderRadius: SizeV2.L,
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    position: "relative",
  },
  text: {
    fontSize: SizeV2.L,
    fontFamily: FontArizona.BOLD,
    color: "#FFFFFF",
    marginLeft: SizeV2.M,
  },
  subText: {
    fontSize: 14,
    fontFamily: FontArizona.BOLD,
    color: "#FFFFFF",
    marginLeft: SizeV2.M,
    marginBottom: SizeV2.XL,
  },
  // iconContainer: {
  //   position: 'absolute',
  //   top: SizeV2.S,
  //   right: SizeV2.M,
  // },
});
