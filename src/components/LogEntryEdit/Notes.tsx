import React, { Dispatch, SetStateAction } from "react";
import { StyleSheet, TextInput, View } from "react-native";

import { Colors } from "src/theme/Colors";
import { Size } from "src/theme/Size";
import { Font, TextSize } from "src/theme/Text";

interface Props {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  placeholder?: string;
}

const Notes: React.FC<Props> = ({
  value,
  setValue,
  placeholder = "Write a maximum of 250 words.",
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        multiline
        blurOnSubmit={false}
        returnKeyType="default" // return
        placeholder={placeholder}
        placeholderTextColor={Colors.GREY_DARK}
        value={value}
        onChangeText={(val) => setValue(val)}
        textAlignVertical="top"
        style={styles.input}
        scrollEnabled={false}
      />
    </View>
  );
};

export default Notes;

const MIN_HEIGHT = 120;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: Size.XS,
  },
  input: {
    width: "100%",
    minHeight: MIN_HEIGHT,
    paddingTop: Size.S,
    padding: Size.S,
    backgroundColor: Colors.LIGHT_WHITE,
    borderRadius: Size.BORDER_RADIUS,
    fontFamily: Font.REGULAR,
    fontSize: TextSize.body.fontSize,
  },
});
