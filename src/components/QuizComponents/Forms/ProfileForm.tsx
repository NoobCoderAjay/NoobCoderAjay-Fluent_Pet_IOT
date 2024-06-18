import React, { Dispatch, SetStateAction } from "react";
import { StyleSheet, Text, View } from "react-native";
import PickerModal from "react-native-picker-modal-view";
import { Select, TextInput } from "../../common/Form";

import { SelectIcon } from "../../common/Form/Select";

import { FontArizona } from "../../common/Typography";

import countryData from "../../Household/countries.json";
import { Colors } from "src/theme/Colors";
import { Size } from "src/theme/Size";
import pickerDefaultProps from "src/components/Household/constants";
interface Props {
  subjectName?: string;
  country?: string;
  setSubjectName?: Dispatch<SetStateAction<string>>;
  // setCountry?: Dispatch<SetStateAction<string>>;
}

const ProfileForm: React.FC<Props> = ({
  subjectName,
  country,
  setSubjectName,
  // setCountry,
}) => {
  return (
    <View style={styles.formContainer}>
      <Text style={styles.label}>Full Name</Text>
      <TextInput
        marginBottom={Size.XS}
        placeholder="Name"
        onChangeText={setSubjectName}
        value={subjectName}
        autoCapitalize="none"
        backgroundColor={Colors.LIGHT_WHITE}
      />
      <Text style={styles.label}>Country</Text>
      <PickerModal
        renderSelectView={(_disabled, _selected, showModal) => (
          <Select
            iconRight={SelectIcon.CHEVRON}
            placeholder="Choose your location"
            value={country}
            onPress={showModal}
            backgroundColor={Colors.LIGHT_WHITE}
          />
        )}
        //@ts-ignore
        onSelected={(selected) => {
          //@ts-ignore
          // setCountry(selected.Name);
        }}
        items={countryData as any[]}
        showToTopButton={true}
        {...pickerDefaultProps}
      />
    </View>
  );
};

export default ProfileForm;

const styles = StyleSheet.create({
  formContainer: {
    marginTop: 20,
    backgroundColor: "#FFFFFF",
  },
  label: {
    fontSize: 16,
    marginBottom: 15,
    color: "#333333",
    fontFamily: FontArizona.BOLD,
  },
});
