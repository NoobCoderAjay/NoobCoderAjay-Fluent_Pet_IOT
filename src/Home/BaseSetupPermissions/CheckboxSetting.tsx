import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';

import { ErrorMessage } from 'src/components/common';
import { Checkbox } from 'src/components/common/Form';
import { Body, Caption2, HeadlineLight } from 'src/components/common/Text';
import { SizeV2 } from 'src/theme/Size';
import { TextSize } from 'src/theme/Text';

export interface CheckboxSettingProps {
  isVisible: boolean;
  isSelected: boolean;
  title: string;
  description: string;
  isOptional?: boolean;
  error?: {
    title: string;
    message?: string;
  };
  onPress(): void;
}

const CheckboxSetting: React.FC<CheckboxSettingProps> = ({
  isVisible,
  isSelected,
  title,
  description,
  isOptional = false,
  error,
  onPress,
}) => {
  if (!isVisible) {
    return null;
  }

  const containerStyle = {
    marginBottom: error ? SizeV2.X2_S : 0,
    opacity: isSelected || error ? 0.5 : 1,
  };

  return (
    <Pressable
      onPress={!isSelected ? onPress : undefined}
      style={styles.touchableWrapper}>
      <View style={[styles.container, containerStyle]}>
        <Checkbox disabled value={isSelected} style={styles.checkbox} />
        <View style={styles.textContainer}>
          <Body v2 marginBottom={SizeV2.S}>
            {title}
            <HeadlineLight style={{ fontSize: TextSize.body.fontSize }}>
              {isOptional ? ' (Optional)' : ' (Required)'}
            </HeadlineLight>
          </Body>
          <Caption2 v2>{description}</Caption2>
        </View>
      </View>
      {error && <ErrorMessage title={error.title} message={error?.message} />}
    </Pressable>
  );
};

export default CheckboxSetting;

const styles = StyleSheet.create({
  touchableWrapper: {
    marginBottom: SizeV2.L,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  checkbox: {
    marginTop: SizeV2.XS,
  },
  textContainer: {
    flex: 1,
    marginLeft: SizeV2.S,
  },
});
