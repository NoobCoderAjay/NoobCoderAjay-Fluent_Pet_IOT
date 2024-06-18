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
        d="M2.5 0H6.5C7.603 0 8.5 0.897 8.5 2V6C8.5 7.103 7.603 8 6.5 8H2.5C1.397 8 0.5 7.103 0.5 6V2C0.5 0.897 1.397 0 2.5 0ZM12.5 0H16.5C17.603 0 18.5 0.897 18.5 2V6C18.5 7.103 17.603 8 16.5 8H12.5C11.397 8 10.5 7.103 10.5 6V2C10.5 0.897 11.397 0 12.5 0ZM6.5 10H2.5C1.397 10 0.5 10.897 0.5 12V16C0.5 17.103 1.397 18 2.5 18H6.5C7.603 18 8.5 17.103 8.5 16V12C8.5 10.897 7.603 10 6.5 10ZM12.5 10H16.5C17.603 10 18.5 10.897 18.5 12V16C18.5 17.103 17.603 18 16.5 18H12.5C11.397 18 10.5 17.103 10.5 16V12C10.5 10.897 11.397 10 12.5 10Z"
      />
    </Svg>
  );
};

export default Log;
