import { FontAwesome as Icon } from "@expo/vector-icons";
import CheckBox from "@react-native-community/checkbox";
import React, { useContext, Dispatch, SetStateAction, useState } from "react";
import { View, StyleSheet } from "react-native";
import PickerModal from "react-native-picker-modal-view";

import pickerDefaultProps from "./constants";
import countryData from "./countries.json";

import useFeatureFlags from "../../hooks/useFeatureFlags";
import { Colors } from "src/theme/Colors";
import { Select, TextInput } from "../common/Form";
import { Caption1 } from "../common/Text";
import { TextSize } from "src/theme/Text";
import { ScreenTitle } from "@navigation/constants";
import { ProfileIcon } from "src/assets/icons";
import { Size } from "src/theme/Size";
import { SelectIcon } from "../common/Form/Select";

interface Props {
  isNewTeacher: boolean;
  email: string;
  country: string;
  sendHouseholdInvitation?: boolean;
  isHouseholdMember?: boolean;
  isHouseholdInvitation?: boolean;
  setEmail: Dispatch<SetStateAction<string>>;
  setCountry: Dispatch<SetStateAction<string>>;
  setSendHouseholdInvitation?: Dispatch<SetStateAction<boolean>>;
}

const TeacherForm: React.FC<Props> = ({
  isNewTeacher,
  email,
  country,
  sendHouseholdInvitation,
  isHouseholdMember,
  isHouseholdInvitation,
  setEmail,
  setCountry,
  setSendHouseholdInvitation,
}) => {
  // const { globalState } = useContext(AuthContext);
  //@ts-ignore
  const { householdInvitesEnabled } = useFeatureFlags();
  const [emailFrozen] = useState<string>(email);

  let membershipColor = Colors.GREY;
  let membershipText = emailFrozen
    ? `${
        emailFrozen || "This Teacher"
      } has not been invited to your Household yet`
    : null;

  if (isHouseholdMember) {
    membershipColor = Colors.PRIMARY_DARK;
    membershipText = `${emailFrozen} is a confirmed Member of this Household`;
  } else if (isHouseholdInvitation) {
    membershipColor = Colors.ORANGE;
    membershipText = `${emailFrozen} has a pending invitation to join this Household`;
  }

  return (
    <View style={styles.container}>
      <TextInput
        marginBottom={Size.XS}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        autoCapitalize="none"
        editable={isNewTeacher}
      />
      <PickerModal
        renderSelectView={(_disabled, _selected, showModal) => (
          <Select
            iconRight={SelectIcon.CHEVRON}
            placeholder={"Country"}
            value={country}
            onPress={showModal}
          />
        )}
        // @ts-ignore
        onSelected={(selected) => setCountry(selected.Name)}
        items={countryData as any[]}
        showToTopButton={true}
        {...pickerDefaultProps}
      />

      {householdInvitesEnabled && !!email && (
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
    </View>
  );
};

export default TeacherForm;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: Size.L,
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
