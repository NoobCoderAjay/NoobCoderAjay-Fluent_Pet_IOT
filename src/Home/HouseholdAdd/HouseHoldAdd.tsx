import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";

import TeacherForm from "./TeacherForm";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { Screen } from "../../navigation/constants";
import { BodyBold, Headline2 } from "src/components/common/Typography";
import { AnimatedPressable } from "src/components/common";
import PolygonImageContainer from "src/components/common/PolygonImageContainer";
import LearnerForm from "./LearnerForm";
import SafeAreaButtonBlock from "src/components/common/SafeAreaButtonBlock";
import { PolygonShapePoints } from "src/components/common/helpers/constants";

type Props = {};

const HouseHoldAdd2 = (props: Props) => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const [species, setSpecies] = useState<any>({});
  const [subType, setSubType] = useState("");
  const [selectedForm, setSelectedForm] = useState<"learner" | "teacher">(
    "learner"
  );
  type LearnerTypesForSelect = {
    Name: string;
    Id: number;
  }[];
  const [learnerTypesForSelect, setLearnerTypesForSelect] =
    useState<LearnerTypesForSelect>([]);

  useEffect(() => setSubType(""), [species]);

  //  setting up dog as default
  useEffect(() => {
    const dogType = learnerTypesForSelect.find(
      (learnerType) => learnerType?.Name === "Dog"
    );
    if (dogType) {
      setSpecies(dogType);
    }
  }, [learnerTypesForSelect]);

  const handleNavigation = () => {
    navigation.navigate(Screen.HOUSEHOLD);
  };

  return (
    <>
      <ScrollView className="p-5 bg-white h-full">
        <View className="flex justify-center items-center">
          <Headline2>Add a Member</Headline2>
        </View>
        <View className="justify-center items-center mt-5">
          <AnimatedPressable>
            <PolygonImageContainer
              points={PolygonShapePoints.HEXAGON}
              imageLoaded={true}
              intialStyle={styles.polygonIntailContainer}
              isIntialPage
            />
          </AnimatedPressable>
          <BodyBold>Let's add a member to your household</BodyBold>
        </View>
        <View className="flex-row justify-around items-center mt-7">
          <RadioButton
            label="Learner"
            selected={selectedForm === "learner"}
            onPress={() => setSelectedForm("learner")}
          />
          <RadioButton
            label="Teacher"
            selected={selectedForm === "teacher"}
            onPress={() => setSelectedForm("teacher")}
          />
        </View>
        <View>
          {selectedForm === "learner" ? (
            <LearnerForm
              subjectName={""}
              learnerTypesForSelect={learnerTypesForSelect}
              species={species}
              subType={subType}
              language={""}
              setSpecies={() => {}}
              setSubType={() => {}}
              setLanguage={() => {}}
              setSubjectName={() => {}}
              onBirthDateSelect={() => {}}
              onTrainingDateSelect={() => {}}
            />
          ) : (
            <TeacherForm />
          )}
        </View>
      </ScrollView>
      <SafeAreaButtonBlock
        leftButtonText="Cancel"
        leftButtonOnPress={handleNavigation}
        rightButtonText="Next"
        rightButtonOnPress={handleNavigation}
        // errors={errors}
        safeAreaEnabled={true}
        rightButtonTextStyle={styles.bottomButtonText}
      />
    </>
  );
};

const RadioButton = ({
  label,
  selected,
  onPress,
}: {
  label: string;
  selected: boolean;
  onPress: () => void;
}) => (
  <View className="flex-row items-center">
    <Pressable
      className="w-5 h-5 border-2 border-[#007180] rounded-full justify-center items-center mr-2"
      onPress={onPress}
    >
      {selected && <View className="bg-[#007180] w-3 h-3 rounded-full" />}
    </Pressable>
    <Text className="text-base">{label}</Text>
  </View>
);

export default HouseHoldAdd2;

const styles = StyleSheet.create({
  polygonIntailContainer: {
    top: -30,
    right: -25,
  },
  bottomButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});
