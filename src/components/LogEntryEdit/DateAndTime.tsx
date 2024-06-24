import moment from "moment";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import { CalendarSmallIcon, ClockSmallIcon } from "src/assets/icons";
import { IS_ANDROID } from "src/constants";
import use24hourClock from "src/hooks/use24hourClock";
import { Size } from "src/theme/Size";

import { TextInput } from "../common/Form";
import Select from "../common/Form/Select";
import { HeadlineLight } from "../common/Text";
import { Colors } from "src/theme/Colors";
import { FontArizona } from "../common/Typography";

const INPUT_FIELD_HEIGHT = Size.X2_L;

interface Props {
  occurredAt: Date;
  modifySeconds(seconds: number): void;
  showDatePicker(): void;
  showTimePicker(): void;
}

const DateAndTime: React.FC<Props> = ({
  occurredAt,
  modifySeconds,
  showDatePicker,
  showTimePicker,
}) => {
  const is24hourClock = use24hourClock();

  const [seconds, setSeconds] = useState(moment(occurredAt).format("ss"));
  const date = moment(occurredAt).format("MMM Do YYYY");
  const time = moment(occurredAt).format(
    is24hourClock ? "H:mm:ss" : "h:mm:ss A"
  );

  useEffect(() => {
    if (moment(occurredAt).format("ss") === "00") {
      setSeconds("");
    }
  }, [occurredAt]);

  const onSecondsChange = (value: string) => {
    const valueDigitsOnly = value.replace(/[^0-9]/g, "");
    const secondsToSet =
      parseInt(valueDigitsOnly, 10) > 59 ? "59" : valueDigitsOnly;

    setSeconds(secondsToSet);

    if (valueDigitsOnly) {
      modifySeconds(parseInt(secondsToSet, 10));
    } else {
      modifySeconds(0);
    }
  };

  const onFocus = () => {
    // clearTextOnFocus prop only works on iOS
    if (IS_ANDROID) {
      setSeconds("");
    }
  };

  return (
    <View style={styles.container}>
      {/* <View style={{ marginBottom: Size.XS }}>
        <Select
          icon={CalendarSmallIcon}
          height={INPUT_FIELD_HEIGHT}
          value={date}
          onPress={showDatePicker}
        />
      </View> */}
      <View style={styles.timeContainer}>
        <Select
          icon={ClockSmallIcon}
          height={INPUT_FIELD_HEIGHT}
          value={time ?? ""}
          onPress={showTimePicker}
          backgroundColor={Colors.LIGHT_WHITE}
        />
        <View style={styles.secondsContainer}>
          <TextInput
            height={INPUT_FIELD_HEIGHT}
            placeholder="00"
            value={seconds}
            keyboardType="numeric"
            maxLength={2}
            onChangeText={onSecondsChange}
            autoCorrect={false}
            clearTextOnFocus
            onFocus={onFocus}
            backgroundColor={Colors.LIGHT_WHITE}
          />
        </View>
        <HeadlineLight
          align="center"
          marginBottom={Size.XS}
          style={styles.secondsLabel}
          v2
        >
          Seconds
        </HeadlineLight>
      </View>
    </View>
  );
};

export default DateAndTime;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "flex-start",
    marginBottom: Size.XS,
  },
  timeContainer: {
    flexDirection: "row",
    marginBottom: Size.XS,
  },
  secondsContainer: {
    width: 60,
    marginLeft: Size.X4_L,
  },
  secondsLabel: {
    position: "absolute",
    top: -30,
    right: 0,
    fontFamily: FontArizona.BOLD,
  },
});
