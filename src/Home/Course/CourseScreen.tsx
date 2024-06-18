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

const CourseScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground source={BG} style={styles.imageContainer}>
        <View style={styles.header}>
          <Feather name="chevron-left" size={24} color="#FFFFFF" />
          <Text style={styles.lessonTitle}>Lesson 3</Text>
          <Ionicons name="notifications-outline" size={24} color="#FFFFFF" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Foundations</Text>
          <Text style={styles.subtitle}>Lorem ipsum dolor sit amet.</Text>
        </View>
      </ImageBackground>
      <ScrollView>
        <View style={styles.pageContainer}>
          <View>
            <Text style={styles.overviewTitle}>Overview</Text>
            <Text style={styles.overviewParagraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={styles.overviewTitle}>Overview</Text>
            <View style={styles.courseBoxesContainer}>
              <View style={styles.courseBox}>
                <View style={styles.boxContent}>
                  <View style={styles.boxLeftContent}>
                    <Image source={Complete} style={styles.boxImage} />
                    <View style={styles.boxTextContainer}>
                      <Text style={styles.boxText}>Lesson 1 - Title</Text>
                      <Text style={styles.boxSubText}>Completed: 2d ago</Text>
                    </View>
                  </View>
                  <Image source={Reload} style={styles.reloadImage} />
                </View>
              </View>
            </View>
            <View style={styles.courseBoxesContainer}>
              <View style={styles.courseBox}>
                <View style={styles.boxContent}>
                  <View style={styles.boxLeftContent}>
                    <Image source={Complete} style={styles.boxImage} />
                    <View style={styles.boxTextContainer}>
                      <Text style={styles.boxText}>Lesson 2 - Title</Text>
                      <Text style={styles.boxSubText}>Completed: 2d ago</Text>
                    </View>
                  </View>
                  <Image source={Reload} style={styles.reloadImage} />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CourseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  pageContainer: {
    padding: 20,
    backgroundColor: "#FFFFFF",
    height: Dimensions.get("screen").height,
  },
  imageContainer: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height - 600,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: 85,
    left: 30,
    right: 30,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  lessonTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  overviewTitle: {
    color: "#006271",
    fontSize: 18,
    fontWeight: "700",
  },
  overviewParagraph: {
    color: "#0062717A",
    fontSize: 14,
    fontWeight: "400",
    marginTop: 4,
  },
  textContainer: {
    position: "absolute",
    bottom: 80,
    left: 30,
    right: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  subtitle: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  courseBoxesContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  courseBox: {
    flex: 1,
    backgroundColor: "#E2F3FB",
    borderRadius: 20,
    padding: 15,
  },
  boxContent: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  boxLeftContent: {
    flexDirection: "row",
    marginLeft: 4,
  },
  boxTextContainer: {
    marginLeft: 10,
  },
  boxText: {
    fontWeight: "700",
    fontSize: 14,
    marginBottom: 10,
    color: "#006271",
  },
  boxSubText: {
    fontWeight: "600",
    fontSize: 12,
    marginBottom: 10,
    color: "#3692A1",
  },
  boxImage: {
    width: 50,
    height: 50,
  },
  reloadImage: {
    width: 30,
    height: 30,
    marginTop: 10,
  },
});
