import React from "react";
import { Path, Svg } from "react-native-svg";

import { IconProps } from "./types";
import { Colors } from "../../theme/Colors";

const Book: React.FC<IconProps> = ({ color = Colors.BLACK }) => {
  return (
    <Svg width={18} height={16} viewBox="0 0 18 16">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16 12.4025L10 13.7505V3.59747L16 2.25047V12.4025ZM2 2.25047L8 3.59747V13.7505L2 12.4025V2.25047ZM17.625 0.21847C17.387 0.0294697 17.077 -0.0425303 16.78 0.0244697L9 1.77247L1.22 0.0244697C0.922 -0.0435303 0.613 0.0294697 0.375 0.21847C0.138 0.40947 0 0.69647 0 1.00047V13.2025C0 13.6705 0.324 14.0755 0.78 14.1775L8.78 15.9755C8.854 15.9925 8.927 16.0005 9 16.0005C9.073 16.0005 9.146 15.9925 9.22 15.9755L17.22 14.1775C17.676 14.0755 18 13.6705 18 13.2025V1.00047C18 0.69647 17.862 0.40947 17.625 0.21847Z"
        fill={color}
      />
    </Svg>
  );
};

export default Book;
