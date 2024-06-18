import React from 'react';
import { View, StyleSheet, Modal, Pressable } from 'react-native';

import { Colors } from 'src/theme/Colors';
import { modalShadow } from 'src/theme/Shadows';
import { SizeV2 } from 'src/theme/Size';

interface Props {
  children: React.ReactNode;
  visible: boolean;
  onHide: () => void;
}

const BottomSheetModal: React.FC<Props> = (props) => {
  const { children, visible, onHide } = props;

  return (
    <Modal
      transparent
      visible={visible}
      animationType="slide"
      onRequestClose={onHide}>
      <View style={styles.outerContainer}>
        <Pressable style={styles.exitPressable} onPress={onHide} />
        <View style={styles.container}>{children}</View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  exitPressable: {
    flexGrow: 1,
  },
  outerContainer: {
    height: '100%',
    justifyContent: 'flex-end',
  },
  container: {
    ...modalShadow,
    paddingVertical: SizeV2.X2_L,
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    borderTopLeftRadius: SizeV2.L,
    borderTopRightRadius: SizeV2.L,
  },
});

export default BottomSheetModal;
