import { AddPusherGuide } from "../../model/household";

export const getDisabledLabels = (addPusherGuide?: AddPusherGuide) => {
  if (!addPusherGuide) {
    return [];
  }

  let labels = [];

  if (
    addPusherGuide === AddPusherGuide.LEARNER ||
    addPusherGuide === AddPusherGuide.BOTH
  ) {
    labels.push("Teacher");
  }

  if (addPusherGuide === AddPusherGuide.TEACHER) {
    labels.push("Learner");
  }

  return labels;
};
