import { Alert } from 'react-native';

interface Params {
  ssidIdx: number;
}
const validateWifiCredentials = ({ ssidIdx }: Params) => {
  if (ssidIdx === -1) {
    Alert.alert('Could not connect to this network. Please try again.');
    return false;
  }

  // Note: Do not validate password. The Base should be able
  // to connect to a wifi network with no security.
  return true;
};

export default validateWifiCredentials;
