import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Button } from 'src/components/common';
import { Colors } from 'src/theme/Colors';
import { Size } from 'src/theme/Size';
import { TextSize } from 'src/theme/Text';

interface Option {
  id: number;
  text: string;
}

interface Props {
  selectedValues: number[];
  options: Option[];
  radio?: boolean;
  onButtonPress(id: number): any;
}

const Contexts = ({ options, selectedValues, onButtonPress }: Props) => {
  return (
    <View style={styles.container}>
      {options.map(({ id, text }) => {
        const isSelected = selectedValues.includes(id);

        const onPress = () => {
          onButtonPress(id);
        };

        return (
          <View key={`${id}-${text}`} style={{ marginRight: Size.X2_S }}>
            <Button
              fullWidth
              height={Size.X2_L}
              color={isSelected ? Colors.SECONDARY : Colors.SECONDARY_LIGHT}
              onPress={onPress}
              label={text}
              labelStyle={styles.label}
              marginBottom={Size.XS}
            />
          </View>
        );
      })}
    </View>
  );
};

export default Contexts;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  label: {
    fontSize: TextSize.caption1.fontSize,
    letterSpacing: 0,
  },
});
