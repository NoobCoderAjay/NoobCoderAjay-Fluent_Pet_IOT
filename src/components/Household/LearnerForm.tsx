import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import React, { Dispatch, SetStateAction, createRef, useState } from "react";

import { Colors } from "../../theme/Colors";
import { Size } from "../../theme/Size";

import PickerModal from "react-native-picker-modal-view";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import SectionedMultiSelect from "react-native-sectioned-multi-select";
import use24hourClock from "../../hooks/use24hourClock";
import moment from "moment";
import pickerDefaultProps from "../../components/Household/constants";

import _ from "lodash";
import languagesData from "../../components/Household/languages.json";
import { Select, TextInput } from "src/components/common/Form";
import { SelectIcon } from "src/components/common/Form/Select";
import SectionToggle from "src/components/common/SectionToggle";
import MultiSelect from "src/components/common/Form/MultiSelect";
import { FontArizona } from "src/components/common/Typography";

interface Props {
  learnerTypesForSelect: any[];
  subjectName?: string;
  species: any;
  subType: string;
  language: string;
  researchId: string;
  birthDate?: Date;
  trainingDate?: Date;
  setSpecies: Dispatch<SetStateAction<any>>;
  setSubType: Dispatch<SetStateAction<string>>;
  setLanguage: Dispatch<SetStateAction<string>>;
  setResearchId: Dispatch<SetStateAction<string>>;
  setSubjectName: Dispatch<SetStateAction<string>>;
  onBirthDateSelect(date: Date): void;
  onTrainingDateSelect(date: Date): void;
}

const LearnerForm: React.FC<Props> = ({
  learnerTypesForSelect,
  subjectName,
  species,
  subType,
  language,
  researchId,
  birthDate,
  trainingDate,
  setSpecies,
  setSubType,
  setLanguage,
  setResearchId,
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

  const languageArrayToLanguageNames = () => {
    const limitCharacterByWidth: number = width * 0.1;
    const languageString: string = languageArray
      .map(
        (languageAbbr) =>
          languagesData.find((lang) => lang.id === languageAbbr)?.name
      )
      .join(", ");
    return languageString.length > limitCharacterByWidth
      ? _.truncate(languageString, {
          length: limitCharacterByWidth,
          omission: "...",
        })
      : languageString;
  };
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

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.formContainer}>
        <View>
          <Text style={styles.label}>Learner Name</Text>
          <TextInput
            backgroundColor={Colors.LIGHT_WHITE}
            marginBottom={Size.XS}
            placeholder="Full Name"
            onChangeText={undefined}
            value={undefined}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inlineInputs}>
          <View style={styles.inlineInput}>
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
        </View>
        <SectionToggle
          title={{
            hidden: "Show Advanced Settings",
            visible: "Hide Advanced Settings",
          }}
          color={Colors.BLUE_NEW}
          style={{ marginTop: 5 }}
        >
          {!_.isEmpty(species) && (
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
          )}
          <TextInput
            marginBottom={Size.XS}
            placeholder="Research Participant ID"
            onChangeText={setResearchId}
            autoCapitalize="none"
            returnKeyType="next"
            returnKeyLabel="next"
            value={researchId}
            backgroundColor={Colors.LIGHT_WHITE}
          />
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
        </SectionToggle>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LearnerForm;

const styles = StyleSheet.create({
  formContainer: {
    marginTop: 20,
    paddingBottom: 100,
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
