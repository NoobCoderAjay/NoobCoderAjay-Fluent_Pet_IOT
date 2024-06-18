import { Feather as Icon } from '@expo/vector-icons';
import React, { useMemo, useState } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import AnimatedPressable from 'src/components/common/AnimatedPressable';
import { Body } from 'src/components/common/Text';
import { Colors } from 'src/theme/Colors';
import { Size, SizeV2 } from 'src/theme/Size';

interface Props {
  title: string | { hidden: string; visible: string };
  color?: Colors;
  children: React.ReactNode;
  initiallyVisible?: boolean;
  style?: StyleProp<ViewStyle>;
}

const SectionToggle: React.FC<Props> = ({
  title,
  color = Colors.BLACK,
  children,
  style,
  initiallyVisible = false,
}) => {
  const [visible, setVisible] = useState(initiallyVisible);

  const toggleShow = () => setVisible((prevState) => !prevState);

  const displayedTitle = useMemo(() => {
    if (typeof title === 'string') {
      return title;
    }

    if (visible) {
      return title.visible;
    } else {
      return title.hidden;
    }
  }, [title, visible]);

  return (
    <View style={style}>
      <AnimatedPressable onPress={toggleShow}>
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Body color={color} v2>
              {displayedTitle}
            </Body>
          </View>
          {!visible ? (
            <Icon color={color} name="chevron-down" size={22} />
          ) : (
            <Icon color={color} name="chevron-up" size={22} />
          )}
        </View>
      </AnimatedPressable>
      {visible ? <>{children}</> : null}
    </View>
  );
};

export default SectionToggle;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Size.XL,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: SizeV2.XS,
  },
});
