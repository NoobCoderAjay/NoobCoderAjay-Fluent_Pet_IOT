import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';

import { Colors } from 'src/theme/Colors';
import { Size, SizeV2 } from 'src/theme/Size';
import { Font, TextSize, TextSizeV2 } from 'src/theme/Text';

const TextAlign = {
  center: 'center',
  left: 'left',
  right: 'right',
};

interface Props {
  children?: React.ReactNode;
  // temporary prop: remove after all text components have been updated to v2
  v2?: boolean;
  style?: TextStyle;
  color?: Colors | string;
  marginBottom?: Size | SizeV2;
  letterSpacing?: number;
  underline?: boolean;
  numberOfLines?: number;
  align?: keyof typeof TextAlign;
}

const BasicText: React.FC<Props> = ({
  children,
  color = Colors.BLACK,
  marginBottom,
  style,
  letterSpacing,
  underline,
  numberOfLines,
  align = 'left',
}) => {
  const textDecorationLine = underline ? 'underline' : 'none';

  return (
    <Text
      allowFontScaling={false}
      numberOfLines={numberOfLines}
      style={{
        color,
        marginBottom,
        letterSpacing,
        textDecorationLine,
        textAlign: align,
        ...style,
      }}>
      {children}
    </Text>
  );
};

export const Title1: React.FC<Props> = (props) => {
  const title1Styles = props.v2 ? styles.title1V2 : styles.title1;

  return (
    <BasicText {...props} style={{ ...title1Styles, ...props.style }}>
      {props.children}
    </BasicText>
  );
};

export const Title2: React.FC<Props> = (props) => {
  const title2Styles = props.v2 ? styles.title2V2 : styles.title2;

  return (
    <BasicText {...props} style={{ ...title2Styles, ...props.style }}>
      {props.children}
    </BasicText>
  );
};

export const Headline: React.FC<Props> = (props) => {
  const headlineStyles = props.v2 ? styles.headlineV2 : styles.headline;

  return (
    <BasicText {...props} style={{ ...headlineStyles, ...props.style }}>
      {props.children}
    </BasicText>
  );
};

export const HeadlineLight: React.FC<Props> = (props) => {
  const headlineLightStyles = props.v2
    ? styles.headlineLightV2
    : styles.headlineLight;

  return (
    <BasicText {...props} style={{ ...headlineLightStyles, ...props.style }}>
      {props.children}
    </BasicText>
  );
};

export const Body: React.FC<Props> = (props) => {
  const bodyStyles = props.v2 ? styles.bodyV2 : styles.body;

  return (
    <BasicText {...props} style={{ ...bodyStyles, ...props.style }}>
      {props.children}
    </BasicText>
  );
};

export const Caption1: React.FC<Props> = (props) => {
  const caption1Styles = props.v2 ? styles.caption1V2 : styles.caption1;

  return (
    <BasicText {...props} style={{ ...caption1Styles, ...props.style }}>
      {props.children}
    </BasicText>
  );
};

export const Caption2: React.FC<Props> = (props) => {
  const caption2Styles = props.v2 ? styles.caption2V2 : styles.caption2;

  return (
    <BasicText {...props} style={{ ...caption2Styles, ...props.style }}>
      {props.children}
    </BasicText>
  );
};

// v2

export const BodyBold: React.FC<Props> = (props) => (
  <BasicText {...props} style={{ ...styles.bodyBold, ...props.style }}>
    {props.children}
  </BasicText>
);

export const Heading1: React.FC<Props> = (props) => (
  <BasicText {...props} style={{ ...styles.heading1, ...props.style }}>
    {props.children}
  </BasicText>
);

export const Heading2: React.FC<Props> = (props) => (
  <BasicText {...props} style={{ ...styles.heading2, ...props.style }}>
    {props.children}
  </BasicText>
);

const styles = StyleSheet.create({
  title1: {
    fontSize: TextSize.title1.fontSize,
    lineHeight: TextSize.title1.lineHeight,
    fontFamily: Font.BOLD,
  },
  title2: {
    fontSize: TextSize.title2.fontSize,
    lineHeight: TextSize.title2.lineHeight,
    fontFamily: Font.BOLD,
  },
  headline: {
    fontSize: TextSize.headline.fontSize,
    lineHeight: TextSize.headline.lineHeight,
    fontFamily: Font.REGULAR,
  },
  headlineLight: {
    fontSize: TextSize.headlineLight.fontSize,
    lineHeight: TextSize.headlineLight.lineHeight,
    fontFamily: Font.LIGHT,
  },
  body: {
    fontSize: TextSize.body.fontSize,
    lineHeight: TextSize.body.lineHeight,
    fontFamily: Font.REGULAR,
  },
  caption1: {
    fontSize: TextSize.caption1.fontSize,
    lineHeight: TextSize.caption1.lineHeight,
    fontFamily: Font.REGULAR,
  },
  caption2: {
    fontSize: TextSize.caption2.fontSize,
    lineHeight: TextSize.caption2.lineHeight,
    fontFamily: Font.BLACK,
  },

  // v2
  title1V2: {
    fontSize: TextSizeV2.title1.fontSize,
    lineHeight: TextSizeV2.title1.lineHeight,
    fontFamily: Font.BOLD,
  },
  title2V2: {
    fontSize: TextSizeV2.title2.fontSize,
    lineHeight: TextSizeV2.title2.lineHeight,
    fontFamily: Font.BOLD,
    alignItems: 'center', //Centered vertically
  },
  headlineV2: {
    fontSize: TextSizeV2.headline.fontSize,
    lineHeight: TextSizeV2.headline.lineHeight,
    fontFamily: Font.REGULAR,
    letterSpacing: 2,
  },
  headlineLightV2: {
    fontSize: TextSizeV2.headline.fontSize,
    lineHeight: TextSizeV2.headline.lineHeight,
    fontFamily: Font.LIGHT,
  },
  bodyV2: {
    fontSize: TextSizeV2.body.fontSize,
    lineHeight: TextSizeV2.body.lineHeight,
    fontFamily: Font.REGULAR,
  },
  bodyBold: {
    fontSize: TextSizeV2.body.fontSize,
    lineHeight: TextSizeV2.body.lineHeight,
    fontFamily: Font.BOLD,
  },
  caption1V2: {
    fontSize: TextSizeV2.caption1.fontSize,
    lineHeight: TextSizeV2.caption1.lineHeight,
    fontFamily: Font.MEDIUM,
  },
  caption2V2: {
    fontSize: TextSizeV2.caption2.fontSize,
    lineHeight: TextSizeV2.caption2.lineHeight,
    fontFamily: Font.REGULAR,
  },
  heading1: {
    fontSize: TextSizeV2.heading1.fontSize,
    lineHeight: TextSizeV2.heading1.lineHeight,
    fontFamily: Font.BOLD,
    letterSpacing: 0.1,
  },
  heading2: {
    fontSize: TextSizeV2.heading2.fontSize,
    lineHeight: TextSizeV2.heading2.lineHeight,
    fontFamily: Font.SEMIBOLD,
    letterSpacing: 0.1,
  },
});
