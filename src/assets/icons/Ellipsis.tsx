import React from "react";
import { Path, Svg } from "react-native-svg";

import { Colors } from "../../theme/Colors";

type Props = {
  color?: Colors;
  width?: number;
};

const Ellipsis: React.FC<Props> = ({
  color = Colors.SECONDARY,
  width = 20,
}) => {
  return (
    <Svg width={width} height={width / 4} viewBox="0 0 18 4" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 2C0 0.896 0.896 0 2 0C3.104 0 4 0.896 4 2C4 3.104 3.104 4 2 4C0.896 4 0 3.104 0 2ZM9 0C7.896 0 7 0.896 7 2C7 3.104 7.896 4 9 4C10.104 4 11 3.104 11 2C11 0.896 10.104 0 9 0ZM16 0C14.896 0 14 0.896 14 2C14 3.104 14.896 4 16 4C17.104 4 18 3.104 18 2C18 0.896 17.104 0 16 0Z"
        fill={color}
      />
    </Svg>
  );
};

export default Ellipsis;
