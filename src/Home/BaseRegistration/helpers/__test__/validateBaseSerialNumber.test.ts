import { BASE_SERIAL_NUMBER_LENGTH } from '../../constants';
import validateBaseSerialNumber from '../validateBaseSerialNumber';

describe('validate base serial number helper', () => {
  it('should return true when serial number 12 characters long, only A-F and/or 0-9', () => {
    const serialNumber1 = 'AAAA1234BBBB';
    expect(validateBaseSerialNumber(serialNumber1)).toBe(true);

    const serialNumber2 = 'AABBCCDDEEFF';
    expect(validateBaseSerialNumber(serialNumber2)).toBe(true);

    const serialNumber3 = '123412341234';
    expect(validateBaseSerialNumber(serialNumber3)).toBe(true);
  });

  it(`should return false if serial number not ${BASE_SERIAL_NUMBER_LENGTH} characters long`, () => {
    const serialNumber1 = 'AAAA';
    const serialNumber2 = 'AAAAAAAAAAAAAAA';
    expect(validateBaseSerialNumber(serialNumber1)).toBe(false);
    expect(validateBaseSerialNumber(serialNumber2)).toBe(false);
  });

  it('should return false if serial number includes letters G-Z', () => {
    const serialNumber = 'AABBCCDDEEGG';
    expect(validateBaseSerialNumber(serialNumber)).toBe(false);
  });

  it('should return false if serial number includes lowercase letter', () => {
    const serialNumber = 'AAaA1234BBBB';
    expect(validateBaseSerialNumber(serialNumber)).toBe(false);
  });

  it(`should return false if serial number includes special characters`, () => {
    const serialNumber = 'AAAA12345BBB$';
    expect(validateBaseSerialNumber(serialNumber)).toBe(false);
  });

  it(`should return false if serial number includes whitespace`, () => {
    const serialNumber = 'AAAA123 45BBB';
    expect(validateBaseSerialNumber(serialNumber)).toBe(false);
  });
});
