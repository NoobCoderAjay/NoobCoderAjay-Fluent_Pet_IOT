import React from "react";
import Svg, { G, Line } from "react-native-svg";

import { Colors } from "../../theme/Colors";

import { IconProps } from "./types";

const Close: React.FC<IconProps> = ({ color = Colors.BLACK, width = 19 }) => {
  return (
    <Svg width={width} height={width} viewBox={"0 0 19 19"}>
      <G
        id="Group_101"
        data-name="Group 101"
        transform="translate(-88.783 -189.674) rotate(45)"
      >
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

export default Close;
