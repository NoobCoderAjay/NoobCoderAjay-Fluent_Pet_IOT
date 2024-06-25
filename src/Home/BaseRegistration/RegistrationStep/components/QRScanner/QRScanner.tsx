import { BarCodeScanner } from "expo-barcode-scanner";
import { AutoFocus, Camera } from "expo-camera";
import React, { useState } from "react";
import { StyleSheet, View, Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Colors } from "src/theme/Colors";

import BottomContainer from "./BottomContainer";
import MiddleContainer from "./MiddleContainer";
import TopContainer from "./TopContainer";

interface Props {
  onClose(): void;
  onScanned(value: string): void;
}

const QRScanner: React.FC<Props> = ({ onClose, onScanned }) => {
  const [scannedData, setScannedData] = useState<string | undefined>();

  const { bottom: safeAreaBottomHeight } = useSafeAreaInsets();

  const handleBarCodeScanned = ({ data }: { data: string }) => {
    setScannedData(data);
    onScanned(data);
  };

  return (
    <View style={styles.container}>
      <Camera
        barCodeScannerSettings={{
          barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
        }}
        onBarCodeScanned={scannedData ? undefined : handleBarCodeScanned}
        focusDepth={1}
        autoFocus={AutoFocus.on}
        zoom={Platform.OS === "ios" ? 0.01 : 0} // added this optical zoom that happens only in iOS
        style={styles.scanner}
      >
        <TopContainer />
        <MiddleContainer />
        <BottomContainer onCancelButtonPress={onClose} />
        <View
          style={{
            height: safeAreaBottomHeight,
            ...styles.bottomSafeAreaTransparentFiller,
          }}
        />
      </Camera>
    </View>
  );
};

export default QRScanner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  scanner: {
    flex: 1,
    width: "100%",
    backgroundColor: Colors.BLACK,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomSafeAreaTransparentFiller: {
    width: "100%",
    backgroundColor: Colors.BLACK_TRANSPARENT,
  },
});
