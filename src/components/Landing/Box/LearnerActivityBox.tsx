import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AvatarTypeSpecific from "src/components/Avatar/AvatarTypeSpecific";
import { FontArizona } from "src/components/common/Typography";
import { SizeV2 } from "src/theme/Size";

// import { useBoardState } from "../../../hooks";

const LearnerActivityBox = () => {
  // const { boardQuery } = useBoardState({
  //   initialState: { selectedButtons: [] },
  // });
  // const boardData = boardQuery.data;
  return (
    <View style={styles.thirdBoxContainer}>
      <View style={styles.activityContainer}>
        <Text style={styles.activityText}>Learner Activity</Text>

        <View style={styles.activityDetails}>
          <AvatarTypeSpecific name={"H"} pushers={[]} size={40} />
          <View style={styles.activityTextContainer}>
            <Text style={styles.recentText}>Recent Presses</Text>
            {/* <View style={styles.buttonContainer}>
              {boardData?.active_buttons
                ?.slice(0, 4)
                .map(
                  (
                    button: {
                      text:
                        | string
                        | number
                        | boolean
                        | React.ReactElement<
                            any,
                            string | React.JSXElementConstructor<any>
                          >
                        | Iterable<React.ReactNode>
                        | React.ReactPortal
                        | null
                        | undefined;
                    },
                    index: React.Key | null | undefined
                  ) => (
                    <TouchableOpacity key={index}>
                      <View style={styles.switch}>
                        <View style={styles.innerCircle}>
                      <Text style={styles.innerText}>{button.value}</Text>
                    </View>
                        <Text style={styles.outerText}>{button.text}</Text>
                      </View>
                    </TouchableOpacity>
                  )
                )}
            </View> */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity>
                <View style={styles.switch}>
                  <View style={styles.innerCircle}>
                    <Text style={styles.innerText}>1</Text>
                  </View>
                  <Text style={styles.outerText}>Hello</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LearnerActivityBox;

const styles = StyleSheet.create({
  thirdBoxContainer: {
    backgroundColor: "#FFFFFF",
    borderColor: "#D9D9D9",
    borderWidth: 1,
    position: "relative",
    marginTop: SizeV2.S,
    paddingHorizontal: SizeV2.S,
    borderRadius: 20,
    overflow: "hidden",
    flexDirection: "row",
  },
  activityContainer: {
    flex: 1,
    padding: SizeV2.S,
  },
  activityText: {
    fontSize: SizeV2.M,
    fontFamily: FontArizona.BOLD,
    lineHeight: SizeV2.XL,
    textAlign: "left",
    color: "#006271",
  },
  activityDetails: {
    marginTop: SizeV2.S,
    flexDirection: "row",
    alignItems: "center",
  },
  activityTextContainer: {
    flexDirection: "column",
    marginLeft: SizeV2.S,
  },
  recentText: {
    color: "#006271",
    fontSize: SizeV2.S,
    fontFamily: FontArizona.BOLD,
    marginLeft: 10,
    marginBottom: 5,
  },
  switch: {
    flexDirection: "row",
    alignItems: "center",
    width: "auto",
    height: 38,
    borderRadius: 20,
    backgroundColor: "#FCD0FC",
    justifyContent: "space-between",
    paddingHorizontal: SizeV2.S,
    paddingVertical: SizeV2.XS,
    marginLeft: 5,
  },
  innerCircle: {
    width: SizeV2.XL,
    height: SizeV2.XL,
    borderRadius: SizeV2.XL / 2,
    backgroundColor: "#FFFFFF6A",
    justifyContent: "center",
    alignItems: "center",
  },
  outerText: {
    fontSize: 10,
    color: "#710071",
    fontFamily: FontArizona.BOLD,
  },
  innerText: {
    fontSize: SizeV2.S,
    color: "#333333",
    fontFamily: FontArizona.BOLD,
  },
  buttonContainer: { flexDirection: "row" },
});
