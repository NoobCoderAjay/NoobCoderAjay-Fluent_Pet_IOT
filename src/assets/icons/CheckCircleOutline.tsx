import React from "react";
import { Path, Svg } from "react-native-svg";

import { Colors } from "../../theme/Colors";

interface Props {
  size?: number;
  marginBottom?: number;
}

const CheckCircleOutline: React.FC<Props> = ({ size = 68, marginBottom }) => {
  return (
    <Svg
      style={{ marginBottom }}
      width={size}
      height={size}
      viewBox="0 0 162.5 162.5"
      preserveAspectRatio="none"
    >
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M103.475 52.2053L72.7299 92.5784L59.4618 75.6297C56.6993 72.0872 51.5805 71.4697 48.0543 74.2403C44.5199 77.0028 43.8943 82.1134 46.6649 85.6397L66.4168 110.884C67.9605 112.85 70.3168 113.996 72.8193 113.996H72.8761C75.3868 113.988 77.7593 112.802 79.2786 110.795L116.402 62.0447C119.124 58.4697 118.433 53.3834 114.858 50.6616C111.275 47.9397 106.189 48.6384 103.475 52.2053ZM81.5 146.5C45.6606 146.5 16.5 117.339 16.5 81.5C16.5 45.6606 45.6606 16.5 81.5 16.5C117.339 16.5 146.5 45.6606 146.5 81.5C146.5 117.339 117.339 146.5 81.5 146.5ZM81.5 0.25C36.6256 0.25 0.25 36.6338 0.25 81.5C0.25 126.366 36.6256 162.75 81.5 162.75C126.374 162.75 162.75 126.366 162.75 81.5C162.75 36.6338 126.374 0.25 81.5 0.25Z"
        fill={Colors.GREY_4}
      />
    </Svg>
  );
};

export default CheckCircleOutline;
