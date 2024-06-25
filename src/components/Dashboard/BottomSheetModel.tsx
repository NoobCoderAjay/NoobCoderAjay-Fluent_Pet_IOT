import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
} from "react-native";
import { RadioGroup } from "react-native-radio-buttons-group";
import { images } from "src/assets/images";

interface SnoozeBottomSheetModalProps {
  visible: boolean;
  onClose: () => void;
}
const SnoozeBottomSheetModal: React.FC<SnoozeBottomSheetModalProps> = ({
  visible,
  onClose,
}) => {
  const [selectedId, setSelectedId] = useState<string | undefined>(
    "disable_snooze"
  );

  const options = useMemo(
    () => [
      {
        id: "disable_snooze",
        label: "Disable Snooze",
        value: "disable_snooze",
      },
      {
        id: "10_minutes",
        label: "10 minutes",
        value: "10_minutes",
      },
      {
        id: "30_minutes",
        label: "30 minutes",
        value: "30_minutes",
      },
      {
        id: "1_hour",
        label: "1 hour",
        value: "1_hour",
      },
      {
        id: "3_hours",
        label: "3 hours",
        value: "3_hours",
      },
      {
        id: "1_day",
        label: "1 Day",
        value: "1_day",
      },
      {
        id: "reset_notifications",
        label: "Until I reset notifications",
        value: "reset_notifications",
      },
    ],
    []
  );

  const handleSave = () => {
    console.log("Selected option:", selectedId);

    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.modalTitle}>
            <Text style={styles.modaltext}>Snooze Notification</Text>
            <TouchableOpacity onPress={onClose}>
              <Image source={images.modalImages.CrossMark} />
            </TouchableOpacity>
          </View>
          <View>
            <RadioGroup
              radioButtons={options}
              onPress={setSelectedId}
              selectedId={selectedId}
              containerStyle={{
                display: "flex",
                alignItems: "flex-start",
              }}
            />
          </View>
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  modalContent: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  modalTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modaltext: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#006271",
  },
  option: {
    paddingVertical: 10,
  },
  optionText: {
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: "#006271",
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  radioContainer: {
    display: "flex",
    textAlign: "left",
  },
});

export default SnoozeBottomSheetModal;
