import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { Headline } from 'src/components/common/Text';
import { Colors } from 'src/theme/Colors';
import { SizeV2 } from 'src/theme/Size';

interface Props {
  onCancelButtonPress(): void;
}

const BottomContainer: React.FC<Props> = ({ onCancelButtonPress }) => (
  <View style={styles.bottomContainer}>
    <Pressable onPress={onCancelButtonPress}>
      <Headline v2 color={Colors.PRIMARY}>
        CANCEL
      </Headline>
    </Pressable>
  </View>
);

export default BottomContainer;

const styles = StyleSheet.create({
  bottomContainer: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: SizeV2.L,
    backgroundColor: Colors.BLACK_TRANSPARENT,
  },
});
