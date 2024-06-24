import { BASE_NETWORK_PREFIX } from '../constants';
import validateBaseSerialNumber from './validateBaseSerialNumber';

const validateBaseNetworkSSID = (ssid: string) => {
  if (!ssid.startsWith(BASE_NETWORK_PREFIX)) {
    return false;
  }

  return validateBaseSerialNumber(ssid.replace(BASE_NETWORK_PREFIX, ''));
};

export default validateBaseNetworkSSID;
