import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { Dispatch, SetStateAction, useState } from "react";
import { FontAwesome as Icon } from "@expo/vector-icons";
import PickerModal from "react-native-picker-modal-view";

import { Colors } from "../../theme/Colors";
import countryData from "../../components/Household/countries.json";
import { Size } from "../../theme/Size";
import pickerDefaultProps from "../../components/Household/constants";
import { Select, TextInput } from "src/components/common/Form";
import { FontArizona } from "src/components/common/Typography";
import { SelectIcon } from "src/components/common/Form/Select";
import CheckBox from "@react-native-community/checkbox";
import { Caption1 } from "../common/Text";
import { ProfileIcon } from "src/assets/icons";
import { TextSize } from "src/theme/Text";
import { ScreenTitle } from "@navigation/constants";
interface Props {
  isNewTeacher: boolean;
  subjectName?: string;
  email: string;
  country?: string;
  sendHouseholdInvitation?: boolean;
  isHouseholdMember?: boolean;
  isHouseholdInvitation?: boolean;
  setSubjectName?: Dispatch<SetStateAction<string>>;
  setEmail: Dispatch<SetStateAction<string>>;
  setCountry?: Dispatch<SetStateAction<string>>;
  setSendHouseholdInvitation?: Dispatch<SetStateAction<boolean>>;
}

const TeacherForm: React.FC<Props> = ({
  isNewTeacher,
  subjectName,
  email,
  country,
  sendHouseholdInvitation,
  isHouseholdMember,
  isHouseholdInvitation,
  setEmail,
  setSubjectName,
  setCountry,
  setSendHouseholdInvitation,
}) => {
  const [emailFrozen] = useState<string>(email);
  let membershipColor = Colors.GREY;
  let membershipText = emailFrozen
    ? `${
        emailFrozen || "This Teacher"
      } has not been invited to your Household yet`
    : null;
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
        onChangeText={setEmail}
        value={email}
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
          setCountry(selected.Name);
        }}
        items={countryData as any[]}
        showToTopButton={true}
        {...pickerDefaultProps}
      />
      {true && !!email && (
        <>
          {isNewTeacher ? (
            <>
              <View style={styles.checkbox}>
                <CheckBox
                  value={sendHouseholdInvitation}
                  onValueChange={setSendHouseholdInvitation}
                  // iOS
                  onCheckColor={Colors.PRIMARY}
                  onTintColor={Colors.PRIMARY}
                  // Android
                  tintColors={{
                    true: Colors.PRIMARY,
                    false: Colors.SECONDARY_LIGHT,
                  }}
                />
                <Caption1 style={styles.marginLeftSmall}>
                  Send invitation email
                </Caption1>
              </View>
              <Caption1 style={styles.moreInfo} color={Colors.GREY_DARK}>
                <Icon
                  name="info-circle"
                  size={TextSize.caption1.lineHeight}
                  color={Colors.SECONDARY_LIGHT}
                />{" "}
                When invitation email is sent, the Teacher will be able to join
                your shared Household and collaborate with you within the same
                Household. If you don't send invitation email now, you can do it
                later through the {ScreenTitle.SETTINGS} screen.
              </Caption1>
            </>
          ) : (
            <>
              <View style={styles.householdMemberContainer}>
                <View style={styles.iconContainer}>
                  <ProfileIcon color={membershipColor} />
                </View>
                <Caption1 style={styles.membershipTextStyle}>
                  {membershipText}
                </Caption1>
              </View>

              <Caption1 style={styles.moreInfo} color={Colors.GREY_DARK}>
                <Icon
                  name="info-circle"
                  size={TextSize.caption1.lineHeight}
                  color={Colors.SECONDARY_LIGHT}
                />{" "}
                You can manage Household invitations through{" "}
                {ScreenTitle.SETTINGS} screen.
              </Caption1>
            </>
          )}
        </>
      )}
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
  checkbox: {
    margin: Size.XS,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  householdMemberContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: Size.XS,
    marginHorizontal: Size.XS,
  },
  membershipTextStyle: {
    marginRight: Size.S,
  },
  moreInfo: {
    marginHorizontal: Size.XS,
    textAlign: "justify",
  },
  iconContainer: {
    marginRight: Size.X2_S,
  },
  marginLeftSmall: {
    marginLeft: Size.XS,
  },
});
