import React from "react";
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { NavigationProp, ParamListBase } from "@react-navigation/native";
import CustomButton from "src/components/common/CustomButton";
import { Navigator, Screen } from "@navigation/constants";
import { Colors } from "src/theme/Colors";
import { images } from "src/assets/images";

interface ConnectionSuccessModalProps {
  visible: boolean;
  onClose: () => void;
  toggleModal: () => void;
  navigation: NavigationProp<ParamListBase>;
}

const InfoRow: React.FC<{ label: string; value: string }> = ({
  label,
  value,
}) => (
  <View style={styles.infoRow}>
    <Text style={styles.infoLabel}>{label}</Text>
    <Text style={styles.infoValue}>{value}</Text>
  </View>
);

const ConnectionSuccessModal: React.FC<ConnectionSuccessModalProps> = ({
  visible,
  onClose,
  toggleModal,
  navigation,
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
              <Text className="text-[20px] font-bold">
                Your Base is Connected
              </Text>
              <Image source={images.baseButtons.baseButtonThree} />

              <InfoRow label="Base Name:" value="Greenroom" />
              <InfoRow label="Base Serial Number:" value="22410119292B" />
              <InfoRow label="Battery Level:" value="80%" />

              <View style={styles.bottomButtonContainer}>
                <CustomButton
                  onPress={() => {
                    onClose();
                    navigation.navigate(Navigator.ONBOARDING_NAV, {
                      screen: Screen.PROFILE_SCREEN,
                      // params: {
                      //   baseName: "Greenroom",
                      //   baseSerialNumber: "22410119292B",
                      //   batteryLevel: "80%",
                      // },
                    });
                  }}
                  text="Finish"
                />
                <CustomButton
                  text="Add Button"
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
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  infoLabel: {
    fontWeight: "bold",
  },
  infoValue: {
    marginLeft: 10,
  },
  bottomButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  bottomButtonContainer: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  saveButton: {
    backgroundColor: Colors.PRIMARY_DARK,
  },
});

export default ConnectionSuccessModal;
