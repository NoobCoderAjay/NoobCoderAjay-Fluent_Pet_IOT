import React from "react";
import { Path, Svg, Rect } from "react-native-svg";

import { Colors } from "src/theme/Colors";

type Props = {
  // color: Colors;
  size?: number;
};

const Reset: React.FC<Props> = ({ size = 35 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Rect width="24" height="24" rx="12" fill="#3692A1" />
      <Path
        d="M6.59961 12C6.59961 13.068 6.91631 14.112 7.50967 15.0001C8.10303 15.8881 8.9464 16.5802 9.93312 16.9889C10.9198 17.3976 12.0056 17.5046 13.0531 17.2962C14.1006 17.0879 15.0628 16.5736 15.818 15.8184C16.5732 15.0631 17.0875 14.101 17.2958 13.0535C17.5042 12.006 17.3973 10.9202 16.9886 9.93348C16.5798 8.94676 15.8877 8.1034 14.9997 7.51004C14.1117 6.91668 13.0676 6.59998 11.9996 6.59998C10.49 6.60565 9.04099 7.19471 7.95561 8.24398L6.59961 9.59998"
        stroke="white"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M6.59961 6.59998V9.59998H9.59961"
        stroke="white"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default Reset;
