import React from "react";
import { Path, Svg } from "react-native-svg";

import { Colors } from "../../theme/Colors";

type Props = {
  color: Colors;
  size?: number;
};

const Home: React.FC<Props> = ({ color = Colors.BLACK, size = 25 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 18 20">
      <Path
        fill={color}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.715 0.300469L17.424 8.18447C17.79 8.56047 18 9.08447 18 9.62347V17.9995C18 19.1025 17.153 19.9995 16.112 19.9995H13V10.9995C13 10.4475 12.553 9.99947 12 9.99947H6C5.447 9.99947 5 10.4475 5 10.9995V19.9995H1.889C0.848 19.9995 0 19.1025 0 17.9995V9.62347C0 9.08447 0.21 8.56047 0.575 8.18547L8.285 0.300469C8.662 -0.0845312 9.338 -0.0845312 9.715 0.300469ZM11.0002 18.9999H7.0002V11.9999H11.0002V18.9999Z"
      />
    </Svg>
  );
};

export default Home;
