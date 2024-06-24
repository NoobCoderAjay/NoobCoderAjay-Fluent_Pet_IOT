import { Entypo as Icon } from '@expo/vector-icons';
import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Body, Headline } from 'src/components/common/Text';
import { Colors } from 'src/theme/Colors';
import { Size } from 'src/theme/Size';

interface Props {
  label: string;
  pointNumber: number;
  isCompleted: boolean;
  isFinalPoint: boolean;
  errorMessage?: string;
}

const ChecklistPoint: React.FC<Props> = ({
  label,
  pointNumber,
  isCompleted,
  isFinalPoint,
  errorMessage,
}) => {
  const getPointIcon = () => {
    if (errorMessage) {
      return <Icon size={Size.X3_L} name="cross" color={Colors.RED} />;
    }

    if (isCompleted) {
      return <Icon size={Size.X3_L} name="check" color={Colors.GREEN} />;
    }

    return <Headline>{pointNumber}</Headline>;
  };

  const getTextColor = () => {
    if (errorMessage) {
      return Colors.RED;
    }

    if (isCompleted) {
      return Colors.GREEN;
    }

    return Colors.BLACK;
  };

  return (
    <>
      <View key={label} style={styles.container}>
        <View style={styles.circle}>{getPointIcon()}</View>
        <Body style={styles.flex} color={getTextColor()}>
          {label}
        </Body>
      </View>
      {!isFinalPoint && (
        <View style={isCompleted ? styles.connector : styles.space} />
      )}
    </>
  );
};

export default ChecklistPoint;

const CIRCLE_RADIUS = 25;
const SPACE_HEIGHT = 25;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
    height: CIRCLE_RADIUS * 2,
    width: CIRCLE_RADIUS * 2,
    marginRight: Size.L,
    borderRadius: CIRCLE_RADIUS,
    borderWidth: 4,
    borderColor: Colors.GREY,
  },
  space: {
    height: SPACE_HEIGHT,
  },
  connector: {
    height: SPACE_HEIGHT,
    width: 2,
    marginLeft: CIRCLE_RADIUS - 2,
    backgroundColor: Colors.GREY,
  },
  flex: {
    flex: 1,
  },
});
