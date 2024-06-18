import React from "react";
import { G, Line, Svg } from "react-native-svg";

import { IconProps } from "./types";
import { Colors } from "../../theme/Colors";

const Add: React.FC<IconProps> = ({ color = Colors.BLACK, width = 22 }) => {
  return (
    <Svg width={width} height={width} viewBox="0 0 22 22">
      <G transform="translate(-198.913 -59.954)">
        <Line
          x2="18.803"
          transform="translate(200.913 71.326)"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeWidth="4"
        />
        <Line
          x2="18.803"
          transform="translate(210.315 61.954) rotate(90)"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeWidth="4"
        />
      </G>
    </Svg>
  );
};

export default Add;
