import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

import { Colors } from 'src/theme/Colors';
import { Size } from 'src/theme/Size';

interface Props {
  step: number;
  outOf: number;
  height?: Size;
  progressColor?: Colors;
  backgroundColor?: Colors;
}

const ProgressBar: React.FC<Props> = ({
  step,
  outOf,
  height = Size.XS,
  progressColor = Colors.PRIMARY,
  backgroundColor = Colors.GREY_LIGHT,
}) => {
  const containerStyle = {
    ...styles.container,
    maxHeight: height,
  };

  const activeStepStyle: ViewStyle = {
    width: `${(1 / outOf) * 100}%`,
    borderRightWidth: 2,
    borderRightColor: backgroundColor,
    backgroundColor: progressColor,
    height,
  };

  const lastActiveStepStyle: ViewStyle = {
    ...activeStepStyle,
    width: '100%',
  };

  const inactiveStepStyle: ViewStyle = {
    width: '100%',
    backgroundColor,
    height,
  };

  const isLastStep = (idx: number) => idx === outOf - 1;

  return (
    <View style={containerStyle}>
      {[...Array(step).keys()].map((_, idx) =>
        isLastStep(idx) ? (
          <View key={idx} style={lastActiveStepStyle} />
        ) : (
          <View key={idx} style={activeStepStyle} />
        ),
      )}
      <View style={inactiveStepStyle} />
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
});
