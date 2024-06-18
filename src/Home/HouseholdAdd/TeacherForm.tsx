import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import { FontArizona } from "../../common/Typography";
import PickerModal from "react-native-picker-modal-view";
import { Select, TextInput } from "../../common/Form";
import { SelectIcon } from "../../common/Form/Select";
import { Colors } from "../../theme/Colors";
import countryData from "../../components/Household/countries.json";
import { Size } from "../../theme/Size";
import pickerDefaultProps from "../../components/Household/constants";
interface Props {
  subjectName?: string;
  country?: string;
  setSubjectName?: Dispatch<SetStateAction<string>>;
  // setCountry?: Dispatch<SetStateAction<string>>;
}

const TeacherForm: React.FC<Props> = ({
  subjectName,
  country,
  setSubjectName,
  // setCountry,
}) => {
  return (
    <ScrollView contentContainerStyle={styles.formContainer}>
      <Text style={styles.label}>Full Name</Text>
      <TextInput
        marginBottom={Size.XS}
        placeholder="Name"
        onChangeText={setSubjectName}
        value={subjectName}
        autoCapitalize="none"
        backgroundColor={Colors.LIGHT_WHITE}
      />
      <Text style={styles.label}>Email Id</Text>
      <TextInput
        marginBottom={Size.XS}
        placeholder="Email Id"
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
    </ScrollView>
  );
};

export default TeacherForm;

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
