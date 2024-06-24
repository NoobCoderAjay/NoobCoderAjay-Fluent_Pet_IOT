import {
  BASE_NETWORK_DEFAULT_PASSWORD,
  BASE_NETWORK_PREFIX,
  QRCodeData,
} from '../constants';
import { QRCodeBaseData } from '../constants';
import validateBaseSerialNumber from './validateBaseSerialNumber';

type Response =
  | {
      ssid: string;
      password: string;
      serialNumber?: string;
    }
  | undefined;

const parseBaseQRCodeData = (data: string): Response => {
  if (!data) {
    return;
  }

  let dataAsBaseDataObject: QRCodeBaseData | undefined;
  let dataAsSerialNumber;

  try {
    const qrData: QRCodeData = JSON.parse(data);
    dataAsBaseDataObject = qrData?.fpc;
  } catch {
    dataAsSerialNumber = data;
  }

  const ssid = dataAsBaseDataObject?.ap?.toUpperCase();
  // Use default password if pw field missing in json data
  const password = dataAsBaseDataObject?.pw || BASE_NETWORK_DEFAULT_PASSWORD;
  const serialNumber =
    dataAsBaseDataObject?.sn?.toUpperCase() ||
    dataAsSerialNumber?.toUpperCase();

  // Do not validate ssid in case SSID format changes in the firmware
  if (ssid) {
    return {
      ssid,
      password,
      serialNumber,
    };
  }

  if (serialNumber && validateBaseSerialNumber(serialNumber)) {
    return {
      ssid: `${BASE_NETWORK_PREFIX}${serialNumber}`,
      password,
      serialNumber,
    };
  }
};

export default parseBaseQRCodeData;
