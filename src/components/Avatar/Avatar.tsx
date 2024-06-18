import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import FastImage from 'react-native-fast-image';

import { Colors } from 'src/theme/Colors';
import { Size } from 'src/theme/Size';

import AnimatedPressable from '../common/AnimatedPressable';
import { Caption1, Headline } from '../common/Text';
import Badge from './Badge';
import { AvatarSize } from './constants/AvatarSize';
import { AvatarBadge } from './types';

export interface AvatarProps {
  name: string | null;
  size?: number;
  imageUri?: string;
  icon?: React.ReactNode;
  badge?: AvatarBadge;
  selectable?: boolean;
  isSelected?: boolean;
  textColor?: Colors;
  smallText?: boolean;
  backgroundColor?: Colors;
  style?: ViewStyle;
  onPress?(): void;
  onLongPress?(): void;
}

const Avatar: React.FC<AvatarProps> = ({
  name,
  imageUri,
  size = AvatarSize.REGULAR,
  icon,
  badge,
  selectable,
  isSelected = true,
  textColor = selectable && !isSelected ? Colors.SECONDARY_LIGHT : Colors.BLACK,
  smallText,
  backgroundColor = Colors.PRIMARY,
  style,
  onPress,
  onLongPress,
}) => {
  const opacity = selectable && !isSelected ? 0.2 : 1;

  const TextComponent = smallText ? Caption1 : Headline;

  return (
    <>
      <AnimatedPressable
        disabled={!onPress}
        onPress={onPress}
        onLongPress={onLongPress}
        style={{
          width: size,
          height: size,
          ...styles.container,
          ...style,
        }}>
        {!imageUri ? (
          <View
            style={{
              width: size,
              height: size,
              borderRadius: size / 2,
              opacity,
              backgroundColor,
              ...styles.initialsContainer,
            }}>
            {icon}
            {Boolean(name) && (
              <TextComponent
                align="center"
                color={textColor}
                style={{ marginTop: icon ? Size.X2_S : undefined }}>
                {name}
              </TextComponent>
            )}
          </View>
        ) : (
          <FastImage
            style={{
              width: size,
              height: size,
              opacity,
              borderRadius: size / 2,
            }}
            source={{ uri: imageUri }}
          />
        )}
      </AnimatedPressable>
      {badge && <Badge content={badge.content} color={badge.color} />}
    </>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  initialsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
