import { AntDesign } from "@expo/vector-icons";
import React from "react";
import {
  Dimensions,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { FontArizona } from "src/components/common/Typography";
import { Colors } from "src/theme/Colors";

//@ts-ignore
import Badges from "../../assets/images/newImages/Badges.png";
//@ts-ignore
import SuccessPic from "../../assets/images/shareModal/SuccessPic.png";

import CustomButton from "src/components/common/CustomButton";
import StreakBox from "../Box/StreakBox";

interface ModuleSuccessModalProps {
  visible: boolean;
  onClose: () => void;
  toggleModal: () => void;
}

const ModuleSuccessModal: React.FC<ModuleSuccessModalProps> = ({
  visible,
  onClose,
  toggleModal,
}) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={toggleModal}>
        <View style={styles.modalContainer}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContent}>
              <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                <AntDesign name="sharealt" size={24} color="#006271" />
              </TouchableOpacity>
              <Image source={SuccessPic} />
              <Text style={styles.congratulationText}>Success</Text>
              <Text style={styles.modalText}>
                Your button has been recorded
              </Text>
              <StreakBox />

              <View style={styles.achievementsBox}>
                <View style={styles.achievementsBoxContent}>
                  <Text style={styles.achievementsText}>Achievements</Text>
                  <TouchableOpacity style={styles.viewAllButton}>
                    <Text style={styles.viewAllButtonText}>VIEW ALL</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.contentSpacer} />
                <View style={styles.achievementsStreakContent}>
                  <Text style={styles.countText}>1750 / 2000</Text>
                  <View style={styles.badgeContainer}>
                    <Image source={Badges} />
                    <Text style={styles.quizeButtonText}>Quiz{"\n"}Master</Text>
                  </View>
                </View>
                <View style={styles.contentSpacer} />
                <View style={styles.achievementsXPContent}>
                  <Text style={styles.countXPText}>XP</Text>
                  <Text style={styles.badgeText}>BADGES: 4</Text>
                </View>
              </View>

              <View style={styles.bottomButtonContainer}>
                <CustomButton onPress={onClose} text="Select New Lesson" />
                <CustomButton
                  text="Take Quiz"
                  style={[styles.saveButton]}
                  textStyle={[styles.bottomButtonText]}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
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
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  bottomButtonContainer: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  saveButton: {
    backgroundColor: Colors.PRIMARY_DARK,
  },
  bottomButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.WHITE,
  },
  achievementsBox: {
    borderWidth: 1,
    borderColor: "#0000001A",
    backgroundColor: "#FFFFFF",
    overflow: "hidden",
    marginTop: 20,
    borderRadius: 10,
    width: Dimensions.get("screen").width - 50,
  },
  achievementsBoxContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    marginTop: 10,
  },
  achievementsXPContent: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#F8E6FF",
  },
  achievementsStreakContent: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  achievementsText: {
    fontSize: 16,
    fontFamily: FontArizona.BOLD,
    color: "#006271",
  },
  countText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#9B51E0",
  },
  countXPText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#9B51E0",
  },
  viewAllButton: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#0000001A",
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  viewAllButtonText: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#006271",
  },
  quizeButtonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#6F89FA",
    marginTop: 6,
  },
  badgeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  badgeText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#9B51E0",
  },
  contentSpacer: {
    height: 10,
  },
});

export default ModuleSuccessModal;
