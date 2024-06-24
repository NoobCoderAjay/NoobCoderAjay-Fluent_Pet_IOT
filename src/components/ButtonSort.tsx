import { useActionSheet } from '@expo/react-native-action-sheet';
import { Feather as Icon } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';

import { Caption1 } from 'src/components/common/Text';
import { ButtonSortType } from 'src/model/board';
import { Colors } from 'src/theme/Colors';
import { SizeV2 } from 'src/theme/Size';

interface Props {
  sortType: ButtonSortType;
  onOptionPress: (buttonSort: ButtonSortType) => void;
  constainerStyle?: ViewStyle;
  startLoading?: () => void | null;
}

const COLOR = Colors.PRIMARY_DARK;
const ICON_SIZE = SizeV2.S;

export const ButtonSort: React.FC<Props> = ({
  sortType,
  onOptionPress,
  constainerStyle = {},
  startLoading = null,
}) => {
  const { showActionSheetWithOptions } = useActionSheet();

  const optionHash = {
    [ButtonSortType.ALPHABET]: 'Sort by A-Z',
    [ButtonSortType.DATE]: 'Introduction date',
    [ButtonSortType.FREQUENCY]: 'Most used',
    cancel: 'Cancel',
  };
  const options = Object.values(optionHash);
  const optionKeys = Object.keys(optionHash);

  const openActionSheet = () => {
    showActionSheetWithOptions(
      {
        options: options,
        cancelButtonIndex: optionKeys.indexOf('cancel'),
      },
      (buttonIndex) => {
        if (buttonIndex !== optionKeys.indexOf('cancel') && startLoading) {
          startLoading();
        }
        if (buttonIndex === optionKeys.indexOf(ButtonSortType.DATE)) {
          onOptionPress(ButtonSortType.DATE);
        }

        if (buttonIndex === optionKeys.indexOf(ButtonSortType.ALPHABET)) {
          onOptionPress(ButtonSortType.ALPHABET);
        }

        if (buttonIndex === optionKeys.indexOf(ButtonSortType.FREQUENCY)) {
          onOptionPress(ButtonSortType.FREQUENCY);
        }
      },
    );
  };

  return (
    <TouchableOpacity onPress={openActionSheet}>
      <View style={{ ...styles.flex, ...constainerStyle }}>
        <Icon color={COLOR} size={ICON_SIZE} name="chevron-left" />
        <Caption1 v2 color={COLOR}>
          {optionHash[sortType]}
        </Caption1>
        <Icon color={COLOR} size={ICON_SIZE} name="chevron-right" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
