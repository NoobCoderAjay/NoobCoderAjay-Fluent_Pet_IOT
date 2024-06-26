import React from "react";
import { Defs, G, Path, Svg } from "react-native-svg";

import { Colors } from "../../theme/Colors";
type Props = {
  color?: Colors;
  size?: number;
};

const StrekIcon: React.FC<Props> = ({ color = Colors.BLACK, size = 60 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 62 66" fill="none">
      <G filter="url(#filter0_d_9_4390)">
        <Path
          d="M27.1665 11.3094C29.6417 9.88034 32.6913 9.88034 35.1665 11.3094L47.9511 18.6906C50.4263 20.1197 51.9511 22.7607 51.9511 25.6188V40.3812C51.9511 43.2393 50.4263 45.8803 47.9511 47.3094L35.1665 54.6906C32.6913 56.1197 29.6417 56.1197 27.1665 54.6906L14.3819 47.3094C11.9067 45.8803 10.3819 43.2393 10.3819 40.3812V25.6188C10.3819 22.7607 11.9067 20.1197 14.3819 18.6906L27.1665 11.3094Z"
          fill="#FCBC71"
        />
        <Path
          d="M27.6665 12.1754C29.8323 10.925 32.5007 10.925 34.6665 12.1754L47.4511 19.5566C49.6169 20.8071 50.9511 23.1179 50.9511 25.6188V40.3812C50.9511 42.8821 49.6169 45.1929 47.4511 46.4434L34.6665 53.8246C32.5007 55.075 29.8323 55.075 27.6665 53.8246L14.8819 46.4434C12.7161 45.1929 11.3819 42.8821 11.3819 40.3812V25.6188C11.3819 23.1179 12.7161 20.8071 14.8819 19.5566L27.6665 12.1754Z"
          stroke="white"
          stroke-width="2"
        />
      </G>
      <Path
        d="M34.9105 21.3048L23.8036 32.9288L30.7732 35.0032L27.7568 44.0586L38.8638 32.4346L31.8942 30.3602L34.9105 21.3048Z"
        fill="white"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default StrekIcon;
