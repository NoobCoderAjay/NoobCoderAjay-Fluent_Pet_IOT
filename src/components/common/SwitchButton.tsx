import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

type Props = {
  onChange: (value: boolean) => void;
  value: boolean;
};

const CustomSwitch: React.FC<Props> = ({ onChange, value }) => {
  const toggleSwitch = () => {
    onChange(!value);
  };

  return (
    <TouchableOpacity onPress={toggleSwitch}>
      <View style={[styles.switch, value ? styles.switchOn : styles.switchOff]}>
        <View
          style={[
            styles.innerCircle,
            value ? styles.innerCircleOn : styles.innerCircleOff,
          ]}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  switch: {
    width: 40,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#CCCCCC",
    justifyContent: "center",
    paddingHorizontal: 2,
  },
  switchOn: {
    backgroundColor: "#006271",
  },
  switchOff: {
    backgroundColor: "#8D9394",
  },
  innerCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
  },
  innerCircleOn: {
    transform: [{ translateX: 20 }],
  },
  innerCircleOff: {
    transform: [{ translateX: 2 }],
  },
});

export default CustomSwitch;
