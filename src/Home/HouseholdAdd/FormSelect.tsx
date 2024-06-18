import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontArizona } from "../../common/Typography";

type Props = {
  buttonLabels: [string, string];
  onToggle: (activeButton: string) => void;
};

const FormSelect: React.FC<Props> = ({ buttonLabels, onToggle }) => {
  const [activeButton, setActiveButton] = useState(buttonLabels[0]);

  const handleToggle = (button: string) => {
    setActiveButton(button);
    onToggle(button);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          activeButton === buttonLabels[0] && styles.activeButton,
        ]}
        onPress={() => handleToggle(buttonLabels[0])}
      >
        <Text
          style={[
            styles.buttonText,
            activeButton === buttonLabels[0] && styles.activeButtonText,
          ]}
        >
          {buttonLabels[0]}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          activeButton === buttonLabels[1] && styles.activeButton,
        ]}
        onPress={() => handleToggle(buttonLabels[1])}
      >
        <Text
          style={[
            styles.buttonText,
            activeButton === buttonLabels[1] && styles.activeButtonText,
          ]}
        >
          {buttonLabels[1]}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FormSelect;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#E4E7EC",
  },
  button: {
    paddingVertical: 10,
    width: "50%",
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  activeButton: {
    backgroundColor: "#006271",
  },
  buttonText: {
    color: "#000000",
    fontSize: 16,
    fontFamily: FontArizona.BOLD,
  },
  activeButtonText: {
    color: "#ffffff",
  },
});
