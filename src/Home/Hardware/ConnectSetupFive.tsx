import { StyleSheet, Text, View } from "react-native";
import React, { useRef, useState } from "react";

import { SimpleLineIcons } from "@expo/vector-icons";

// import { lottieJSON } from "../assets/lottie";
// import Lottie from "lottie-react-native";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import ConnectionSuccessModal from "./ConnectBaseModal";
import { Title1 } from "src/components/common/Text";
import { Body } from "src/components/common/Typography";
import { SCREEN_WIDTH, SizeV2, ViewportSize } from "src/theme/Size";
import CustomButton from "src/components/common/CustomButton";
import { Colors } from "src/theme/Colors";

type Props = {};

const ConnectSetupFive = (props: Props) => {
  const animation = useRef(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  const goToCourseScreen = () => {
    toggleModal();
  };

  return (
    <>
      <View className="flex-1 p-5 bg-white">
        <Title1 v2 color={Colors.BLACK} marginBottom={SizeV2.S}>
          Step 5: Firmware Update
        </Title1>
        <Body style={styles.body}>
          Your Base may be processing a firmware update. During this process
          your Base will be unresponsive and the LED on the top of the Base will
          be off.
          {"\n\n"}
          The update is finished once you see the led blink green and blue once,
          you'll hear the "updated" sound and the LEDs will blink blue and then
          turn off again.
          {"\n\n"}
          Now your Base is ready to link new Buttons!
        </Body>
        {/* <Lottie
          autoPlay
          ref={animation}
          style={styles.lottieView}
          source={lottieJSON.updating}
        /> */}
        <View className="flex-row mt-10 justify-center">
          <SimpleLineIcons name="question" size={20} color={Colors.BLUE_NEW} />
          <Text className="ml-2 font-bold text-[#006271]">
            Tap here for troubleshooting support.
          </Text>
        </View>
      </View>
      <View className="absolute bottom-5 px-5 w-full bg-white">
        <CustomButton
          text="I’ve waited a minute"
          className="bg-[#006271] ml-2.5"
          textStyle={styles.bottomButtonText}
          onPress={toggleModal}
        />
      </View>
      <ConnectionSuccessModal
        visible={isModalVisible}
        onClose={goToCourseScreen}
        toggleModal={() => {}}
        navigation={navigation}
      />
    </>
  );
};

export default ConnectSetupFive;

const SCREEN_PADDING_HORIZONTAL = SizeV2.L;
const LOTTIE_VIEW_WIDTH = SCREEN_WIDTH - SCREEN_PADDING_HORIZONTAL * 2;

const styles = StyleSheet.create({
  bottomButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  body: {
    marginBottom:
      SCREEN_WIDTH <= ViewportSize.MEDIUM ? SizeV2.X4_L : SizeV2.X5_L,
  },
  lottieView: {
    width: LOTTIE_VIEW_WIDTH,
    backgroundColor: Colors.WHITE,
  },
});
