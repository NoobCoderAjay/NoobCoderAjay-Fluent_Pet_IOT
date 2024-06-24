import { useFocusEffect } from "@react-navigation/native";
import _ from "lodash";
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { StyleSheet, Text, View } from "react-native";
import { AddIcon, CloseIcon, LookingGlassIcon } from "src/assets/icons";
import { useFeatureFlags } from "src/hooks";
import { ButtonSortType, SelectedButton } from "src/model/board";
import { Button } from "src/model/interaction";
import { Color } from "src/theme/Color";
import { Colors } from "src/theme/Colors";
import { Size, SizeV2 } from "src/theme/Size";
import AnimatedPressable from "./common/AnimatedPressable";
import { ButtonBadge } from "./Dashboard/ButtonBadge";

import { ButtonSort } from "./ButtonSort";
import { TextInput } from "src/Home/Log/components/TextInput";
import { FontArizona } from "./common/Typography";

export interface Props {
  buttons: Button[] | undefined;
  onAddButtonPress?: (prepopulatedName?: string) => void;
  onButtonPress: (button: Button) => void;
  onButtonLongPress?: (button: Button) => void;
  setButtonPresses?: (buttonPresses: SelectedButton[]) => void;
  sortType?: ButtonSortType;
  onSortTypeChange: (sortType: ButtonSortType) => void;
  hideSpecialButtons?: boolean;
  renderCustomButtonsOnly?: boolean;
}

const INAUDIBLE = "inaudible";

export const ButtonsBoard: React.FC<Props> = ({
  buttons,
  onAddButtonPress,
  onButtonPress,
  onButtonLongPress,
  setButtonPresses,
  sortType,
  onSortTypeChange,
  hideSpecialButtons,
  renderCustomButtonsOnly = false,
}) => {
  const [speechToTextResults, setSpeechToTextResults] = useState<string[]>([]);
  const [searchText, setSearchText] = useState("");

  // const preferenceQuery = usePreference('feature_flags');

  // const { speechToTextEnabled } = useFeatureFlags(
  //   globalState.user,
  //   preferenceQuery,
  // );

  const clearSearchText = () => {
    setSearchText("");
  };

  useFocusEffect(
    useCallback(() => {
      return () => clearSearchText();
    }, [])
  );

  const filteredButtons = useMemo(() => {
    if (searchText === "") {
      return buttons;
    }
    return buttons?.filter((button) =>
      _.startsWith(
        button.text.toLocaleLowerCase(),
        searchText.toLocaleLowerCase()
      )
    );
  }, [buttons, searchText]);

  useEffect(() => {
    if (!speechToTextResults[0]) {
      return;
    } else {
      console.log("[SPEECH][SAYS]", speechToTextResults[0]);
    }

    const recognizedButtons: SelectedButton[] = [];
    speechToTextResults[0].split(" ").forEach((result) => {
      buttons?.forEach((button) => {
        // TODO: Improve matching words that are similar (try to match based on similarity index)
        // TODO: Improve matching words spoken in singular/plural form
        // Could use packages like this one https://www.npmjs.com/package/string-similarity
        const speechResult = result.toLowerCase();
        const buttonText = button.text.toLowerCase();
        if (
          speechResult === buttonText ||
          `${speechResult}s` === buttonText ||
          speechResult === `${buttonText}s`
        ) {
          recognizedButtons.push({
            value: button.id,
            label: button.text,
            isConnect: !!button?.base,
          });
        }
      });
    });

    if (setButtonPresses) {
      setButtonPresses(recognizedButtons);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [speechToTextResults, buttons]);

  const customButtons = useMemo(
    () => filteredButtons?.filter((button) => button.text !== INAUDIBLE),
    [filteredButtons]
  );

  const inaudibleButton = useMemo(
    () => filteredButtons?.find((button) => button.text === INAUDIBLE),
    [filteredButtons]
  );

  const renderSearchIcon = () => (
    <LookingGlassIcon size={SizeV2.M} color={Colors.SECONDARY} />
  );

  const renderAddButton = () => (
    <View style={styles.addButtonContainer}>
      <AddIcon width={SizeV2.S} color={"#007180"} />
      <Text style={styles.addButtonText}>Add Button</Text>
    </View>
  );
  const renderClearIcon = () => (
    <AnimatedPressable
      onPress={clearSearchText}
      style={styles.clearIconTouchable}
    >
      <CloseIcon width={SizeV2.XS} color={Colors.GREY_DARK} />
    </AnimatedPressable>
  );

  const onButtonBadgePress = (button: Button) => {
    clearSearchText();
    onButtonPress(button);
  };

  const renderButtonBadge = (button: Button) => (
    <ButtonBadge
      key={button.id}
      title={button.text}
      backgroundColor={
        button?.type === "connect" ? Color.BUTTON_BLUE : Color.GREEN_100
      }
      color={Color.BLUE_500}
      containerStyle={styles.badge}
      onPress={() => onButtonBadgePress(button)}
      onLongPress={
        onButtonLongPress ? () => onButtonLongPress(button) : undefined
      }
    />
  );

  const resetSpeechResults = () => {
    setSpeechToTextResults([]);
  };

  return renderCustomButtonsOnly ? (
    <View style={styles.badgesContainer}>
      {customButtons?.map(renderButtonBadge)}
    </View>
  ) : (
    <View>
      <View style={styles.optionsContainer}>
        <TextInput
          autoCapitalize="none"
          value={searchText}
          onChangeText={setSearchText}
          placeholder="Search for a Button..."
          color={Colors.SECONDARY}
          iconRight={
            searchText.length > 0 ? renderClearIcon() : renderSearchIcon()
          }
          containerStyle={styles.textInput}
        />
        {/* {speechToTextEnabled && (
          <SpeechRecognition
            onSpeechResultsUpdated={setSpeechToTextResults}
            resetSpeechResults={resetSpeechResults}
          />
        )} */}
        {/* <ButtonSort
          sortType={sortType!}
          onOptionPress={onSortTypeChange}
          constainerStyle={styles.sortContainer}
        /> */}
      </View>
      <View style={styles.badgesContainer}>
        {!hideSpecialButtons && (
          <ButtonBadge
            containerStyle={styles.badge}
            backgroundColor={Colors.WHITE}
            icon={renderAddButton()}
            onPress={() => {
              // prepopulating new Button name if the user cant find any with given name
              onAddButtonPress?.(
                customButtons?.length === 0 ? searchText : undefined
              );
            }}
          />
        )}
        {customButtons?.map(renderButtonBadge)}
        {inaudibleButton && !hideSpecialButtons && (
          <ButtonBadge
            containerStyle={styles.badge}
            backgroundColor={Color.BLUE_500}
            title="inaudible"
            onPress={() => onButtonPress(inaudibleButton!)}
            onLongPress={
              onButtonLongPress
                ? () => onButtonLongPress?.(inaudibleButton!)
                : undefined
            }
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  optionsContainer: {
    alignItems: "center",
    flexDirection: "row",
    marginBottom: SizeV2.L,
    // marginHorizontal: SizeV2.L,
  },
  badgesContainer: {
    // marginHorizontal: SizeV2.L,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  textInput: {
    marginRight: SizeV2.M,
  },
  badge: {
    marginRight: SizeV2.XS,
    marginBottom: SizeV2.XS,
    borderColor: "#007180",
    borderWidth: 1,
  },
  clearIconTouchable: { padding: SizeV2.XS },
  sortContainer: {
    paddingHorizontal: Size.X2_S,
  },
  addButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    marginLeft: SizeV2.XS,
    color: "#007180",
    fontFamily: FontArizona.BOLD,
    fontSize: 14,
  },
});
