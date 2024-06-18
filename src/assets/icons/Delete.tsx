import React from "react";
import Svg, { G, Line, Path } from "react-native-svg";

import { Colors } from "../../theme/Colors";

interface DeleteIconProps {
  color?: Colors | string;
  backgroundColor?: Colors;
}

const Delete: React.FC<DeleteIconProps> = ({
  color = Colors.BLACK,
  backgroundColor = Colors.PRIMARY,
}) => {
  return (
    <Svg width={43} height={47} viewBox={"0 0 43 47"}>
      <G transform="translate(-374.45 -28.409)">
        <G transform="translate(375.95 30)">
          <G transform="translate(0 0)">
            <Path
              d="M40.1,29.421V14.637a7.246,7.246,0,0,0-3.621-6.274L23.675.972a7.237,7.237,0,0,0-7.247,0L3.626,8.381A7.242,7.242,0,0,0,0,14.641v14.78A7.251,7.251,0,0,0,3.626,35.7l12.8,7.409a7.237,7.237,0,0,0,7.247,0l12.8-7.409A7.257,7.257,0,0,0,40.1,29.421Z"
              transform="translate(0 0)"
              fill={backgroundColor}
              stroke={backgroundColor}
              strokeWidth="1"
              fillRule="evenodd"
            />
          </G>
        </G>
        <G transform="translate(297.741 -147.13) rotate(45)">
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
      </G>
    </Svg>
  );
};

export default Delete;
