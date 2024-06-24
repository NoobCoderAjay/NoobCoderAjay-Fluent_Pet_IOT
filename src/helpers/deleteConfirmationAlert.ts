import { Alert } from 'react-native';

const deleteConfirmationAlert = (onConfirm: () => void) => {
  Alert.alert('Are you sure?', 'This will be permanently deleted.', [
    { text: 'Cancel', style: 'cancel' },
    { text: 'Delete', onPress: onConfirm, style: 'destructive' },
  ]);
};

export default deleteConfirmationAlert;
