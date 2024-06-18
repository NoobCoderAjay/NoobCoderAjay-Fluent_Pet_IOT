import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  View,
  Modal,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

//@ts-ignore
import Clock from "../../../assets/images/shareModal/Clock.png";

interface TimeSelectModalProps {
  visible: boolean;
  onClose: () => void;
}

const TimeSelectModal: React.FC<TimeSelectModalProps> = ({
  visible,
  onClose,
}) => {
  const [hours, setHours] = useState("01");
  const [minutes, setMinutes] = useState("00");
  const [ampm, setAmPm] = useState("AM");
  const [selectedHour, setSelectedHour] = useState(false);
  const [selectedMinute, setSelectedMinute] = useState(false);
  const [selectedAmPm, setSelectedAmPm] = useState(false);

  const renderHourOptions = () => {
    const options = [];
    for (let i = 1; i <= 12; i++) {
      options.push(
        <TouchableOpacity
          key={i}
          onPress={() => {
            setHours(i < 10 ? `0${i}` : `${i}`);
            setSelectedHour(false);
          }}
        >
          <Text style={styles.optionText}>{i < 10 ? `0${i}` : `${i}`}</Text>
        </TouchableOpacity>
      );
    }
    return options;
  };

  const renderMinuteOptions = () => {
    const options = [];
    for (let i = 0; i <= 30; i += 30) {
      options.push(
        <TouchableOpacity
          key={i}
          onPress={() => {
            setMinutes(i < 10 ? `0${i}` : `${i}`);
            setSelectedMinute(false);
          }}
        >
          <Text style={styles.optionText}>{i < 10 ? `0${i}` : `${i}`}</Text>
        </TouchableOpacity>
      );
    }
    return options;
  };

  const renderAmPmOptions = () => {
    return (
      <View style={styles.optionsContainer}>
        <TouchableOpacity
          onPress={() => {
            setAmPm("AM");
            setSelectedAmPm(false);
          }}
        >
          <Text style={styles.optionText}>AM</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setAmPm("PM");
            setSelectedAmPm(false);
          }}
        >
          <Text style={styles.optionText}>PM</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.modal}>
          <Image source={Clock} />
          <Text style={styles.heading}>Choose Time</Text>
          <Text style={styles.subHeading}>
            Choose a time that is appropriate
          </Text>
          <Text style={styles.subHeading}>to set a daily reminder</Text>
          <View style={styles.timeContainer}>
            <View style={styles.hoursContainer}>
              <View style={styles.timeBox}>
                <Text
                  style={styles.time}
                  onPress={() => {
                    setSelectedHour(!selectedHour);
                    setSelectedMinute(false);
                    setSelectedAmPm(false);
                  }}
                >
                  {hours}
                </Text>
              </View>
              {selectedHour && (
                <ScrollView style={styles.optionsContainer}>
                  {renderHourOptions()}
                </ScrollView>
              )}
            </View>
            <View style={styles.minuteContainer}>
              <View style={styles.timeBox}>
                <Text
                  style={styles.time}
                  onPress={() => {
                    setSelectedMinute(!selectedMinute);
                    setSelectedHour(false);
                    setSelectedAmPm(false);
                  }}
                >
                  {minutes}
                </Text>
              </View>
              {selectedMinute && (
                <ScrollView style={styles.optionsContainer}>
                  {renderMinuteOptions()}
                </ScrollView>
              )}
            </View>
            <View style={styles.ampmContainer}>
              <View style={styles.timeBox}>
                <Text
                  style={styles.time}
                  onPress={() => {
                    setSelectedAmPm(!selectedAmPm);
                    setSelectedHour(false);
                    setSelectedMinute(false);
                  }}
                >
                  {ampm}
                </Text>
              </View>
              {selectedAmPm && renderAmPmOptions()}
            </View>
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.infoIcon}>
              <Feather name="info" size={20} color="#B3B3B3" />
            </View>
            <View style={styles.infoText}>
              <Text style={styles.infoTextContent}>
                You can change this at any time in settings
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.saveButton} onPress={onClose}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modal: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  heading: {
    fontWeight: "700",
    color: "#333333",
    fontSize: 20,
    marginTop: 10,
  },
  subHeading: {
    fontWeight: "400",
    color: "#666666",
    fontSize: 14,
  },
  timeContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  timeBox: {
    borderColor: "#3333331A",
    borderWidth: 1,
    borderRadius: 8,
    width: 43,
    height: 43,
    justifyContent: "center",
    marginRight: 20,
  },
  time: {
    fontSize: 20,
    color: "#006271",
    fontWeight: "700",
    textAlign: "center",
  },
  optionsContainer: {
    borderColor: "#3333336A",
    borderWidth: 1,
    borderRadius: 8,
    width: 40,
    marginLeft: 1,
    maxHeight: 150,
    backgroundColor: "white",
    position: "absolute",
    zIndex: 1,
  },
  optionText: {
    fontSize: 18,
    color: "#006271",
    padding: 5,
    fontWeight: "700",
  },
  infoContainer: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  infoIcon: {
    alignContent: "center",
  },
  infoText: {
    marginLeft: 10,
    marginBottom: 7,
  },
  infoTextContent: {
    color: "#B3B3B3",
    fontWeight: "400",
    alignContent: "center",
    marginTop: 3,
    fontSize: 12,
  },
  saveButton: {
    backgroundColor: "#006271",
    paddingVertical: 13,
    paddingHorizontal: 170,
    borderRadius: 15,
    marginTop: 20,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  hoursContainer: { flexDirection: "column" },
  minuteContainer: { flexDirection: "column" },
  ampmContainer: { flexDirection: "column" },
});

export default TimeSelectModal;
