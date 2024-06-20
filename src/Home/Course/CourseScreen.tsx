import { Feather, Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
//@ts-ignore
import BG from "../../assets/images/newImages/BG.png";
//@ts-ignore
import Complete from "../../assets/images/newImages/Complete.png";
//@ts-ignore
import Reload from "../../assets/images/newImages/Reload.png";
//@ts-ignore
import DoneImg from "../../assets/images/newImages/DoneImg.png";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SizeV2 } from "src/theme/Size";
import { FontArizona } from "src/components/common/Typography";
import LessonBox from "./components/LessonBox";

const CourseScreen = () => {
  const handlePress = () => {
    console.log("Button pressed");
  };
  const ICON_SIZE = SizeV2.L;
  return (
    <View className="flex-1 relative">
      <StatusBar style="light" />
      <ImageBackground source={BG} style={styles.imageContainer}>
        <View className="absolute flex-row justify-between items-center top-20 left-8 right-8">
          <Feather name="chevron-left" size={24} color="#FFFFFF" />
          <Text className="text-white text-lg font-bold">Lesson 3</Text>
          <Ionicons name="notifications-outline" size={24} color="#FFFFFF" />
        </View>
        <View className="absolute bottom-20 left-8 right-8 justify-center items-center">
          <Text className="text-white text-2xl font-bold">Foundations</Text>
          <Text className="text-white text-base">
            Lorem ipsum dolor sit amet.
          </Text>
        </View>
      </ImageBackground>
      <ScrollView>
        <View style={styles.pageContainer}>
          <View>
            <Text className="text-[#006271] text-lg font-bold">Overview</Text>
            <Text className="text-[#0062717A] text-sm font-normal mt-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </View>
          <View className="mt-2.5">
            <Text className="text-[#006271] text-lg font-bold">Overview</Text>
            <View className="flex-row mt-5">
              <LessonBox
                imageSource={Complete}
                title="Lesson 1 - Title"
                subtitle="Completed: 2d ago"
                isCompleted={true}
                onReload={handlePress}
              />
            </View>
            <View className="flex-row mt-5">
              <LessonBox
                imageSource={Complete}
                title="Lesson 2 - Title"
                subtitle="Completed: 2d ago"
                isCompleted={true}
                onReload={handlePress}
              />
            </View>
            <View className="flex-row mt-5">
              <LessonBox
                imageSource={DoneImg}
                title="Lesson 3 - Title"
                subtitle="Completed: 2d ago"
                isCompleted={false}
                progress="20%"
                onContinue={handlePress}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CourseScreen;

const screenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  pageContainer: {
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  imageContainer: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height - 600,
  },
  progressContainer: {
    height: screenHeight * 0.015,
    backgroundColor: "#CBE6ED",
    width: "60%",
    borderRadius: screenHeight * 0.005,
    marginTop: screenHeight * 0.0075,
    marginRight: 10,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#006271",
    borderRadius: screenHeight * 0.005,
  },
});
