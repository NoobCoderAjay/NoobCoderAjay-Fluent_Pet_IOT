import React from "react";
import Svg, { G, Path } from "react-native-svg";

import { Colors } from "../../theme/Colors";

import { IconProps } from "./types";

const CalendarSmall: React.FC<IconProps> = ({ color = Colors.BLACK }) => {
  return (
    <Svg width={16} height={16} viewBox={"0 0 16 16"}>
      <G>
        <G>
          <Path
            d="M7.886,0a7.886,7.886,0,1,0,7.886,7.886A7.895,7.895,0,0,0,7.886,0Zm0,14.439a6.553,6.553,0,1,1,6.553-6.553A6.56,6.56,0,0,1,7.886,14.439Z"
            fill={color}
          />
        </G>
      </G>
      <G transform="translate(7.019 2.327)">
        <G>
          <Path
            d="M232.319,80.856h-3.11V76.208a.666.666,0,1,0-1.333,0v5.314a.666.666,0,0,0,.666.666h3.776a.666.666,0,1,0,0-1.333Z"
            transform="translate(-227.876 -75.542)"
            fill={color}
          />
        </G>
      </G>
    </Svg>
  );
};

export default CalendarSmall;
