import { getHowToEnablePermissionText } from 'src/helpers/getHowToEnablePermissionText';

interface PermissionTypes {
  camera: boolean;
  location: boolean;
  notifications: boolean;
}
interface PermissionsToDisplay {
  ios: PermissionTypes;
  android: PermissionTypes;
}

export const PERMISSIONS_TO_DISPLAY: PermissionsToDisplay = {
  ios: {
    // Location permission is only needed on Android to connect to the Base network
    location: false,
    camera: true,
    notifications: true,
  },
  android: {
    location: true,
    camera: true,
    notifications: true,
  },
};

export const PERMISSION_ERRORS = {
  location: {
    title: 'Unable to use location',
    message: getHowToEnablePermissionText('Location'),
  },
  camera: {
    title: 'Unable to use camera.',
    message: getHowToEnablePermissionText('Camera'),
  },
  notifications: {
    title: 'Unable to receive push notifications.',
    message: getHowToEnablePermissionText('Notifications'),
  },
};
