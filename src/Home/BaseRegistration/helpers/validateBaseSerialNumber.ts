import { BASE_SERIAL_NUMBER_LENGTH } from '../constants';

const validateBaseSerialNumber = (serialNumber: string) => {
  if (serialNumber.length !== BASE_SERIAL_NUMBER_LENGTH) {
    return false;
  }

  return /^[A-F0-9]*$/.test(serialNumber);
};

export default validateBaseSerialNumber;
