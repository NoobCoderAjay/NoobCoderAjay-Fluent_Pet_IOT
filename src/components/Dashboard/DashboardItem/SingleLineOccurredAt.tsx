import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Caption2, Heading2 } from 'src/components/common/Text';
import { Colors } from 'src/theme/Colors';
import { SizeV2 } from 'src/theme/Size';

interface Props {
  dateTime: string;
  fromNow: string;
}
const SingleLineOccurredAt: React.FC<Props> = ({ dateTime, fromNow }) => {
  return (
    <View style={styles.container}>
      <Caption2 v2 numberOfLines={1} style={styles.dateTime}>
        {dateTime}
      </Caption2>
      <Heading2
        v2
        numberOfLines={1}
        style={styles.fromNow}
        color={Colors.SECONDARY}>
        {fromNow.toLocaleUpperCase()}
      </Heading2>
    </View>
  );
};

export default SingleLineOccurredAt;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  dateTime: {
    marginRight: SizeV2.X2_S,
    marginTop: SizeV2.X3_S,
  },
  fromNow: {
    marginTop: SizeV2.X2_S,
  },
});
