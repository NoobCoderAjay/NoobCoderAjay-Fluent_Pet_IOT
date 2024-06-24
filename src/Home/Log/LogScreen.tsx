import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { FontArizona } from "src/components/common/Typography";
import AvatarTypeSpecific from "src/components/Avatar/AvatarTypeSpecific";
import SafeAreaButtonBlock from "src/components/common/SafeAreaButtonBlock";
import { ButtonsBoard } from "src/components/ButtonsBoard";
import { Button } from "src/model/interaction";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import UserCard from "./components/UserCard";

type Props = {};

const LogScreen = (props: Props) => {
  const [activeButtons, setActiveButtons] = useState<Button[] | undefined>();
  const [pressedCard, setPressedCard] = useState<string | null>(null);

  const handleCardPress = (name: string) => {
    setPressedCard(name === pressedCard ? null : name);
  };
  return (
    <>
      <KeyboardAwareScrollView className="p-5 bg-[#FFFFFF] h-full">
        <Text style={{ fontFamily: FontArizona.BOLD }} className="text-[18px]">
          Who pressed the Buttons?
        </Text>
        <Text
          style={{ fontFamily: FontArizona.REGULAR }}
          className="text-[14px] text-[#333333] mt-3"
        >
          Tap on a member and search for a button to get started.
        </Text>

        <View className="mt-5 flex-row ">
          <UserCard
            name="Floyd Miles"
            userType="Teacher"
            isPressed={pressedCard === "Floyd Miles"}
            isAddUser={false}
            onPress={() => handleCardPress("Floyd Miles")}
          />
          <UserCard
            name="Add User"
            userType=""
            isPressed={pressedCard === "Add User"}
            onPress={() => handleCardPress("Add User")}
            isAddUser={true}
          />
        </View>

        <View className="mt-5">
          <ButtonsBoard
            buttons={activeButtons}
            setButtonPresses={() => {}}
            onButtonPress={() => {}}
            //   sortType={''}
            onSortTypeChange={() => {}}
            onButtonLongPress={() => {}}
            onAddButtonPress={() => {}}
          />
        </View>
      </KeyboardAwareScrollView>
      <SafeAreaButtonBlock
        leftButtonText="Cancel"
        leftButtonOnPress={() => {}}
        rightButtonText="Log Event"
        rightButtonOnPress={() => {}}
        // errors={errors}
        safeAreaEnabled={true}
        rightButtonTextStyle={styles.bottomButtonText}
      />
    </>
  );
};

export default LogScreen;
const styles = StyleSheet.create({
  bottomButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  // polygonIntailContainer: { top: -30, right: -25 },
});
