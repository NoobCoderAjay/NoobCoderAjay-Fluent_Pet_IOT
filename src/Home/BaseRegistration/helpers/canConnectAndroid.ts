import * as Location from 'expo-location';
import { Alert, PermissionsAndroid } from 'react-native';

const getLocationPermissionAndroid = async () => {
  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    {
      title: 'Location permission is required for WiFi connections',
      message:
        'This app needs location enabled in order to connect to a wifi network.',
      buttonNegative: 'DENY',
      buttonPositive: 'ALLOW',
    },
  );

  return granted === PermissionsAndroid.RESULTS.GRANTED;
};

const canConnectAndroid = async () => {
  const isGpsEnabled = await Location.hasServicesEnabledAsync();
  if (!isGpsEnabled) {
    Alert.alert(
      'Please enable GPS location manually and try again.',
      'This app needs GPS enabled as this is required to connect to a wifi network.',
    );
    return false;
  }

  const isLocationEnabled = await getLocationPermissionAndroid();
  if (!isLocationEnabled) {
    Alert.alert(
      'Please enable location permission to connect your device.',
      'This app needs location enabled in order to connect to a wifi network.',
    );
    return false;
  }

  return true;
};

export default canConnectAndroid;
