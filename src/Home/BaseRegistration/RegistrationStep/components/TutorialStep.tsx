import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import { SupportLink } from 'src/components/common';
import { Body, Title1 } from 'src/components/common/Text';
import { Colors } from 'src/theme/Colors';
import { SCREEN_WIDTH, SizeV2, ViewportSize } from 'src/theme/Size';

import { Steps } from '../../constants';

export interface TutorialStepProps {
  step: number;
  title: string;
  body: string;
  imageSource: number;
}

export const TutorialStep: React.FC<TutorialStepProps> = ({
  step,
  title,
  body,
  imageSource,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Title1 v2 color={Colors.PRIMARY_DARK} marginBottom={SizeV2.S}>
          {title}
        </Title1>
        <Body v2>{body}</Body>
        {step === Steps.WELCOME_GUIDE && (
          <View>
            <SupportLink
              linkName="onboardingVideo"
              iconName="video-camera"
              title="Tap here for an end-to-end onboarding video"
            />
            <SupportLink linkName="home" />
          </View>
        )}
      </View>
      <Image key={imageSource} source={imageSource} resizeMode="contain" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  textContainer: {
    flex: 1,
    marginBottom:
      SCREEN_WIDTH <= ViewportSize.MEDIUM ? SizeV2.X4_L : SizeV2.X5_L,
  },
});
