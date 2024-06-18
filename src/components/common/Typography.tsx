import React from 'react';
import {
  Text,
  StyleSheet,
  TextStyle,
  TextProps,
  StyleProp,
} from 'react-native';

import { Color } from 'src/theme/Color';
import { Size, SizeV2 } from 'src/theme/Size';

export enum FontArizona {
  REGULAR = 'ABCArizonaSans-Regular',
  BOLD = 'ABCArizonaSans-Bold',
}

const TextAlign = {
  center: 'center',
  left: 'left',
  right: 'right',
};

interface Props extends TextProps {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  color?: Color;
  marginBottom?: Size | SizeV2;
  letterSpacing?: number;
  underline?: boolean;
  numberOfLines?: number;
  align?: keyof typeof TextAlign;
}

export const BasicText: React.FC<Props> = (props) => {
  const {
    children,
    color = Color.BLACK_800,
    marginBottom,
    style,
    letterSpacing,
    underline,
    numberOfLines,
    align = 'left',
    ...rest
  } = props;

  const textDecorationLine = underline ? 'underline' : undefined;

  return (
    <Text
      allowFontScaling={false}
      numberOfLines={numberOfLines}
      {...rest}
      style={[
        style,
        {
          color,
          marginBottom,
          letterSpacing,
          textDecorationLine,
          textAlign: align,
        },
      ]}>
      {children}
    </Text>
  );
};

export const Headline1: React.FC<Props> = ({ style, ...restProps }) => (
  <BasicText style={[styles.headline1, style]} {...restProps} />
);

export const Headline2: React.FC<Props> = ({ style, ...restProps }) => (
  <BasicText style={[styles.headline2, style]} {...restProps} />
);

export const ButtonLabel: React.FC<Props> = ({ style, ...restProps }) => (
  <BasicText style={[styles.buttonLabel, style]} {...restProps} />
);

export const NavigationTitle: React.FC<Props> = ({ style, ...restProps }) => (
  <BasicText style={[styles.navigationTitle, style]} {...restProps} />
);

export const BodyBold: React.FC<Props> = ({ style, ...restProps }) => (
  <BasicText style={[styles.bodyBold, style]} {...restProps} />
);

export const BodySmallBold: React.FC<Props> = ({ style, ...restProps }) => (
  <BasicText style={[styles.bodySmallBold, style]} {...restProps} />
);

export const CaptionBold: React.FC<Props> = ({ style, ...restProps }) => (
  <BasicText style={[styles.captionBold, style]} {...restProps} />
);

export const Body: React.FC<Props> = ({ style, ...restProps }) => (
  <BasicText style={[styles.body, style]} {...restProps} />
);

export const BodySmall: React.FC<Props> = ({ style, ...restProps }) => (
  <BasicText style={[styles.bodySmall, style]} {...restProps} />
);

export const Caption: React.FC<Props> = ({ style, ...restProps }) => (
  <BasicText style={[styles.caption, style]} {...restProps} />
);

export const CaptionSmall: React.FC<Props> = ({ style, ...restProps }) => (
  <BasicText style={[styles.captionSmall, style]} {...restProps} />
);

const styles = StyleSheet.create({
  headline1: {
    fontSize: 30,
    lineHeight: 42,
    fontFamily: FontArizona.BOLD,
  },
  headline2: {
    fontSize: 26,
    lineHeight: 36,
    fontFamily: FontArizona.BOLD,
  },
  buttonLabel: {
    fontSize: 26,
    lineHeight: 39,
    fontFamily: FontArizona.REGULAR,
  },
  navigationTitle: {
    fontSize: 23,
    lineHeight: 34,
    fontFamily: FontArizona.BOLD,
    letterSpacing: 1,
  },
  bodyBold: {
    fontSize: 18,
    lineHeight: 27,
    fontFamily: FontArizona.BOLD,
  },
  bodySmallBold: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: FontArizona.BOLD,
  },
  captionBold: {
    fontSize: 14,
    lineHeight: 16,
    fontFamily: FontArizona.BOLD,
  },
  body: {
    fontSize: 18,
    lineHeight: 27,
    fontFamily: FontArizona.REGULAR,
  },
  bodySmall: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: FontArizona.REGULAR,
  },
  caption: {
    fontSize: 14,
    lineHeight: 16,
    fontFamily: FontArizona.REGULAR,
  },
  captionSmall: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: FontArizona.REGULAR,
  },
});
