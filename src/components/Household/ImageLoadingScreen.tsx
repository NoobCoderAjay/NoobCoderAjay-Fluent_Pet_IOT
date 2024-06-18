import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import Modal from "react-native-modal";
import { Color } from "../../theme/Color";
import { Colors } from "../../theme/Colors";

interface Props {
  loading: boolean;
}

const ImageLoadingScreen: React.FC<Props> = ({ loading }) => {
  return (
    <Modal
      isVisible={loading}
      backdropColor={Color.BLACK_000}
      style={styles.modalContainer}
    >
      <View style={styles.container}>
        <ActivityIndicator color={Colors.PRIMARY_DARK} size={"large"} />
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.BLACK_000,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.BLACK_000,
    margin: 0,
    padding: 0,
  },
});
export default ImageLoadingScreen;
