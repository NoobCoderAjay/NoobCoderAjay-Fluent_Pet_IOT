import { Feather as Icon } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';

import { Button } from 'src/components/common';
import { Colors } from 'src/theme/Colors';
import { Size } from 'src/theme/Size';
import { Font, TextSize } from 'src/theme/Text';

const icons = {
  search: {
    name: 'search', // search input
    size: 24,
  },
  arrowUp: {
    name: 'chevron-up', // dropdown toggle
    size: 22,
  },
  arrowDown: {
    name: 'chevron-down', // dropdown toggle
    size: 22,
  },
  selectArrowDown: {
    name: 'chevron-down', // select
    size: 24,
  },
  close: {
    name: 'x', // chip close
    size: 16,
  },
  check: {
    name: 'check', // selected item
    size: 16,
  },
  cancel: {
    name: 'x', // cancel button
    size: 18,
  },
};

interface Props {
  items?: unknown[];
  selectedItems?: any[];
  searchPlaceholderText?: string;
  confirmText?: string;
  subKey?: string;
  onSelectedItemsChange(items: string[]): void;
  onSubmitSelection(): void;
  onCancelSelection(): void;
}

const MultiSelect = React.forwardRef<SectionedMultiSelect<unknown>, Props>(
  (
    {
      items,
      selectedItems,
      searchPlaceholderText,
      confirmText,
      subKey,
      onSelectedItemsChange,
      onSubmitSelection,
      onCancelSelection,
    },
    ref,
  ) => {
    const [initialSelectedItems, setInitialSelectedItems] = useState<any[]>([]);

    const onToggleSelector = (isOpen: boolean) => {
      if (isOpen) {
        setInitialSelectedItems(selectedItems || []);
      }
    };

    const onCancel = () => {
      onSelectedItemsChange(initialSelectedItems);
    };

    return (
      <SectionedMultiSelect
        ref={ref}
        items={items}
        selectedItems={selectedItems}
        IconRenderer={Icon as any}
        icons={icons}
        uniqueKey="id"
        searchPlaceholderText={searchPlaceholderText}
        confirmText={confirmText}
        subKey={subKey}
        onCancel={onCancel}
        onToggleSelector={onToggleSelector}
        onSelectedItemsChange={onSelectedItemsChange as any}
        modalWithSafeAreaView
        stickyFooterComponent={
          <View style={styles.multiSelectNavigation}>
            <Button
              label="BACK"
              color={Colors.BLACK}
              width="30%"
              onPress={onCancelSelection}
            />
            <Button label="CONFIRM" width="66%" onPress={onSubmitSelection} />
          </View>
        }
        hideConfirm
        modalAnimationType="slide"
        readOnlyHeadings
        showDropDowns={false}
        showChips={false}
        hideSelect
        itemFontFamily={styles.multiSelectFont}
        subItemFontFamily={styles.multiSelectFont}
        searchTextFontFamily={styles.multiSelectFont}
        confirmFontFamily={styles.boldFont}
        colors={{
          primary: Colors.PRIMARY,
          searchPlaceholderTextColor: '#111',
        }}
        styles={{
          modalWrapper: styles.modalWrapper,
          subItemText: styles.subItemText,
          selectedSubItemText: styles.selectedSubItemText,
          itemText: styles.itemText,
          searchTextInput: styles.searchTextInput,
          searchBar: styles.searchBar,
        }}
      />
    );
  },
);

const styles = StyleSheet.create({
  multiSelectFont: {
    fontFamily: Font.REGULAR,
  },
  multiSelectNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  boldFont: {
    fontFamily: Font.BOLD,
  },
  modalWrapper: {
    backgroundColor: '#fff',
  },
  searchBar: {
    backgroundColor: '#fff',
  },
  searchTextInput: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
    fontSize: TextSize.caption1.fontSize,
    padding: Size.XS,
  },
  itemText: {
    fontSize: TextSize.caption1.fontSize,
    fontFamily: Font.LIGHT,
    textAlign: 'center',
    fontWeight: 'normal',
    fontStyle: 'italic',
  },
  subItemText: {
    color: '#333',
  },
  selectedSubItemText: {
    color: '#000',
    fontWeight: 'bold',
    fontFamily: Font.BOLD,
  },
});

export default MultiSelect;
