import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import { CheckCircleSolidIcon } from 'src/assets/icons';
import { images } from 'src/assets/images';
import { Caption1, Title1 } from 'src/components/common/Text';
import { Colors } from 'src/theme/Colors';
import { SizeV2 } from 'src/theme/Size';

interface Props {
  successful?: boolean;
}

interface Assets {
  Icon: React.FC<any> | undefined;
  title: string;
  subtitle: string;
  imageSource: number;
}

export const ConnectedToBaseNetworkStatus: React.FC<Props> = ({
  successful,
}) => {
  const assets: Assets = successful
    ? {
        Icon: CheckCircleSolidIcon,
        title: 'Connected!',
        subtitle: "We found your Base and it's ready for setup.",
        imageSource: images.baseRegistration.phoneWithLogo,
      }
    : {
        Icon: undefined,
        title: 'Connecting failed',
        subtitle: 'We failed to connect to your Base.',
        imageSource: images.baseRegistration.base,
      };

  const { Icon, title, subtitle, imageSource } = assets;

  return (
    <View style={styles.container}>
      {Icon && <Icon marginBottom={SizeV2.M} />}
      <Title1 v2 color={Colors.PRIMARY_DARK} marginBottom={SizeV2.S}>
        {title}
      </Title1>
      <Caption1 v2 marginBottom={SizeV2.X4_L}>
        {subtitle}
      </Caption1>
      <Image source={imageSource} resizeMode="contain" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: SizeV2.L,
    width: '100%',
    alignItems: 'center',
  },
});
