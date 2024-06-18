import React from "react";
import { Path, Svg } from "react-native-svg";
import { Colors } from "../../theme/Colors";

type Props = {
  color: Colors;
  size?: number;
};

const Log: React.FC<Props> = ({ color = Colors.BLACK, size = 25 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20">
      <Path
        fill={color}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13 11H11V13C11 13.55 10.55 14 10 14C9.45 14 9 13.55 9 13V11H7C6.45 11 6 10.55 6 10C6 9.45 6.45 9 7 9H9V7C9 6.45 9.45 6 10 6C10.55 6 11 6.45 11 7V9H13C13.55 9 14 9.45 14 10C14 10.55 13.55 11 13 11ZM10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0Z"
      />
    </Svg>
  );
};

export default Log;
