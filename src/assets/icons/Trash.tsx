import React from "react";
import { Path, Svg } from "react-native-svg";

import { Colors } from "../../theme/Colors";
interface Props {
  size?: number;
  color?: Colors;
}

const Trash: React.FC<Props> = ({ color = Colors.RED, size = 28 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.3327 3.77002C11.3327 3.56335 11.618 3.33268 11.9993 3.33268H15.9993C16.3807 3.33268 16.666 3.56335 16.666 3.77002V5.99935H11.3327V3.77002ZM25.9993 5.99935H24.666H19.3327V3.77002C19.3327 2.05802 17.838 0.666016 15.9993 0.666016H11.9993C10.1607 0.666016 8.66602 2.05802 8.66602 3.77002V5.99935H3.33268H1.99935C1.26602 5.99935 0.666016 6.60068 0.666016 7.33268C0.666016 8.06602 1.26602 8.66602 1.99935 8.66602H3.33268V23.3327C3.33268 25.5393 5.12735 27.3327 7.33268 27.3327H20.666C22.8713 27.3327 24.666 25.5393 24.666 23.3327V8.66602H25.9993C26.7327 8.66602 27.3327 8.06602 27.3327 7.33268C27.3327 6.60068 26.7327 5.99935 25.9993 5.99935Z"
        fill={color}
      />
    </Svg>
  );
};

export default Trash;
