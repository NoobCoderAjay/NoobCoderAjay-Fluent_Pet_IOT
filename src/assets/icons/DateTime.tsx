import React from "react";
import Svg, { Circle, G, Path } from "react-native-svg";

import { Colors } from "../../theme/Colors";

import { IconProps } from "./types";

const Close: React.FC<IconProps> = ({ color = Colors.BLACK }) => {
  return (
    <Svg width={10} height={10} viewBox={"0 0 10 10"}>
      <G>
        <G>
          <Circle
            cx="0.331"
            cy="0.331"
            r="0.331"
            transform="translate(6.873 3.564)"
            fill={color}
          />
          <Path
            d="M8.247.764h-.5V.382a.382.382,0,1,0-.764,0V.764H5.25V.382a.382.382,0,1,0-.764,0V.764H2.768V.382A.382.382,0,1,0,2,.382V.764H1.527A1.529,1.529,0,0,0,0,2.291V8.247A1.529,1.529,0,0,0,1.527,9.775H4.448a.382.382,0,1,0,0-.764H1.527a.765.765,0,0,1-.764-.764V2.291a.765.765,0,0,1,.764-.764H2v.382a.382.382,0,1,0,.764,0V1.527H4.486v.382a.382.382,0,1,0,.764,0V1.527H6.987v.382a.382.382,0,1,0,.764,0V1.527h.5a.765.765,0,0,1,.764.764V4.467a.382.382,0,1,0,.764,0V2.291A1.529,1.529,0,0,0,8.247.764Z"
            fill={color}
          />
          <Path
            d="M272.31,270a2.31,2.31,0,1,0,2.31,2.31A2.313,2.313,0,0,0,272.31,270Zm0,3.856a1.546,1.546,0,1,1,1.546-1.546A1.548,1.548,0,0,1,272.31,273.856Z"
            transform="translate(-264.845 -264.845)"
            fill={color}
          />
          <Path
            d="M371.935,330.783h-.172v-.4a.382.382,0,0,0-.764,0v.783a.382.382,0,0,0,.382.382h.554a.382.382,0,1,0,0-.764Z"
            transform="translate(-363.917 -323.7)"
            fill={color}
          />
          <Circle
            cx="0.331"
            cy="0.331"
            r="0.331"
            transform="translate(5.549 3.564)"
            fill={color}
          />
          <Circle
            cx="0.331"
            cy="0.331"
            r="0.331"
            transform="translate(3.564 5.549)"
            fill={color}
          />
          <Circle
            cx="0.331"
            cy="0.331"
            r="0.331"
            transform="translate(2.24 3.564)"
            fill={color}
          />
          <Circle
            cx="0.331"
            cy="0.331"
            r="0.331"
            transform="translate(2.24 5.549)"
            fill={color}
          />
          <Circle
            cx="0.331"
            cy="0.331"
            r="0.331"
            transform="translate(2.24 6.873)"
            fill={color}
          />
          <Circle
            cx="0.331"
            cy="0.331"
            r="0.331"
            transform="translate(3.564 6.873)"
            fill={color}
          />
          <Circle
            cx="0.331"
            cy="0.331"
            r="0.331"
            transform="translate(3.564 3.564)"
            fill={color}
          />
        </G>
      </G>
    </Svg>
  );
};

export default Close;
