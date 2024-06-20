import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
  Dimensions,
  StyleSheet,
} from "react-native";
//@ts-ignore
import Reload from "../../../assets/images/newImages/Reload.png";
import { Reset } from "src/assets/icons";

type LessonBoxProps = {
  imageSource: ImageSourcePropType;
  title: string;
  subtitle: string;
  isCompleted: boolean;
  onReload?: () => void;
  progress?: string;
  onContinue?: () => void;
};

const LessonBox: React.FC<LessonBoxProps> = ({
  imageSource,
  title,
  subtitle,
  isCompleted,
  onReload,
  progress,
  onContinue,
}) => (
  <View
    className={`flex-1 ${
      isCompleted ? "bg-[#E2F3FB]" : "bg-white border border-[#0062712A]"
    } rounded-2xl p-4`}
  >
    <View className="flex-row justify-between w-full">
      <View className="flex-row ml-1 flex-1">
        <Image source={imageSource} className="w-12 h-12" />
        <View className="ml-2 flex-1">
          <Text className="font-bold text-sm mb-2 text-[#006271]">{title}</Text>
          <Text className="font-semibold text-xs mb-2 text-[#3692A1]">
            {subtitle}
          </Text>
          {!isCompleted && progress && (
            <View className="flex-row items-center">
              <View style={styles.progressContainer}>
                <View style={{ ...styles.progressBar, width: "20%" }} />
              </View>
              <Text className="font-bold text-sm items-center pt-[1%]">
                {progress}
              </Text>
            </View>
          )}
        </View>
      </View>
      {isCompleted
        ? onReload && (
            <TouchableOpacity onPress={onReload} className="mt-2">
              {/* <Image source={Reload} className="w-8 h-8 mt-2.5" /> */}
              <Reset />
            </TouchableOpacity>
          )
        : onContinue && (
            <View>
              <TouchableOpacity className="mt-5 flex-row items-center bg-white border border-[#006271] rounded-2xl px-3 py-2">
                <Text className="font-bold">Continue</Text>
              </TouchableOpacity>
            </View>
          )}
    </View>
  </View>
);

export default LessonBox;

const screenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
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
