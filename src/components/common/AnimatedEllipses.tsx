import React from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

import { Colors } from 'src/theme/Colors';
import { SizeV2 } from 'src/theme/Size';
import { TextSizeV2 } from 'src/theme/Text';

import { Title1 } from './Text';

const OPACITY_TRANSITION_DURATION = 800;

interface Props {
  text?: string;
  color?: Colors;
  marginBottom?: SizeV2;
}

const AnimatedEllipses: React.FC<Props> = ({
  text = 'Loading',
  color = Colors.PRIMARY_DARK,
  marginBottom,
}) => {
  const opacityDot1 = useSharedValue(0);
  const opacityDot2 = useSharedValue(0);
  const opacityDot3 = useSharedValue(0);

  opacityDot1.value = withRepeat(
    withSequence(
      withTiming(1, { duration: OPACITY_TRANSITION_DURATION }),
      withDelay(
        OPACITY_TRANSITION_DURATION * 2,
        withTiming(0, { duration: OPACITY_TRANSITION_DURATION }),
      ),
    ),
    -1,
  );

  opacityDot2.value = withRepeat(
    withSequence(
      withDelay(
        OPACITY_TRANSITION_DURATION,
        withTiming(1, { duration: OPACITY_TRANSITION_DURATION }),
      ),
      withDelay(
        OPACITY_TRANSITION_DURATION,
        withTiming(0, { duration: OPACITY_TRANSITION_DURATION }),
      ),
    ),
    -1,
  );

  opacityDot3.value = withRepeat(
    withSequence(
      withDelay(
        OPACITY_TRANSITION_DURATION * 2,
        withTiming(1, { duration: OPACITY_TRANSITION_DURATION }),
      ),
      withTiming(0, { duration: OPACITY_TRANSITION_DURATION }),
    ),
    -1,
  );

  const dotFontSize = TextSizeV2.title1.fontSize * 1.8;
  const dotTopOffset = SizeV2.X2_S;

  const dotsSharedStyles = {
    color,
    fontSize: dotFontSize,
    top: dotTopOffset,
  };

  const animatedStylesDot1 = useAnimatedStyle(() => ({
    ...dotsSharedStyles,
    opacity: opacityDot1.value,
  }));

  const animatedStylesDot2 = useAnimatedStyle(() => ({
    ...dotsSharedStyles,
    opacity: opacityDot2.value,
  }));

  const animatedStylesDot3 = useAnimatedStyle(() => ({
    ...dotsSharedStyles,
    opacity: opacityDot3.value,
  }));

  return (
    <View style={{ marginBottom, ...styles.container }}>
      <Title1 color={color}>{text}</Title1>
      <Animated.Text style={animatedStylesDot1}>.</Animated.Text>
      <Animated.Text style={animatedStylesDot2}>.</Animated.Text>
      <Animated.Text style={animatedStylesDot3}>.</Animated.Text>
    </View>
  );
};

export default AnimatedEllipses;

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'flex-end' },
});
