import React from "react";
import { Path, Svg } from "react-native-svg";
import { Colors } from "../../theme/Colors";

import { IconProps } from "./types";

const Drawer: React.FC<IconProps> = () => {
  return (
    <Svg width={20} height={14} viewBox="0 0 18 12">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.948 0H17.051C17.573 0 18 0.427 18 0.949V1.051C18 1.573 17.573 2 17.051 2H0.948C0.426 2 0 1.573 0 1.051V0.949C0 0.427 0.426 0 0.948 0ZM17.051 5H0.948C0.426 5 0 5.427 0 5.949V6.051C0 6.573 0.426 7 0.948 7H17.051C17.573 7 18 6.573 18 6.051V5.949C18 5.427 17.573 5 17.051 5ZM17.051 10H0.948C0.426 10 0 10.427 0 10.949V11.051C0 11.573 0.426 12 0.948 12H17.051C17.573 12 18 11.573 18 11.051V10.949C18 10.427 17.573 10 17.051 10Z"
        fill={Colors.PRIMARY_DARK}
      />
    </Svg>
  );
};

export default Drawer;
