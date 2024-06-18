import React from "react";
import { Path, Svg } from "react-native-svg";

import { Colors } from "../../theme/Colors";

import { IconProps } from "./types";

const Note: React.FC<IconProps> = ({ color = Colors.WHITE, width = 20 }) => {
  return (
    <Svg width={width} height={width} viewBox="0 0 24 20" fill="none">
      <Path
        d="M12 3.5L2.77472 0.864206C2.1359 0.681687 1.5 1.16135 1.5 1.82573V15.7101C1.5 16.1732 1.81791 16.5757 2.26838 16.6829L12 19M12 3.5L21.2253 0.864206C21.8641 0.681687 22.5 1.16135 22.5 1.82573V15.7101C22.5 16.1732 22.1821 16.5757 21.7316 16.6829L12 19M12 3.5V19"
        stroke={color}
        stroke-width="1.5"
      />
    </Svg>
  );
};

export default Note;
