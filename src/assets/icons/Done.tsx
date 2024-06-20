import React from 'react';
import { G, Path, Svg } from 'react-native-svg';

import { Colors } from 'src/theme/Colors';

type Props = {
  color: Colors;
  size?: number;
};

const Done: React.FC<Props> = ({ color = Colors.BLACK, size = 25 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 40 40" fill={color}>
      <Path
        d="M9.80691 33.6848L18.5183 37.4482C21.1499 38.5851 24.1886 38.227 26.4838 36.5095L36.4859 29.0253C39.0053 27.1401 40.1856 23.9529 39.5018 20.8814L36.8678 9.05083C36.0985 5.59517 33.1493 3.05613 29.6177 2.8089L16.6554 1.90148C14.4922 1.75005 12.3602 2.48325 10.7477 3.93314L3.87665 10.1114C1.44795 12.2952 0.590679 15.7362 1.71095 18.8042L5.46486 29.0848C6.21879 31.1495 7.78907 32.8131 9.80691 33.6848Z"
        fill="#E6F0F1"
      />
      <G clip-path="url(#clip0_4339_12164)">
        <Path
          d="M27.5 19.3104V20.0004C27.4991 21.6177 26.9754 23.1914 26.007 24.4868C25.0386 25.7821 23.6775 26.7297 22.1265 27.1883C20.5756 27.6469 18.9179 27.5918 17.4009 27.0313C15.8838 26.4708 14.5885 25.435 13.7082 24.0782C12.8279 22.7214 12.4098 21.1164 12.5163 19.5026C12.6227 17.8888 13.2479 16.3526 14.2987 15.1232C15.3495 13.8938 16.7696 13.0369 18.3471 12.6805C19.9247 12.3241 21.5752 12.4871 23.0525 13.1454"
          stroke="#006271"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M17.75 19.25L20 21.5L27.5 14"
          stroke="#006271"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <defs>
        <clipPath id="clip0_4339_12164">
          <rect
            width="18"
            height="18"
            fill="white"
            transform="translate(11 11)"
          />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default Done;
