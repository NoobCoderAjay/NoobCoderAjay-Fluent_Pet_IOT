import _ from "lodash";
import moment from "moment";
import React, {
  Dispatch,
  SetStateAction,
  createRef,
  useEffect,
  useState,
} from "react";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import PickerModal from "react-native-picker-modal-view";
import SectionedMultiSelect from "react-native-sectioned-multi-select";

import Select, { SelectIcon } from "../../common/Form/Select";

import { FontArizona } from "../../common/Typography";
import MultiSelect from "../../common/Form/MultiSelect";
import use24hourClock from "src/hooks/use24hourClock";
import { TextInput } from "src/components/common/Form";
import { Colors } from "src/theme/Colors";
import pickerDefaultProps from "src/components/Household/constants";
import { Size } from "src/theme/Size";
import languagesData from "../../Household/languages.json";
interface Props {
  learnerTypesForSelect: any[];
  subjectName: string;
  species: any;
  subType: string;
  language: string;
  birthDate?: Date;
  trainingDate?: Date;
  setSpecies: Dispatch<SetStateAction<any>>;
  setSubType: Dispatch<SetStateAction<string>>;
  setLanguage: Dispatch<SetStateAction<string>>;
  setSubjectName: Dispatch<SetStateAction<string>>;
  onBirthDateSelect(date: Date): void;
  onTrainingDateSelect(date: Date): void;
}

const InformationForm: React.FC<Props> = ({
  learnerTypesForSelect,
  subjectName,
  species,
  subType,
  language,
  birthDate,
  trainingDate,
  setSpecies,
  setSubType,
  setLanguage,
  setSubjectName,
  onBirthDateSelect,
  onTrainingDateSelect,
}) => {
  const languagePickerRef = createRef<SectionedMultiSelect<unknown>>();
  const [languageArray, setLanguageArray] = useState<string[]>([]);
  const [showBirthDatepicker, setShowBirthDatepicker] = useState(false);
  const [showTrainingDatepicker, setShowTrainingDatepicker] = useState(false);
  const is24hourClock = use24hourClock();
  const { width } = useWindowDimensions();
  const today = new Date();

  useEffect(() => {
    if (language === undefined || language === "") {
      setLanguageArray([]);
    } else {
      setLanguageArray(language.split(",").sort());
    }
  }, [language]);
  const allLanguages = [
    {
      name: "You can select multiple languages",
      id: 0,
      languages: languagesData,
    },
  ];
  const onSelectedLanguageChange = (languages: any[]) => {
    setLanguage(languages.join(","));
  };

  const toggleLanguageSelect = () => {
    languagePickerRef.current?._toggleSelector();
  };

  const cancelLanguageSelection = () => {
    languagePickerRef.current?._cancelSelection();
  };

  const languageArrayToLanguageNames = () => {
    const limitCharcterByWidth: number = width * 0.1;
    const languageString: string = languageArray
      .map(
        (languageAbbr) =>
          languagesData.find((lang) => lang.id === languageAbbr)?.name
      )
      .join(", ");
    return languageString.length > limitCharcterByWidth
      ? _.truncate(languageString, {
          length: limitCharcterByWidth,
          omission: "...",
        })
      : languageString;
  };
  return (
    <View style={styles.formContainer}>
      <View>
        <Text style={styles.label}>Learner Name</Text>
        <TextInput
          backgroundColor={Colors.LIGHT_WHITE}
          marginBottom={Size.XS}
          placeholder="Full Name"
          onChangeText={setSubjectName}
          value={subjectName}
          autoCapitalize="none"
        />
      </View>
      <View>
        <Text style={styles.label}>Species</Text>
        <PickerModal
          renderSelectView={(_disabled, _selected, showModal) => (
            <Select
              iconRight={SelectIcon.CHEVRON}
              marginBottom={Size.XS}
              placeholder={"Species"}
              value={species?.Name}
              onPress={() => {
                showModal();
              }}
              backgroundColor={Colors.LIGHT_WHITE}
            />
          )}
          // @ts-ignore
          onSelected={(selected) => {
            setSpecies(selected);
          }}
          items={learnerTypesForSelect}
          showToTopButton={true}
          selected={species as any}
          {...pickerDefaultProps}
        />
      </View>
      <View style={styles.inlineInputs}>
        <View style={styles.inlineInput}>
          <Text style={styles.label}>Teaching Start Date</Text>
          <Select
            iconRight={SelectIcon.CALENDAR}
            onPress={() => setShowTrainingDatepicker(true)}
            placeholder="Date"
            value={trainingDate && moment(trainingDate).format("D MMM yyyy")}
            backgroundColor={Colors.LIGHT_WHITE}
          />
          <DateTimePickerModal
            isVisible={showTrainingDatepicker}
            date={trainingDate ? new Date(trainingDate) : today}
            mode="date"
            is24Hour={Boolean(is24hourClock)}
            locale={is24hourClock ? "en_GB" : undefined}
            maximumDate={today}
            onConfirm={(val) => {
              setShowTrainingDatepicker(false);
              if (val !== undefined) {
                setShowTrainingDatepicker(false);
                onTrainingDateSelect(val);
              }
            }}
            onCancel={() => setShowTrainingDatepicker(false)}
          />
        </View>
        <View style={[styles.inlineInput]}>
          <Text style={styles.label}>Kind</Text>
          <>
            <TextInput
              marginBottom={Size.XS}
              placeholder={
                !_.isEmpty(species) ? `Kind of ${species.Name}` : "Breed"
              }
              onChangeText={setSubType}
              autoCapitalize="none"
              returnKeyType="next"
              returnKeyLabel="next"
              value={subType}
              backgroundColor={Colors.LIGHT_WHITE}
            />
          </>
        </View>
      </View>
      <View>
        <Text style={styles.label}>Birthdate</Text>
        <Select
          iconRight={SelectIcon.CALENDAR}
          onPress={() => setShowBirthDatepicker(true)}
          marginBottom={Size.XS}
          placeholder="Learner Birth Date"
          value={birthDate && moment(birthDate).format("MMMM Do yyyy")}
          backgroundColor={Colors.LIGHT_WHITE}
        />
        <DateTimePickerModal
          isVisible={showBirthDatepicker}
          date={birthDate ? new Date(birthDate) : today}
          maximumDate={today}
          is24Hour={Boolean(is24hourClock)}
          locale={is24hourClock ? "en_GB" : undefined}
          mode="date"
          onConfirm={(val) => {
            setShowBirthDatepicker(false);
            if (val !== undefined) {
              setShowBirthDatepicker(false);
              onBirthDateSelect(val);
            }
          }}
          onCancel={() => setShowBirthDatepicker(false)}
        />
      </View>
      <View>
        <Text style={styles.label}>Learner Language</Text>
        <Select
          placeholder={"Learner Language"}
          value={languageArrayToLanguageNames()}
          marginBottom={Size.XS}
          iconRight={SelectIcon.CHEVRON}
          onPress={toggleLanguageSelect}
          backgroundColor={Colors.LIGHT_WHITE}
        />
        <MultiSelect
          ref={languagePickerRef}
          items={allLanguages}
          selectedItems={languageArray}
          searchPlaceholderText="Search..."
          confirmText="CONFIRM"
          subKey="languages"
          onSelectedItemsChange={onSelectedLanguageChange}
          onSubmitSelection={toggleLanguageSelect}
          onCancelSelection={cancelLanguageSelection}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 15,

    color: "#333333",
    fontFamily: FontArizona.BOLD,
  },
  inlineInputs: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 4,
  },
  inlineInput: {
    flex: 1,
  },
});

export default InformationForm;
