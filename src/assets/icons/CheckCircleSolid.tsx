import React from "react";
import { Path, Svg } from "react-native-svg";

import { Colors } from "../../theme/Colors";

interface Props {
  size?: number;
  marginBottom?: number;
}

const CheckCircleSolid: React.FC<Props> = ({ size = 68, marginBottom }) => {
  return (
    <Svg
      style={{ marginBottom }}
      width={size}
      height={size}
      viewBox="0 0 68 68"
      preserveAspectRatio="none"
    >
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M48.318 26.0182L33.0913 46.0182C32.4647 46.8415 31.4947 47.3282 30.4613 47.3349H30.438C29.4147 47.3349 28.448 46.8615 27.8147 46.0549L19.708 35.6982C18.5747 34.2515 18.828 32.1549 20.278 31.0215C21.7247 29.8849 23.8247 30.1382 24.958 31.5915L30.4013 38.5449L43.0147 21.9815C44.128 20.5182 46.218 20.2315 47.688 21.3482C49.1513 22.4649 49.4347 24.5549 48.318 26.0182ZM34.0013 0.668213C15.5913 0.668213 0.667999 15.5915 0.667999 34.0015C0.667999 52.4082 15.5913 67.3349 34.0013 67.3349C52.4113 67.3349 67.3347 52.4082 67.3347 34.0015C67.3347 15.5915 52.4113 0.668213 34.0013 0.668213Z"
        fill={Colors.GREEN}
      />
    </Svg>
  );
};

export default CheckCircleSolid;
