import { useActionSheet } from "@expo/react-native-action-sheet";
import _ from "lodash";
import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { Screen } from "@navigation/constants";
import { ModalStackScreenProps } from "@navigation/navigators/ModalNavigator";

import { AddIcon } from "src/assets/icons";

import { AvatarSize } from "src/components/Avatar/constants/AvatarSize";
import { TeacherForm } from "src/components/Household";
import LearnerForm from "src/components/Household/LearnerForm";
import { SafeAreaBottomButton, Divider } from "src/components/common";
import { Label, TextInput } from "src/components/common/Form";
import { Title1 } from "src/components/common/Text";

import { LearnerType, Pusher, PusherType } from "src/model/pusher";
import { Colors } from "src/theme/Colors";
import { Size, SizeV2 } from "src/theme/Size";
import { openAvatarPicker } from "src/helpers/openAvatarPicker";
import deleteConfirmationAlert from "src/helpers/deleteConfirmationAlert";
import Avatar from "src/components/Avatar/Avatar";
import SafeAreaButtonBlock from "src/components/common/SafeAreaButtonBlock";

type Props = {};

interface FormData {
  subjectName: string;
  email: string;
  birthDate: Date | undefined;
  trainingDate: Date | undefined;
  species: any;
  country: string;
  formType: PusherType;
  subType: string;
  language: string;
  researchId: string;
  avatar: any;
}

const HouseholdEdit: React.FC<Props> = ({}) => {
  const { showActionSheetWithOptions } = useActionSheet();

  const [errors, setErrors] = useState({});
  const [learnerTypesForSelect, setLearnerTypesForSelect] = useState<Object[]>(
    []
  );
  const [initialData, setInitialData] = useState<string>();
  const [isSaveDisabled, setIsSaveDisabled] = useState<boolean>(true);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const [formData, setFormData] = useState<FormData>({
    subjectName: "",
    email: "",
    birthDate: undefined,
    trainingDate: undefined,
    species: {},
    country: "",
    formType: PusherType.LEARNER,
    subType: "",
    language: "",
    researchId: "",
    avatar: undefined,
  });

  const updateFormData = (newData: any) => {
    setFormData((currentFormData) => ({
      ...currentFormData,
      ...newData,
    }));
  };

  const isLearnerForm = formData.formType === PusherType.LEARNER;

  const loadPhotoPicker = useCallback(async () => {
    const result = await openAvatarPicker();

    if (result?.path) {
      updateFormData({ avatar: { path: result.path } });
    }
  }, []);

  const onAvatarLongPress = () => {
    if (formData.avatar) {
      openActionSheet();
    }
  };

  const openActionSheet = () => {
    const options = ["Remove Photo", "Cancel"];
    const destructiveButtonIndex = 0;
    const cancelButtonIndex = 1;
    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          deleteConfirmationAlert(() => {
            updateFormData({ avatar: undefined });
          });
        }
      }
    );
  };

  //   const onPusherQueryLoaded = useCallback(
  //     (data: Pusher) => {
  //       updateFormData({
  //         subjectName: data.name,
  //         email: data.email ?? '',
  //         language: data.language ?? '',
  //         researchId: data.research_id ?? '',
  //         birthDate: data.birth_date
  //           ? offsetDateForLocalTz(data.birth_date)
  //           : undefined,
  //         trainingDate: data.training_started_at
  //           ? offsetDateForLocalTz(data.training_started_at)
  //           : undefined,
  //         formType: data.is_human ? PusherType.TEACHER : PusherType.LEARNER,
  //         country: data.country ?? '',
  //         species: data.learner_type_id
  //           ? learnerTypesForSelect.filter(
  //               (ltd: any) => ltd.Name === data.learner_type?.name,
  //             )[0]
  //           : undefined,
  //         avatar: data.avatar_uri ? { path: data.avatar_uri } : undefined,
  //         subType: !_.isEmpty(data.sub_type) ? data.sub_type : '',
  //       });
  //     },
  //     [learnerTypesForSelect],
  //   );

  // Select component requires data in this format
  //   const handleLearnerTypesSuccess = (data: LearnerType[]) => {
  //     setLearnerTypesForSelect(
  //       data.map((learnerType: LearnerType) => ({
  //         Id: learnerType.id,
  //         Name: learnerType.name,
  //       })),
  //     );
  //   };

  // Api
  //   const updatePusherMutation = useUpdatePusher();
  //   const learnerTypesQuery = useLearnerTypes({
  //     staleTime: 5 * 60 * 1000,
  //   });

  //   const pusherQuery = usePusher(id, {
  //     enabled: learnerTypesForSelect.length > 0,
  //     staleTime: 5 * 60 * 1000,
  //   });

  //   useEffect(() => {
  //     if (learnerTypesQuery.data) {
  //       handleLearnerTypesSuccess(learnerTypesQuery.data);
  //     }
  //   }, [learnerTypesQuery.data]);

  //   useEffect(() => {
  //     if (pusherQuery.data) {
  //       onPusherQueryLoaded(pusherQuery.data);
  //     }
  //   }, [pusherQuery.data, onPusherQueryLoaded]);

  //   const queries = [learnerTypesQuery, pusherQuery];
  //   const isFetching = queries.some((q) => q.isFetching);

  //   // Only enable save Button if initial data changes
  //   useEffect(() => {
  //     if (isFetching) {
  //       return;
  //     }

  //     const sortedFormData = Object.keys(formData)
  //       .sort()
  //       .reduce((obj: any, key: string) => {
  //         // @ts-ignore
  //         obj[key] = formData[key];

  //         return obj;
  //       }, {});

  //     const formDataStringify = JSON.stringify(sortedFormData);

  //     if (initialData) {
  //       setIsSaveDisabled(_.isEqual(initialData, formDataStringify));
  //     } else {
  //       setInitialData(formDataStringify);
  //     }
  //   }, [initialData, isFetching, formData]);

  const onBirthDateSelect = (date?: Date) => {
    if (date) {
      updateFormData({ birthDate: date });
    }
  };

  const onTrainingDateSelect = (date?: Date) => {
    if (date) {
      updateFormData({ trainingDate: date });
    }
  };

  //   const validate = () => {
  //     let _errors: Record<string, Object> = {};

  //     if (formData.subjectName === "") {
  //       _errors.subjectName = { message: "You must enter a Name" };
  //     }

  //     if (isLearnerForm) {
  //       if (_.isEmpty(formData.species)) {
  //         _errors.species = { message: "You must select a Species" };
  //       }
  //       if (formData.researchId?.includes(" ")) {
  //         _errors.researchIdSpaces = {
  //           message: "Unique ID cannot contain spaces",
  //         };
  //       }
  //       if (
  //         formData.researchId &&
  //         ![1, 2].includes((formData.researchId.match(/_/g) || []).length)
  //       ) {
  //         _errors.researchIdUnderscore = {
  //           message: "Unique ID must contain either one or two underscores",
  //         };
  //       }
  //     }

  //     return _errors;
  //   };

  //   const onSubmit = async () => {
  //     const _errors = validate();
  //     setErrors(_errors);
  //     if (!_.isEmpty(_errors)) {
  //       return;
  //     }

  //     submitWaitNavigate({
  //       toggleFunc: setIsSubmitting,
  //       asyncMutateFunc: updatePusherMutation.mutateAsync,
  //       data: {
  //         id,
  //         ...formData,
  //         speciesId: formData.species && formData.species.Id,
  //         isHuman: !isLearnerForm,
  //       },
  //       navigation: navigation,
  //       goBack: true,
  //     });
  //   };

  const renderTypeSpecificForm = () => {
    if (isLearnerForm) {
      return (
        <LearnerForm
          //   subjectName={""}
          learnerTypesForSelect={learnerTypesForSelect}
          species={formData.species}
          subType={formData.subType}
          language={formData.language}
          researchId={formData.researchId}
          birthDate={formData.birthDate}
          trainingDate={formData.trainingDate}
          setSpecies={(value) => updateFormData({ species: value })}
          setSubType={(value) => updateFormData({ subType: value })}
          setLanguage={(value) => updateFormData({ language: value })}
          setResearchId={(value) => updateFormData({ researchId: value })}
          onBirthDateSelect={onBirthDateSelect}
          onTrainingDateSelect={onTrainingDateSelect}
          setSubjectName={() => {}}
        />
      );
    } else {
      return (
        <TeacherForm
          email={formData.email}
          country={formData.country}
          setEmail={(value) => updateFormData({ email: value })}
          setCountry={(value) => updateFormData({ country: value })}
          isNewTeacher={false}
        />
      );
    }
  };

  return (
    <>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.screenHeader}>
          <Title1 color={Colors.PRIMARY_DARK} align="center">
            Edit {formData.formType.toLowerCase()}
          </Title1>
          <Divider marginTop={Size.M} />
        </View>
        <View style={{ margin: Size.L }}>
          <Avatar
            size={AvatarSize.LARGE}
            backgroundColor={Colors.PRIMARY}
            icon={<AddIcon color={Colors.WHITE} width={SizeV2.M} />}
            name={`Upload${"\n"} Photo`}
            textColor={Colors.WHITE}
            imageUri={formData.avatar?.path}
            onPress={loadPhotoPicker}
            onLongPress={onAvatarLongPress}
          />
        </View>
        {/* {!isFetching && ( */}
        <View style={styles.inputContainer}>
          {/* <Label>{isLearnerForm ? "Learner Name" : "Teacher Name"}</Label>
          <TextInput
            marginBottom={Size.XS}
            placeholder={isLearnerForm ? "Learner Name" : "Teacher Name"}
            onChangeText={(value) => updateFormData({ subjectName: value })}
            autoCapitalize="none"
            returnKeyType="next"
            returnKeyLabel="next"
            value={formData.subjectName}
          /> */}
          {renderTypeSpecificForm()}
        </View>
        {/* )} */}
      </KeyboardAwareScrollView>
      <SafeAreaButtonBlock
        leftButtonText="Cancel"
        leftButtonOnPress={() => {}}
        rightButtonText="Save"
        rightButtonOnPress={() => {}}
        errors={errors}
        safeAreaEnabled={true}
        rightButtonTextStyle={styles.bottomButtonText}
      />
    </>
  );
};

export default HouseholdEdit;

const styles = StyleSheet.create({
  screenHeader: {
    paddingTop: Size.L,
    paddingHorizontal: Size.L,
    alignItems: "center",
  },
  contentContainer: {
    paddingHorizontal: Size.L,
    paddingBottom: Size.L,
    alignItems: "center",
  },
  inputContainer: {
    width: "100%",
  },
  bottomButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});
