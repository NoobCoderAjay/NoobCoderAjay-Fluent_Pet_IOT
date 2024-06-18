import React from "react";
import { Path, Svg } from "react-native-svg";
import { Colors } from "../../theme/Colors";

type Props = {
  color: Colors;
  size: number;
};

const ButtonInfoPresses: React.FC<Props> = ({ color, size = 20 }) => {
  return (
    <Svg width={size} height="20" viewBox="0 0 20 20" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10 13C8.346 13 7 11.654 7 10C7 8.346 8.346 7 10 7C11.654 7 13 8.346 13 10C13 11.654 11.654 13 10 13ZM10 5C7.243 5 5 7.243 5 10C5 12.757 7.243 15 10 15C12.757 15 15 12.757 15 10C15 7.243 12.757 5 10 5ZM10 18C5.589 18 2 14.411 2 10C2 5.589 5.589 2 10 2C14.411 2 18 5.589 18 10C18 14.411 14.411 18 10 18ZM10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0Z"
        fill={color}
      />
    </Svg>
  );
};

export default ButtonInfoPresses;
