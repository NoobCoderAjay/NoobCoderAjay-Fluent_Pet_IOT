import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Body, Caption1 } from 'src/components/common/Text';
import { Colors } from 'src/theme/Colors';
import { SizeV2 } from 'src/theme/Size';
import { Font } from 'src/theme/Text';

interface Props {
  screenTitle: string;
  screenSubtitle?: string;
}

const HeaderWithSubtitle: React.FC<Props> = ({
  screenTitle,
  screenSubtitle,
}) => {
  return (
    <View style={styles.container}>
      <Caption1
        v2
        numberOfLines={1}
        color={Colors.PRIMARY_DARK}
        style={{ fontFamily: Font.BOLD }}
        marginBottom={SizeV2.X3_S}>
        {screenTitle}
      </Caption1>
      {screenSubtitle && (
        <Body v2 numberOfLines={1} color={Colors.PRIMARY_DARK}>
          {screenSubtitle}
        </Body>
      )}
    </View>
  );
};

export default HeaderWithSubtitle;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SizeV2.XL,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
