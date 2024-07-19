import { Screen } from "@navigation/constants";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import _, { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import InformationForm from "src/components/QuizComponents/Forms/InformationForm";
import SafeAreaButtonBlock from "src/components/common/SafeAreaButtonBlock";
import { Size } from "src/theme/Size";

type Props = {};

const InformationScreen: React.FC<Props> = ({}) => {
  const [learnerTypesForSelect, setLearnerTypesForSelect] =
    useState<LearnerTypesForSelect>([]);

  const [errors, setErrors] = useState({});
  const [subjectName, setSubjectName] = useState("");

  const [birthDate, setBirthDate] = useState<Date>();
  const [trainingDate, setTrainingDate] = useState<Date>();
  const [species, setSpecies] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subType, setSubType] = useState("");
  const [language, setLanguage] = useState("");
  const navigationFunction = useNavigation<NavigationProp<ParamListBase>>();
  type LearnerTypesForSelect = {
    Name: string;
    Id: number;
  }[];

  const onBirthDateSelect = (date?: Date) => {
    if (date) {
      setBirthDate(date);
    }
  };

  const onTrainingDateSelect = (date?: Date) => {
    if (date) {
      setTrainingDate(date);
    }
  };
  const navigateToNextScreen = () => {
    setIsSubmitting(false);
    navigationFunction.navigate(Screen.GOAL_SCREEN);
  };
  const navigateToBackScreen = () => {
    setIsSubmitting(false);
    navigationFunction.navigate(Screen.PROFILE_SCREEN);
  };
  return (
    <>
      <ScrollView
        // eslint-disable-next-line react-native/no-inline-styles
        showsVerticalScrollIndicator={false}
        className="p-5 bg-white"
        contentContainerStyle={{ paddingBottom: Size.S }}
      >
        <View>
          <Text className="text-[#333333] text-2xl font-bold font-arizona-bold">
            Tell us about your learner
          </Text>
          <Text className="text-[#666666] text-base mt-1.5 font-arizona-regular">
            Tell us a little bit about your dog, cat, or whatever other species
            you're teaching.
          </Text>
        </View>
        <View className="mt-5">
          <InformationForm
            subjectName={subjectName}
            learnerTypesForSelect={learnerTypesForSelect}
            species={species}
            subType={subType}
            language={language}
            birthDate={birthDate}
            trainingDate={trainingDate}
            setSpecies={setSpecies}
            setSubType={setSubType}
            setLanguage={setLanguage}
            onBirthDateSelect={onBirthDateSelect}
            onTrainingDateSelect={onTrainingDateSelect}
            setSubjectName={setSubjectName}
          />
        </View>

        {/* {errors && !isEmpty(errors) && (
          <View className="self-center py-5">
            <Text className="text-[#F03738]">{parseErrors(errors)}</Text>
          </View>
        )} */}
      </ScrollView>

      <SafeAreaButtonBlock
        leftButtonText="Cancel"
        leftButtonOnPress={navigateToBackScreen}
        rightButtonText="Next"
        rightButtonOnPress={navigateToNextScreen}
        errors={errors}
        safeAreaEnabled={true}
        rightButtonTextStyle={styles.bottomButtonText}
      />
    </>
  );
};

export default InformationScreen;

const styles = StyleSheet.create({
  bottomButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});
