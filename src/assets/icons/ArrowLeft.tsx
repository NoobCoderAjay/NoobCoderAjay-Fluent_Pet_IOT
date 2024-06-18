import React from "react";
import { G, Line, Path, Svg } from "react-native-svg";

import { IconProps } from "./types";
import { Colors } from "../../theme/Colors";

const ArrowLeft: React.FC<IconProps> = ({ color = Colors.BLACK }) => {
  return (
    <Svg width={32} height={22} viewBox="0 0 32 22">
      <G transform="translate(392.073 -109.024) rotate(180)">
        <Line
          id="Line_1"
          data-name="Line 1"
          x2="26.522"
          transform="translate(362.951 -119.77)"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
        <Path
          id="Line_1-2"
          data-name="Line 1"
          d="M376.67-127.689l7.918,7.918-7.918,7.918"
          transform="translate(5.484)"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
      </G>
    </Svg>
  );
};

export default ArrowLeft;
