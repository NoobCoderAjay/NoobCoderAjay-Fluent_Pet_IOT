import React from "react";
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

//@ts-ignore
import SuccessPic from "../../../assets/images/shareModal/SuccessPic.png";
import { FontArizona } from "../../common/Typography";

interface CustomModalProps {
  visible: boolean;
  onClose: () => void;
}

const CustomSuccessModal: React.FC<CustomModalProps> = ({
  visible,
  onClose,
}) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Image source={SuccessPic} />
          <Text style={styles.congratulationText}>Congratulations</Text>
          <Text style={styles.modalText}>Your account has been created.</Text>
          <TouchableOpacity style={styles.successButton} onPress={onClose}>
            <Text style={styles.successButtonText}>Let’s Go</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  congratulationText: {
    color: "#333333",
    fontSize: 20,
    fontFamily: FontArizona.BOLD,
  },
  modalText: {
    color: "#666666",
    fontSize: 14,
    marginBottom: 20,
    fontFamily: FontArizona.REGULAR,
  },
  successButton: {
    backgroundColor: "#006271",
    paddingVertical: 13,
    paddingHorizontal: 150,
    borderRadius: 15,
    marginTop: 20,
  },
  successButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontFamily: FontArizona.BOLD,
    textAlign: "center",
  },
});

export default CustomSuccessModal;
