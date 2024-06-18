import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import { FontArizona } from "./Typography";

interface CustomButtonProps extends TouchableOpacityProps {
  text: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
  errors?: Record<string, any>;
  borderColor?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  text,
  style,
  textStyle,
  borderColor = "#CCCCCC",
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, style, { borderColor }]} // Apply borderColor
      onPress={onPress}
      {...props}
    >
      <Text style={[styles.buttonText, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 46,
    borderRadius: 15,
    borderWidth: 1,
    marginRight: 10,
    backgroundColor: "#FFFFFF",
  },
  buttonText: {
    fontSize: 16,
    fontFamily: FontArizona.BOLD,
    color: "#006271",
  },
});

export default CustomButton;
