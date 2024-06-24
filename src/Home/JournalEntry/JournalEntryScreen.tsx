import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { FontArizona } from "src/components/common/Typography";
import { DateAndTime, Notes } from "src/components/LogEntryEdit";
import { HeadlineLight } from "src/components/common/Text";
import { SizeV2 } from "src/theme/Size";
import { Select } from "src/components/common/Form";
import { SelectIcon } from "src/components/common/Form/Select";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import use24hourClock from "src/hooks/use24hourClock";
import { Colors } from "src/theme/Colors";
import moment from "moment";
import SafeAreaButtonBlock from "src/components/common/SafeAreaButtonBlock";

interface Props {
  date?: Date;
  onDateSelect(date: Date): void;
}
type PickerMode = "date" | "time" | "datetime" | undefined;

const JournalEntryScreen: React.FC<Props> = ({ date, onDateSelect }) => {
  const [note, setNote] = useState("");
  const today = new Date();
  const is24hourClock = use24hourClock();
  const [occurredAt, setOccurredAt] = useState(undefined || new Date());
  const [mode, setMode] = useState<PickerMode>("date");
  const [showDatepicker, setShowDatepicker] = useState(false);
  const [dateTimePickerVisible, setDateTimePickerVisible] = useState(false);
  const modifySeconds = (seconds: number) => {
    const updatedDate = new Date(occurredAt.setSeconds(seconds));
    setOccurredAt(updatedDate);
  };
  const showMode = (currentMode: PickerMode) => {
    setDateTimePickerVisible(true);
    setMode(currentMode);
  };

  return (
    <>
      <ScrollView className="p-5 bg-[#FFFFFF] h-full">
        <Text style={{ fontFamily: FontArizona.BOLD }} className="text-[18px]">
          Add Journal Entry
        </Text>

        <View className="mt-5">
          <Notes value={note!} setValue={setNote} />
        </View>
        <View className="mt-5">
          <Text>Date</Text>
          <Select
            iconRight={SelectIcon.CALENDAR}
            onPress={() => setShowDatepicker(true)}
            placeholder="Date"
            value={date && moment(date).format("D MMM yyyy")}
            backgroundColor={Colors.LIGHT_WHITE}
          />
          <DateTimePickerModal
            isVisible={showDatepicker}
            date={date ? new Date(date) : today}
            mode="date"
            is24Hour={Boolean(is24hourClock)}
            locale={is24hourClock ? "en_GB" : undefined}
            maximumDate={today}
            onConfirm={(val) => {
              setShowDatepicker(false);
              if (val !== undefined) {
                setShowDatepicker(false);
                onDateSelect(val);
              }
            }}
            onCancel={() => setShowDatepicker(false)}
          />
        </View>
        <View className="mt-5">
          <HeadlineLight style={styles.timestamp} marginBottom={SizeV2.X2_S} v2>
            Timestamp
          </HeadlineLight>
          <DateAndTime
            //@ts-ignore
            occurredAt={undefined}
            modifySeconds={modifySeconds}
            showDatePicker={() => showMode("date")}
            showTimePicker={() => showMode("time")}
          />
        </View>
      </ScrollView>
      <SafeAreaButtonBlock
        leftButtonText="Cancel"
        leftButtonOnPress={() => {}}
        rightButtonText="Save Event"
        rightButtonOnPress={() => {}}
        // errors={errors}
        safeAreaEnabled={true}
        rightButtonTextStyle={styles.bottomButtonText}
      />
    </>
  );
};

export default JournalEntryScreen;

const styles = StyleSheet.create({
  timestamp: { alignSelf: "flex-start", fontFamily: FontArizona.BOLD },
  bottomButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});
