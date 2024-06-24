/* eslint-disable react-native/no-inline-styles */
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  Animated,
  Dimensions,
  StyleSheet,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";

import { Screen } from "@navigation/constants";
import ImageCardBox from "src/components/Landing/Box/ImageCardBox";
import ProTipBox from "src/components/Landing/Box/ProTipBox";
import AchievementBox from "src/components/Landing/Box/AchievementBox";
import HelperBox from "src/components/Landing/Box/HelperBox";

type Props = {};

const moduleData = [
  { title: "Module 1", id: 1 },
  { title: "Module 2", id: 2 },
  { title: "Module 3", id: 3 },
];

const ModuleScreen = (_props: Props) => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(0);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const width = Dimensions.get("window").width;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const handleBackBtnPress = () => {
    navigation.navigate(Screen.LANDING);
  };

  const renderAnimatedStepper = (length: number) => {
    if (!length) {
      return null;
    }
    const animatedViews = [];

    for (let i = 0; i < length; i++) {
      animatedViews.push(
        <Animated.View
          key={i}
          style={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 5,
            backgroundColor: i === currentIndex ? "#006271" : "#BDEEFD",
          }}
        />
      );
    }

    return (
      <View className="flex-row justify-center items-center mb-2">
        {animatedViews}
      </View>
    );
  };

  return (
    <View>
      <View className="pl-5 pr-5 bg-white h-[calc(100vh-130px)]">
        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          showsVerticalScrollIndicator={false}
        >
          <Carousel
            mode="parallax"
            loop={true}
            width={width - 40}
            height={width * 0.65}
            data={moduleData}
            scrollAnimationDuration={100}
            onSnapToItem={(index: number) => setCurrentIndex(index)}
            renderItem={({ index }: { index: number }) => (
              <ImageCardBox
                key={index + "moduleImages"}
                title={moduleData[index].title}
                id={index}
              />
            )}
          />
          <View>{renderAnimatedStepper(moduleData.length)}</View>
          <ProTipBox />
          <AchievementBox />
          <HelperBox />
        </ScrollView>
      </View>
    </View>
  );
};

export default ModuleScreen;
const screenHeight = Dimensions.get("window").height;
const paddingBottom = screenHeight * 0.11;

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingBottom: paddingBottom,
  },
});
