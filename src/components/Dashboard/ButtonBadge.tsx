import React, { ReactNode } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

import { AnimatedPressable } from "src/components/common";
import { Heading2, Title2 } from "src/components/common/Text";
import { Colors } from "src/theme/Colors";
import { SizeV2 } from "src/theme/Size";
import { Font } from "src/theme/Text";
import { FontArizona } from "../common/Typography";

export enum ButtonVariant {
  BIG = "big",
  REGULAR = "regular",
  SMALL = "small",
}

export type Props = {
  variant?: ButtonVariant;
  backgroundColor?: Colors | string;
  color?: Colors | string;
  onPress?: () => void;
  onLongPress?: () => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
} & ({ icon?: never; title: string } | { icon: ReactNode; title?: never });

export const ButtonBadge: React.FC<Props> = (props) => {
  const {
    variant = ButtonVariant.BIG,
    onPress,
    onLongPress,
    color = Colors.WHITE,
    backgroundColor = Colors.PRIMARY,
    containerStyle,
    onPressIn,
    onPressOut,
    disabled,
  } = props;

  const renderTitle = (title: string | undefined) => {
    switch (variant) {
      case ButtonVariant.BIG:
        return (
          <Title2 v2 color={color} style={styles.regularFont}>
            {title}
          </Title2>
        );

      case ButtonVariant.REGULAR:
        return (
          <Title2 v2 color={color} style={styles.regularFont}>
            {title}
          </Title2>
        );

      case ButtonVariant.SMALL:
        return (
          <Heading2 v2 color={color} style={styles.regularFont}>
            {title}
          </Heading2>
        );
    }
  };

  return (
    <AnimatedPressable
      disabled={disabled}
      onPress={onPress}
      onLongPress={onLongPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      style={[
        styles.container,
        containerStyles?.[variant],
        { backgroundColor },
        containerStyle,
      ]}
    >
      {props.icon ? (
        <View style={styles.icon}>{props.icon}</View>
      ) : (
        renderTitle(props.title)
      )}
    </AnimatedPressable>
  );
};

const containerStyles = StyleSheet.create({
  // eslint-disable-next-line react-native/no-unused-styles
  [ButtonVariant.BIG]: {
    borderRadius: SizeV2.XS,
    paddingHorizontal: SizeV2.L,
    height: SizeV2.X2_L,
    backgroundColor: Colors.GREEN_NEW,
  },
  // eslint-disable-next-line react-native/no-unused-styles
  [ButtonVariant.REGULAR]: {
    borderRadius: SizeV2.XS,
    paddingHorizontal: SizeV2.S,
    paddingVertical: SizeV2.X2_S,
    backgroundColor: Colors.GREEN_NEW,
  },
  // eslint-disable-next-line react-native/no-unused-styles
  [ButtonVariant.SMALL]: {
    borderRadius: 20,
    padding: SizeV2.X2_S,
    backgroundColor: Colors.GREEN_NEW,
  },
});

const styles = StyleSheet.create({
  icon: { flex: 1, justifyContent: "center" },
  container: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 5,
    paddingHorizontal: SizeV2.S,
    paddingVertical: SizeV2.X1_S,
    backgroundColor: "#E5F4F5",
    fontFamily: FontArizona.BOLD,
  },
  regularFont: { fontFamily: FontArizona.BOLD, color: Colors.BLUE_NEW },
});
