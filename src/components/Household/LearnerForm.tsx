import _ from "lodash";
import moment from "moment";
import React, {
  useEffect,
  createRef,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import PickerModal from "react-native-picker-modal-view";
import SectionedMultiSelect from "react-native-sectioned-multi-select";

import languagesData from "../assets/languages.json";

import pickerDefaultProps from "./constants";

import { Size, SizeV2 } from "../../theme/Size";

import { Colors } from "../../theme/Colors";
import use24hourClock from "src/hooks/use24hourClock";
import { Label, Select, TextInput } from "../common/Form";
import { SelectIcon } from "../common/Form/Select";
import MultiSelect from "../common/Form/MultiSelect";
import SectionToggle from "../common/SectionToggle";

interface Props {
  learnerTypesForSelect: any[];
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
  onBirthDateSelect(date: Date): void;
  onTrainingDateSelect(date: Date): void;
}

const LearnerForm: React.FC<Props> = ({
  learnerTypesForSelect,
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
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={[styles.column, styles.leftColumn]}>
          <Label>Species</Label>
          <PickerModal
            renderSelectView={(_disabled, _selected, showModal) => (
              <Select
                iconRight={SelectIcon.CHEVRON}
                marginBottom={Size.XS}
                placeholder={"Species"}
                value={species?.Name}
                onPress={showModal}
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
        <View style={[styles.column, styles.rightColumn]}>
          <Label>Teaching Start Date</Label>
          <Select
            iconRight={SelectIcon.CALENDAR}
            onPress={() => setShowTrainingDatepicker(true)}
            placeholder="Date"
            value={trainingDate && moment(trainingDate).format("D MMM yyyy")}
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
        color={Colors.SECONDARY}
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
        />
        <Select
          placeholder={"Learner Language"}
          value={languageArrayToLanguageNames()}
          marginBottom={Size.XS}
          iconRight={SelectIcon.CHEVRON}
          onPress={toggleLanguageSelect}
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
    </View>
  );
};

export default LearnerForm;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: Size.L,
  },
  row: { flexDirection: "row", marginVertical: SizeV2.M },
  column: {
    flexDirection: "column",
    flexBasis: 1,
    flexGrow: 1,
  },
  leftColumn: {
    marginRight: SizeV2.XS,
  },
  rightColumn: {
    marginLeft: SizeV2.XS,
  },
});
