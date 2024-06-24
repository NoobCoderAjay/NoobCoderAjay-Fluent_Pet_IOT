import React from "react";
import { View, Modal, StyleSheet, TouchableOpacity } from "react-native";
import CustomButton from "../common/CustomButton";

interface ActionSheetOption {
  text: string;
  backgroundColor?: string;
  textColor?: string;
}

interface CustomActionSheetProps {
  visible: boolean;
  options: ActionSheetOption[];
  onSelect: (index: number) => void;
  onCancel: () => void;
}
const DashboardActionSheet: React.FC<CustomActionSheetProps> = ({
  visible,
  options,
  onSelect,
  onCancel,
}) => {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="slide"
      onRequestClose={onCancel}
    >
      <TouchableOpacity style={styles.overlay} onPress={onCancel}>
        <View style={styles.actionSheet}>
          {options.map((option, index) => (
            <CustomButton
              key={index}
              text={option.text}
              onPress={() => onSelect(index)}
              style={styles.button}
              backgroundColor={option.backgroundColor}
              textStyle={{ color: option.textColor }}
            />
          ))}

          <CustomButton
            text="Cancel"
            onPress={onCancel}
            style={styles.cancelButton}
            textStyle={styles.cancelButtonText}
          />
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  actionSheet: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 32,
    height: "27%",
  },
  button: {
    marginBottom: 8,
  },
  cancelButton: {
    backgroundColor: "#FFFFFF",
  },
  cancelButtonText: {
    color: "#006271",
  },
});

export default DashboardActionSheet;
