import parseBaseQRCodeData from '../parseBaseQRCodeData';
import {
  QRCodeData,
  BASE_NETWORK_DEFAULT_PASSWORD,
  BASE_NETWORK_PREFIX,
} from './../../constants';

describe('parse base qr code data helper', () => {
  it('should return undefined if data is empty string', () => {
    expect(parseBaseQRCodeData('')).toBe(undefined);
  });

  it('should return undefined if data is invalid base serial number', () => {
    expect(parseBaseQRCodeData('AAAAZZZZ1234')).toBe(undefined);
  });

  it('should return undefined if no ssid specified in qr code json data and serial number is invalid', () => {
    const sn = 'aaaazzzz1234';
    const qrCodeInvalidSN: QRCodeData = {
      fpc: {
        sn,
      },
    };

    expect(parseBaseQRCodeData(JSON.stringify(qrCodeInvalidSN))).toBe(
      undefined,
    );
  });

  it('should return ssid (uppercase), serial number (uppercase) and password if all data present in qr code json', () => {
    const sn = 'aaaabbbb1234';
    const ap = 'ssid_can_be_any_string';
    const pw = 'custom_password';

    const qrCodeCompleteData: QRCodeData = {
      fpc: {
        ap,
        pw,
        sn,
      },
    };

    expect(parseBaseQRCodeData(JSON.stringify(qrCodeCompleteData))).toEqual({
      ssid: ap.toUpperCase(),
      password: pw,
      serialNumber: sn.toUpperCase(),
    });
  });

  it('should return ssid (uppercase) and default password if only ssid present in qr code json', () => {
    const ap = 'ssid_can_be_any_string';
    const qrCodeSSIDNoPassword1: QRCodeData = {
      fpc: {
        ap,
        pw: '',
      },
    };

    const qrCodeSSIDNoPassword2: QRCodeData = {
      fpc: {
        ap,
      },
    };

    const result = {
      ssid: ap.toUpperCase(),
      password: BASE_NETWORK_DEFAULT_PASSWORD,
    };

    [qrCodeSSIDNoPassword1, qrCodeSSIDNoPassword2].forEach((mockData) => {
      expect(parseBaseQRCodeData(JSON.stringify(mockData))).toEqual(result);
    });
  });

  it('should return ssid (uppercase serial number + base network prefix), serial number (uppercase) and password if ssid missing in qr code json', () => {
    const sn = 'aaaabbbb1234';
    const pw = 'custom_password';
    const qrCodeOnlySNandPW1: QRCodeData = {
      fpc: {
        sn,
        ap: '',
        pw,
      },
    };

    const qrCodeOnlySNandPW2: QRCodeData = {
      fpc: {
        sn,
        pw,
      },
    };

    const result = {
      ssid: `${BASE_NETWORK_PREFIX}${sn.toUpperCase()}`,
      password: pw,
      serialNumber: sn.toUpperCase(),
    };

    [qrCodeOnlySNandPW1, qrCodeOnlySNandPW2].forEach((mockData) => {
      expect(parseBaseQRCodeData(JSON.stringify(mockData))).toEqual(result);
    });
  });

  it('should return ssid (uppercase serial number + base network prefix), serial number (uppercase) and default password if ssid and password missing in qr code json', () => {
    const sn = 'aaaabbbb1234';
    const qrCodeOnlySN1: QRCodeData = {
      fpc: {
        sn,
        pw: '',
        ap: '',
      },
    };

    const qrCodeOnlySN2: QRCodeData = {
      fpc: {
        sn,
      },
    };

    const result = {
      ssid: `${BASE_NETWORK_PREFIX}${sn.toUpperCase()}`,
      password: BASE_NETWORK_DEFAULT_PASSWORD,
      serialNumber: sn.toUpperCase(),
    };

    [qrCodeOnlySN1, qrCodeOnlySN2].forEach((mockData) => {
      expect(parseBaseQRCodeData(JSON.stringify(mockData))).toEqual(result);
    });
  });

  it('should return ssid (uppercase serial number + base network prefix), serial number (uppercase) and default password if only base serial number string encoded in qr code', () => {
    const sn = 'aaaabbbb1234';

    const result = {
      ssid: `${BASE_NETWORK_PREFIX}${sn.toUpperCase()}`,
      password: BASE_NETWORK_DEFAULT_PASSWORD,
      serialNumber: sn.toUpperCase(),
    };

    expect(parseBaseQRCodeData(sn)).toEqual(result);
  });
});
