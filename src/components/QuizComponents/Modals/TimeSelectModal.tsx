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
      <View className="flex-1 justify-center items-center bg-[#0000008A] bg-opacity-50">
        <View className="bg-white p-5 rounded-lg items-center">
          <Image source={Clock} />
          <Text
            className="font-bold text-gray-800 text-lg mt-2"
            // style={{ fontFamily: FontArizona.BOLD }}
          >
            Choose Time
          </Text>
          <Text className="font-normal text-gray-600 text-base">
            Choose a time that is appropriate
          </Text>
          <Text className="font-normal text-gray-600 text-base">
            to set a daily reminder
          </Text>
          <View className="flex-row mt-5">
            <View className="flex flex-col">
              <View className="border border-gray-200 rounded-lg w-10 h-10 justify-center items-center mr-5">
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
            <View className="flex flex-col ">
              <View className="border border-gray-200 rounded-lg w-10 h-10 justify-center items-center mr-5">
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
            <View className="flex flex-col ">
              <View className="border border-gray-200 rounded-lg w-10 h-10 justify-center items-center">
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
          <View className="flex-row items-center mt-5">
            <Feather name="info" size={20} color="#C5CEE0" />
            <View style={styles.infoText}>
              <Text className="text-[#C5CEE0] text-[12px] mt-1.5 ">
                You can change this at any time in settings
              </Text>
            </View>
          </View>
          <TouchableOpacity
            className="bg-[#006271] py-3 px-36 rounded-[16px] mt-5"
            onPress={onClose}
          >
            <Text className="text-white text-base font-bold text-center">
              Save
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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

  infoText: {
    marginLeft: 10,
    marginBottom: 7,
  },
});

export default TimeSelectModal;
