import * as ImagePicker from 'expo-image-picker';
import ImagePickerRN from 'react-native-image-crop-picker';

import { IS_IOS } from 'src/constants';

interface ImageAssets {
  path: string;
  width: number;
  height: number;
  mime: string;
}

/**
 * Displays the system UI for choosing an image.
 * Returns a resized version of the image selected by the user.
 */

export const openAvatarPicker = async () => {
  const permission = await getMediaLibraryPermission();

  if (!permission?.granted) {
    return;
  }

  try {
    const imageResult: ImageAssets = await ImagePickerRN.openPicker({
      width: 200,
      height: 200,
      cropping: true,
    });
    return imageResult;
  } catch (err) {
    return null;
  }
};

const getMediaLibraryPermission = async (): Promise<
  Partial<ImagePicker.MediaLibraryPermissionResponse>
> => {
  if (IS_IOS) {
    // ImagePicker requires permission on iOS 10 only (which isn't supported)
    return {
      granted: true,
    };
  }

  return await ImagePicker.requestMediaLibraryPermissionsAsync();
};
