import { Dimensions, ScaledSize } from 'react-native';

const dimensions: ScaledSize = Dimensions.get('screen');

export const SCREEN_WIDTH = dimensions.width;
export const SCREEN_HEIGHT = dimensions.height;

export enum ViewportSize {
  VERY_SMALL = 320, // e.g. iPhone 5
  SMALL = 360, // e.g. Samsung Galaxy S9
  MEDIUM = 375, // e.g. iPhone 8
  LARGE = 414, // e.g. iPhone XS Max
}

export enum Size {
  X3_S = 2,
  X2_S = 5,
  XS = 10,
  S = 16,
  M = 20,
  L = 24,
  XL = 32,
  X2_L = 36,
  X3_L = 40,
  X4_L = 56,
  //
  BORDER_RADIUS = 4,
  TEXT_INPUT_HEIGHT = 48,
  BUTTON_HEIGHT = 48,
  BUTTON_WIDTH = 260,
  BUTTON_LETTER_SPACING = 2,
}

export enum SizeV2 {
  X3_S = 2,
  X2_S = 4,
  XS = 8,
  S = 12,
  M = 18,
  L = 24,
  XL = 30,
  X2_L = 40,
  X3_L = 48,
  X4_L = 56,
  X5_L = 80,
  X6_L = 100,
}

export const EXTRA_SCROLL_HEIGHT = 140;
