import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Caption2, Heading2 } from 'src/components/common/Text';
import { Colors } from 'src/theme/Colors';
import { Size, SizeV2 } from 'src/theme/Size';

interface Props {
  dateTime: string;
  fromNow: string;
  fromNowStyle?: any;
}
const MultiLineOccurredAt: React.FC<Props> = ({
  dateTime,
  fromNow,
  fromNowStyle,
}) => {
  return (
    <View style={styles.container}>
      <View>
        <Caption2 v2 numberOfLines={1} style={styles.dateTaime}>
          {dateTime}
        </Caption2>
        <Heading2
          v2
          numberOfLines={1}
          color={Colors.SECONDARY}
          style={fromNowStyle}>
          {fromNow.toLocaleUpperCase()}
        </Heading2>
      </View>
    </View>
  );
};

export default MultiLineOccurredAt;

const styles = StyleSheet.create({
  container: {
    marginBottom: Size.XS,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateTaime: {
    marginBottom: SizeV2.XS,
  },
});
