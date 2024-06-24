import { Alert } from 'react-native';

const showInvalidQRCodeAlert = () => {
  Alert.alert(
    'QR Code Error',
    'The scanned QR code appears to be invalid. Please try again or enter the Base serial number manually.',
  );
};

export default showInvalidQRCodeAlert;
