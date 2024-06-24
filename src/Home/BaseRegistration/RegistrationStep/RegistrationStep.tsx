import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import BaseFirmwareUpdateScreen from 'src/Home/BaseFirmwareUpdate/BaseFirmwareUpdateScreen';
import { Base, NetworkNearbyBase } from 'src/model/base';

import {
  ChecklistError,
  ChecklistPoints,
  Steps,
  TutorialSteps,
} from '../constants';
import {
  parseBaseQRCodeData,
  showInvalidQRCodeAlert,
  validateWifiCredentials,
} from '../helpers';
import {
  ConnectedToBaseNetworkStatus,
  ConnectionChecklist,
  FullScreenLoader,
  ConnectToBase,
  NetworksList,
  QRScanner,
  SetupCompleted,
  TutorialStep,
  WifiPasswordDialog,
} from './components';

interface Props {
  step: Steps;
  baseSerialNumber: string;
  lastPointCompleted: ChecklistPoints;
  checklistError?: ChecklistError;
  nearbyNetworks: NetworkNearbyBase[];
  fetchingNearbyNetworks: boolean;
  registeredBase?: Base;
  onConnectBaseToWifi(ssidIdx: number, pass: string): void;
  onChangeBaseSerialNumber(ssid: string): void;
  onWiFiNetworksListRefresh(): void;
  onOpenQRScanner(): void;
  onCloseQRScanner(wifiCredentials?: { ssid: string; password: string }): void;
}

const RegistrationStep: React.FC<Props> = ({
  step,
  baseSerialNumber,
  lastPointCompleted,
  checklistError,
  nearbyNetworks,
  fetchingNearbyNetworks,
  registeredBase,
  onConnectBaseToWifi,
  onChangeBaseSerialNumber,
  onWiFiNetworksListRefresh,
  onOpenQRScanner,
  onCloseQRScanner,
}) => {
  const [wifiNetworkSSID, setWifiNetworkSSID] = useState('');
  const [wifiNetworkPassword, setWifiNetworkPassword] = useState('');
  const [wifiPasswordPromptVisible, setWifiPasswordPromptVisible] =
    useState(false);

  const onUserSelectedWifiNetwork = (ssid: string) => {
    setWifiNetworkSSID(ssid);
    setWifiPasswordPromptVisible(true);
  };

  const onSubmitWifiCredentials = () => {
    const wifiNetworkIdx = nearbyNetworks.findIndex(
      (network) => network.ssid === wifiNetworkSSID,
    );

    const credentialsValid = validateWifiCredentials({
      ssidIdx: wifiNetworkIdx,
    });

    if (credentialsValid) {
      onConnectBaseToWifi(wifiNetworkIdx, wifiNetworkPassword);
    }
  };

  const hidePasswordPrompt = () => {
    setWifiPasswordPromptVisible(false);
  };

  const onQRScanFailure = () => {
    onCloseQRScanner();
    showInvalidQRCodeAlert();
  };

  const onQRCodeScanned = (data: string) => {
    const wifiCredentials = parseBaseQRCodeData(data);

    if (!wifiCredentials) {
      onQRScanFailure();
    } else {
      const { ssid, password, serialNumber } = wifiCredentials;

      if (serialNumber) {
        onChangeBaseSerialNumber(serialNumber);
      }

      onCloseQRScanner({
        ssid,
        password,
      });
    }
  };

  switch (step) {
    case Steps.WELCOME_GUIDE:
      return <TutorialStep {...TutorialSteps[0]} />;
    case Steps.WIFI_MODE_GUIDE:
      return <TutorialStep {...TutorialSteps[1]} />;
    case Steps.CONNECT_TO_BASE:
      return (
        <ConnectToBase
          baseSerialNumber={baseSerialNumber}
          onChangeBaseSerialNumber={onChangeBaseSerialNumber}
          onOpenQRScanner={onOpenQRScanner}
        />
      );
    case Steps.QR_SCANNER:
      return (
        <QRScanner
          onClose={() => onCloseQRScanner(undefined)}
          onScanned={onQRCodeScanned}
        />
      );
    case Steps.CONNECTING:
      return (
        <FullScreenLoader
          loadingText="Connecting"
          body="Connecting to your Base Wifi Access Point..."
        />
      );
    case Steps.CONNECT_TO_BASE_AP_FAILED:
      return <ConnectedToBaseNetworkStatus />;
    case Steps.CONNECT_TO_BASE_AP_SUCCESSFUL:
      return <ConnectedToBaseNetworkStatus successful />;
    case Steps.GET_WIFI_CREDENTIALS:
      return (
        <View style={styles.flex}>
          <NetworksList
            networks={nearbyNetworks.map((network) => network.ssid)}
            onNetworkSelected={onUserSelectedWifiNetwork}
            isRefreshing={fetchingNearbyNetworks}
            onRefresh={onWiFiNetworksListRefresh}
          />
          <WifiPasswordDialog
            visible={wifiPasswordPromptVisible}
            wifiNetworkSSID={wifiNetworkSSID}
            wifiNetworkPassword={wifiNetworkPassword}
            onChangePassword={setWifiNetworkPassword}
            closePrompt={hidePasswordPrompt}
            onSubmit={onSubmitWifiCredentials}
          />
        </View>
      );
    case Steps.CONNECTION_CHECKLIST:
      return (
        <ConnectionChecklist
          lastPointCompleted={lastPointCompleted}
          checklistError={checklistError}
        />
      );
    case Steps.FIRMWARE_UPDATE:
      return <BaseFirmwareUpdateScreen />;
    case Steps.BASE_SETUP_COMPLETED:
      return <SetupCompleted base={registeredBase} />;
    default:
      return null;
  }
};

export default RegistrationStep;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});
