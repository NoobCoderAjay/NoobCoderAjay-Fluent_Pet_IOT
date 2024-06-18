import React from "react";
import { View, StyleSheet } from "react-native";
import { Colors } from "src/theme/Colors";

interface ScreenIndicatorsProps {
  numScreens: number;
  activeIndex: number;
}

const ScreenIndicators: React.FC<ScreenIndicatorsProps> = ({
  numScreens,
  activeIndex,
}) => {
  const indicators = Array.from({ length: numScreens }, (_, index) => (
    <View
      key={index}
      style={[
        styles.indicator,
        index === activeIndex ? styles.activeIndicator : null,
      ]}
    />
  ));

  return <View style={styles.container}>{indicators}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#BDEEFD",
    marginHorizontal: 5,
  },
  activeIndicator: {
    backgroundColor: Colors.PRIMARY_DARK,
  },
});

export default ScreenIndicators;
