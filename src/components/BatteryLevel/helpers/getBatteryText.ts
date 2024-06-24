export const getBatteryText = (batteryValue?: number): string => {
  if (batteryValue === -1) {
    return 'Charging';
  } else if (batteryValue === -2 || batteryValue === undefined) {
    return 'Not available';
  } else {
    return `${batteryValue}%`;
  }
};
