import { AntDesign as AntDesignIcon } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, Vibration, View } from "react-native";

import { EllipsisIcon } from "src/assets/icons";
import AvatarTypeSpecific from "src/components/Avatar/AvatarTypeSpecific";
import { AvatarSize } from "src/components/Avatar/constants/AvatarSize";
import { AnimatedPressable, Divider } from "src/components/common";
import { Caption2, Heading1 } from "src/components/common/Text";
import { IS_IOS } from "src/constants";
import { Button, Context, Interaction, Meaning } from "src/model/interaction";
import { isPusherBase, isPusherHumanOrAnimal, Pusher } from "src/model/pusher";
import { Colors } from "src/theme/Colors";
import { Size, SizeV2 } from "src/theme/Size";

import { StarButton } from "./StarButton";
import DashboardButtons from "./DashboardButtons";
import { Button as ButtonType } from "src/model/interaction";
import OccurredAt from "./OccurredAt";
import PolygonImageContainer from "src/components/common/PolygonImageContainer";

const CHECKMARK_ICON_SIZE = 35;
const CHECKMARK_BACKGROUND_FILL_SIZE = CHECKMARK_ICON_SIZE * 0.6;
// Slightly darker shade of Colors.PRIMARY
const CHECKMARK_COLOR = "#39CAD9";
const CONTROLS_CONTAINER_WIDTH = 22;

interface Props {
  index: number;
  interaction?: Interaction;
  pusherName: string;
  pushers: Pusher[];
  isLastItem: boolean;
  isSelected: boolean;
  isMultiSelectModeActive: boolean;
  avatarVisible?: boolean;
  onPress(): void;
  onLongPress(): void;
  onPusherLongPress(): void;
  onPusherPress(): void;
  onEllipsisPress(toggleAssignMeaningModal: () => void): void;
  onButtonPress(button: Button): void;
  onContextPress(context: Context): void;
  onMeaningPress(meaning: Meaning): void;
  setSelectedActivityIndex: (page: number) => void;
  setIsUpdateInteractions: (isUpdateInteractions: boolean) => void;
}

const DashboardItem: React.FC<Props> = ({
  index,
  setSelectedActivityIndex,
  setIsUpdateInteractions,
  interaction,
  pusherName,
  pushers,
  isLastItem,
  isSelected,
  isMultiSelectModeActive,
  avatarVisible,
  onPress,
  onLongPress,
  onPusherPress,
  onEllipsisPress,
  onButtonPress,
  onContextPress,
  onMeaningPress,
  onPusherLongPress,
}) => {
  const [assignPusherModalVisible, setIsAssignPusherModalVisible] =
    useState(false);
  const [assignMeaningModalVisible, setAssignMeaningModalVisible] =
    useState(false);

  const [localInteraction, setLocalInteraction] = useState(interaction);
  const [localContexts] = useState<Context[]>([
    {
      id: 1,
      text: "Modeled",
      created_at: "",
      updated_at: "",
    },
    {
      id: 2,
      text: "Observation",
      created_at: "",
      updated_at: "",
    },
    // Add more contexts if needed
  ]);

  const shouldRenderActionsMenu =
    !isMultiSelectModeActive || (isMultiSelectModeActive && isSelected);

  // When Connect interaction is assigned to a Teacher,
  // auto-assign Learner if only one Learner in Household
  const assignIfSingleLearner = () => {
    const modeledPushersIds: number[] = [];

    const householdLearners = pushers.filter(
      (p) => !p.is_hidden && isPusherHumanOrAnimal(p.name) && !p.is_human
    );

    if (householdLearners.length === 1) {
      modeledPushersIds.push(householdLearners[0].id);
    }

    return modeledPushersIds;
  };

  const truncateNote = (note: string) => {
    let arr = note.split("\n");
    if (note.split("\n").length > 2) {
      return [...arr[0], "\n", ...[arr[1]]].join("") + "...";
    } else {
      return note;
    }
  };

  //   const updatePusher = (pusher: Pusher) => {
  //     const modeledContext =
  //       localContexts.find((context) => context.text === "Modeled") || null;

  //     setLocalInteraction((prev) => ({
  //       ...prev,
  //       pusherId: pusher.id,
  //       modeledPushersIds: pusher.is_human ? assignIfSingleLearner() : [],
  //       selectedContexts:
  //         pusher.is_human && modeledContext ? [modeledContext.id] : [],
  //     }));

  //     setIsAssignPusherModalVisible(false);
  //     setIsUpdateInteractions(true);
  //   };

  //   const setIsFlagged = (isFlagged: boolean) => {
  //     Vibration.vibrate(100);
  //     setLocalInteraction((prev) => ({ ...prev, is_flagged: isFlagged }));
  //   };

  //   const onStarPress = () => {
  //     setIsFlagged(!localInteraction.is_flagged);
  //   };

  const toggleAssignMeaningModal = () => {
    setAssignMeaningModalVisible((prevState) => !prevState);
  };

  const openActionsMenu = () => {
    onEllipsisPress(toggleAssignMeaningModal);
  };

  function getControlsContainerWidth() {
    return (isMultiSelectModeActive ? 1.25 : 1) * CONTROLS_CONTAINER_WIDTH;
  }

  const renderControls = () => (
    <View
      style={{
        width: getControlsContainerWidth(),
        ...styles.controlsContainer,
      }}
    >
      {!isMultiSelectModeActive && (
        <View style={styles.starContainer}>
          <StarButton
            size={getControlsContainerWidth()}
            // isChecked={localInteraction?.is_flagged}
            onPress={() => {}}
          />
        </View>
      )}
      {shouldRenderActionsMenu && (
        <AnimatedPressable style={styles.ellipsisContainer} onPress={() => {}}>
          <EllipsisIcon width={getControlsContainerWidth()} />
        </AnimatedPressable>
      )}
    </View>
  );

  //   const renderAssign = () => (
  //     <View style={styles.assignContainer}>
  //       <SelectPusherModal
  //         visible={assignPusherModalVisible}
  //         pushers={pushers}
  //         title="Who pressed the Buttons?"
  //         secondaryButton={{
  //           text: 'NOT SURE',
  //           onPress: () => {
  //             setIsAssignPusherModalVisible(false);
  //           },
  //         }}
  //         onPusherPress={updatePusher}
  //         onHide={() => setIsAssignPusherModalVisible(false)}
  //       />
  //       {!isMultiSelectModeActive && (
  //         <AnimatedPressable
  //           style={styles.assignTouchable}
  //           onPress={() => {
  //             setSelectedActivityIndex(index);
  //             setIsAssignPusherModalVisible(true);
  //           }}>
  //           <Heading1 v2 color={Colors.PRIMARY}>
  //             ASSIGN
  //           </Heading1>
  //         </AnimatedPressable>
  //       )}
  //     </View>
  //   );

  const containerBackgroundStyle = {
    backgroundColor: isSelected
      ? Colors.PRIMARY_TRANSPARENT_LIGHT
      : Colors.WHITE,
  };
  const sampleButtons: ButtonType[] = [
    {
      id: 1,
      text: "FOOD",
      audio_id: null,
      board_id: 0,
      button_concept_id: null,
      button_presses: 0,
      created_at: "",
      introduced_at: "",
      is_hidden: false,
      normalized_word: "",
      note: "",
      origin: "",
      word: "",
      updated_at: "",
      webhook_url: "",
    },
    {
      id: 2,
      text: "New Buttons ",
      audio_id: null,
      board_id: 0,
      button_concept_id: null,
      button_presses: 0,
      created_at: "",
      introduced_at: "",
      is_hidden: false,
      normalized_word: "",
      note: "",
      origin: "",
      word: "",
      updated_at: "",
      webhook_url: "",
    },
    // {
    //   id: 3,
    //   text: "New Buttons ID-70AF",
    //   audio_id: null,
    //   board_id: 0,
    //   button_concept_id: null,
    //   button_presses: 0,
    //   created_at: "",
    //   introduced_at: "",
    //   is_hidden: false,
    //   normalized_word: "",
    //   note: "",
    //   origin: "",
    //   word: "",
    //   updated_at: "",
    //   webhook_url: "",
    // },
    // {
    //   id: 4,
    //   text: "New Buttons ID-70AF",
    //   audio_id: null,
    //   board_id: 0,
    //   button_concept_id: null,
    //   button_presses: 0,
    //   created_at: "",
    //   introduced_at: "",
    //   is_hidden: false,
    //   normalized_word: "",
    //   note: "",
    //   origin: "",
    //   word: "",
    //   updated_at: "",
    //   webhook_url: "",
    // },
  ];

  const handleButtonPress = (button: ButtonType) => {
    console.log("Button pressed:", button);
  };

  return (
    <>
      <AnimatedPressable
        style={[containerBackgroundStyle, styles.container]}
        onPress={onPress}
        onLongPress={onLongPress}
      >
        <View style={styles.avatarContainer}>
          {/* <AvatarTypeSpecific name={"H"} pushers={[]} size={70} /> */}
          <PolygonImageContainer
            imageLoaded={true}
            // intialStyle={styles.polygonIntailContainer}
            isIntialPage
            size={60}
          />
        </View>
        <View style={styles.detailsContainer}>
          <OccurredAt datetime={"Jan 18th | 2.30 PM"} />
          <View>
            <DashboardButtons
              buttons={sampleButtons}
              onButtonPress={onButtonPress}
            />
          </View>
        </View>
        {/* {isPusherBase(pusherName) && renderAssign()} */}
        {renderControls()}
      </AnimatedPressable>
    </>
  );
};
export default DashboardItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#0000001A",
  },
  avatarContainer: {
    marginLeft: SizeV2.M,
    marginVertical: SizeV2.L,
  },
  detailsContainer: {
    marginTop: SizeV2.M,
    marginLeft: SizeV2.M,
    marginBottom: SizeV2.L,
    flex: 1,
  },
  controlsContainer: {
    marginTop: SizeV2.XL,
    marginRight: SizeV2.L,
    marginLeft: SizeV2.M,
    justifyContent: "space-between",
    height: SizeV2.X4_L,
  },
  ellipsisContainer: {
    height: SizeV2.L,
    justifyContent: "center",
  },
  assignContainer: {
    marginTop: SizeV2.XL,
    borderRightWidth: 1,
    borderColor: Colors.GREY,
  },
  assignTouchable: {
    height: SizeV2.L,
    justifyContent: "center",
    paddingHorizontal: SizeV2.M,
  },
  starContainer: {
    height: SizeV2.L,
    justifyContent: "center",
  },
  checkmarkContainer: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  checkmarkBackgroundFillView: {
    position: "absolute",
    height: CHECKMARK_BACKGROUND_FILL_SIZE,
    width: CHECKMARK_BACKGROUND_FILL_SIZE,
    backgroundColor: Colors.WHITE,
  },
  note: {
    marginLeft: Size.X2_S,
    height: 28,
  },
});
