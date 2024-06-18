type TextComponentName =
  | 'title1'
  | 'title2'
  | 'headline'
  | 'headlineLight'
  | 'body'
  | 'caption1'
  | 'caption2';

type TextComponentNameV2 =
  | 'title1'
  | 'title2'
  | 'headline'
  | 'body'
  | 'caption1'
  | 'caption2'
  | 'heading1'
  | 'heading2';

interface TextComponentSize {
  fontSize: number;
  lineHeight: number;
}

export const TextSize: Record<TextComponentName, TextComponentSize> = {
  title1: {
    fontSize: 30,
    lineHeight: 36,
  },
  title2: {
    fontSize: 50,
    lineHeight: 60,
  },
  headline: {
    fontSize: 20,
    lineHeight: 24,
  },
  headlineLight: {
    fontSize: 18,
    lineHeight: 24,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
  },
  caption1: {
    fontSize: 14,
    lineHeight: 17,
  },
  caption2: {
    fontSize: 12,
    lineHeight: 12,
  },
};

export const TextSizeV2: Record<TextComponentNameV2, TextComponentSize> = {
  title1: {
    fontSize: 24,
    lineHeight: 32,
  },
  title2: {
    fontSize: 18,
    lineHeight: 26,
  },
  headline: {
    fontSize: 16,
    lineHeight: 24,
  },
  body: {
    fontSize: 15,
    lineHeight: 22,
  },
  caption1: {
    fontSize: 14,
    lineHeight: 17,
  },
  caption2: {
    fontSize: 12,
    lineHeight: 14,
  },
  heading1: {
    fontSize: 13,
    lineHeight: 15,
  },
  heading2: {
    fontSize: 10,
    lineHeight: 12,
  },
};

export enum Font {
  LIGHT = 'Lato-Light',
  REGULAR = 'Lato-Regular',
  MEDIUM = 'Lato-Medium',
  SEMIBOLD = 'Lato-SemiBold',
  BOLD = 'Lato-Bold',
  BLACK = 'Lato-Black',
}
