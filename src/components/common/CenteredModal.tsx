import React from 'react';
import {
  Modal,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { CloseIcon } from 'src/assets/icons';
import { Colors } from 'src/theme/Colors';
import { Size } from 'src/theme/Size';

interface Props {
  children: React.ReactNode;
  visible: boolean;
  onClose(): void;
}

const CenteredModal: React.FC<Props> = ({ visible, onClose, children }) => (
  <Modal style={styles.modal} visible={visible} transparent>
    <TouchableOpacity style={styles.transparentBackground} onPress={onClose}>
      <TouchableWithoutFeedback>
        <View style={styles.contentContainer}>
          <TouchableOpacity
            onPress={onClose}
            style={styles.closeButtonContainer}>
            <CloseIcon color={Colors.BLACK} />
          </TouchableOpacity>
          <View>{children}</View>
        </View>
      </TouchableWithoutFeedback>
    </TouchableOpacity>
  </Modal>
);

export default CenteredModal;

const styles = StyleSheet.create({
  modal: {
    flex: 1,
  },
  transparentBackground: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.PRIMARY_TRANSPARENT,
  },
  contentContainer: {
    paddingHorizontal: Size.M,
    marginHorizontal: Size.S,
    paddingTop: Size.S,
    paddingBottom: Size.XL,
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
  },
  closeButtonContainer: {
    alignSelf: 'flex-end',
    padding: Size.XS,
  },
});
