import _ from 'lodash';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { G, Path, Svg } from 'react-native-svg';

import { Colors } from 'src/theme/Colors';
import { Size } from 'src/theme/Size';
import { Font } from 'src/theme/Text';

import { Caption2 } from '../common/Text';
import { AvatarBadgeContent } from './types';

interface Props {
  content: AvatarBadgeContent;
  color?: Colors;
}

const Badge: React.FC<Props> = ({ content, color = Colors.PRIMARY }) => {
  const contentIsCaption = _.isNumber(content) || _.isString(content);

  return (
    <View style={styles.container}>
      <View style={styles.centerAlign}>
        <Svg width="38" height="41" viewBox="0 0 38 41" style={{}}>
          <G transform="translate(1.5 1.581)">
            <G transform="translate(0 0)">
              <Path
                d="M34.567,25.363V12.617a6.247,6.247,0,0,0-3.121-5.409L20.409.838a6.238,6.238,0,0,0-6.247,0L3.125,7.225A6.243,6.243,0,0,0,0,12.621V25.363a6.251,6.251,0,0,0,3.125,5.413l11.037,6.387a6.238,6.238,0,0,0,6.247,0l11.037-6.387A6.255,6.255,0,0,0,34.567,25.363Z"
                transform="translate(0 0)"
                fill={color}
                stroke={Colors.WHITE}
                strokeWidth="3"
                fillRule="evenodd"
              />
            </G>
          </G>
        </Svg>
        <View style={styles.contentContainer}>
          {!contentIsCaption ? (
            content
          ) : (
            <Caption2 color={Colors.WHITE} style={{ fontFamily: Font.BOLD }}>
              {content}
            </Caption2>
          )}
        </View>
      </View>
    </View>
  );
};

export default Badge;

const ICON_OFFSET_LEFT = 90;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: ICON_OFFSET_LEFT,
  },
  centerAlign: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    position: 'absolute',
    padding: Size.X2_S,
  },
});
