import React from "react";
import Svg, { G, Path } from "react-native-svg";

import { Colors } from "../../theme/Colors";

import { IconProps } from "./types";

const CalendarSmall: React.FC<IconProps> = ({ color = Colors.BLACK }) => {
  return (
    <Svg width={18} height={18} viewBox={"0 0 18 18"}>
      <G>
        <G>
          <Path
            d="M15.441,1.853H13.588V.618a.618.618,0,1,0-1.235,0V1.853H4.941V.618a.618.618,0,1,0-1.235,0V1.853H1.853A1.853,1.853,0,0,0,0,3.706V15.441a1.853,1.853,0,0,0,1.853,1.853H15.441a1.853,1.853,0,0,0,1.853-1.853V3.706A1.853,1.853,0,0,0,15.441,1.853Zm.618,13.588a.618.618,0,0,1-.618.618H1.853a.618.618,0,0,1-.618-.618V7.412H16.058Zm0-9.264H1.235V3.706a.618.618,0,0,1,.618-.618H3.706V4.323a.618.618,0,0,0,1.235,0V3.088h7.412V4.323a.618.618,0,1,0,1.235,0V3.088h1.853a.618.618,0,0,1,.618.618V6.176Z"
            fill={color}
          />
        </G>
      </G>
      <G transform="translate(3.088 8.647)">
        <G>
          <Path
            d="M87.186,238.933H85.951a.618.618,0,1,0,0,1.235h1.235a.618.618,0,1,0,0-1.235Z"
            transform="translate(-85.333 -238.933)"
            fill={color}
          />
        </G>
      </G>
      <G transform="translate(7.412 8.647)">
        <G>
          <Path
            d="M206.653,238.933h-1.235a.618.618,0,0,0,0,1.235h1.235a.618.618,0,0,0,0-1.235Z"
            transform="translate(-204.8 -238.933)"
            fill={color}
          />
        </G>
      </G>
      <G transform="translate(11.735 8.647)">
        <G>
          <Path
            d="M326.12,238.933h-1.235a.618.618,0,1,0,0,1.235h1.235a.618.618,0,0,0,0-1.235Z"
            transform="translate(-324.267 -238.933)"
            fill={color}
          />
        </G>
      </G>
      <G transform="translate(3.088 11.117)">
        <G>
          <Path
            d="M87.186,307.2H85.951a.618.618,0,0,0,0,1.235h1.235a.618.618,0,0,0,0-1.235Z"
            transform="translate(-85.333 -307.2)"
            fill={color}
          />
        </G>
      </G>
      <G transform="translate(7.412 11.117)">
        <G>
          <Path
            d="M206.653,307.2h-1.235a.618.618,0,0,0,0,1.235h1.235a.618.618,0,0,0,0-1.235Z"
            transform="translate(-204.8 -307.2)"
            fill={color}
          />
        </G>
      </G>
      <G transform="translate(11.735 11.117)">
        <G>
          <Path
            d="M326.12,307.2h-1.235a.618.618,0,1,0,0,1.235h1.235a.618.618,0,0,0,0-1.235Z"
            transform="translate(-324.267 -307.2)"
            fill={color}
          />
        </G>
      </G>
      <G transform="translate(3.088 13.588)">
        <G>
          <Path
            d="M87.186,375.467H85.951a.618.618,0,1,0,0,1.235h1.235a.618.618,0,1,0,0-1.235Z"
            transform="translate(-85.333 -375.467)"
            fill={color}
          />
        </G>
      </G>
      <G transform="translate(7.412 13.588)">
        <G>
          <Path
            d="M206.653,375.467h-1.235a.618.618,0,0,0,0,1.235h1.235a.618.618,0,0,0,0-1.235Z"
            transform="translate(-204.8 -375.467)"
            fill={color}
          />
        </G>
      </G>
      <G transform="translate(11.735 13.588)">
        <G>
          <Path
            d="M326.12,375.467h-1.235a.618.618,0,0,0,0,1.235h1.235a.618.618,0,0,0,0-1.235Z"
            transform="translate(-324.267 -375.467)"
            fill={color}
          />
        </G>
      </G>
    </Svg>
  );
};

export default CalendarSmall;
