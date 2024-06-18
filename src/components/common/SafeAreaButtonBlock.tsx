import _ from "lodash";
import React from "react";
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Body } from "./Typography";
import { Size } from "src/theme/Size";
import { Colors } from "src/theme/Colors";
import CustomButton from "./CustomButton";
import { parseErrors } from "src/lib/utilities";

interface ButtonBlockProps {
  leftButtonText: string;
  leftButtonOnPress: () => void;
  rightButtonText: string;
  rightButtonOnPress: () => void;
  rightButtonStyle?: StyleProp<ViewStyle>;
  rightButtonTextStyle?: StyleProp<TextStyle>;
  errors?: Record<string, any>;
  safeAreaEnabled?: boolean;
}

const SafeAreaButtonBlock: React.FC<ButtonBlockProps> = ({
  leftButtonText,
  leftButtonOnPress,
  rightButtonText,
  rightButtonOnPress,
  rightButtonStyle,
  rightButtonTextStyle,
  errors,
  safeAreaEnabled = true,
}) => {
  const { bottom } = useSafeAreaInsets();
  const marginBottom = safeAreaEnabled ? bottom : 0;

  return (
    <View style={[styles.container, { marginBottom }]}>
      {errors && !_.isEmpty(errors) && (
        <View style={{ paddingBottom: Size.S }}>
          <Body color={Colors.RED}>{parseErrors(errors)}</Body>
        </View>
      )}
      <View style={styles.buttonContainer}>
        <CustomButton text={leftButtonText} onPress={leftButtonOnPress} />
        <CustomButton
          text={rightButtonText}
          onPress={rightButtonOnPress}
          style={[styles.rightButton, rightButtonStyle]}
          textStyle={rightButtonTextStyle}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Size.M,
    paddingVertical: Size.M,
    backgroundColor: "#FFFFFF",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rightButton: {
    backgroundColor: "#006271",
    marginLeft: 10,
  },
});

export default SafeAreaButtonBlock;
