import React from "react";
import { Path, Svg } from "react-native-svg";

import { Colors } from "../../theme/Colors";

import { IconProps } from "./types";

const Profile: React.FC<IconProps> = ({ color = Colors.BLACK }) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24">
      <Path
        d="M105,24A12,12,0,1,0,93,12,12.014,12.014,0,0,0,105,24ZM102.039,9.808A2.961,2.961,0,1,1,105,12.769,2.964,2.964,0,0,1,102.039,9.808ZM105,21.791A9.737,9.737,0,0,1,99.367,20q-.273-.192-.53-.4a6.418,6.418,0,0,1,12.326,0q-.258.209-.53.4A9.737,9.737,0,0,1,105,21.791Zm0-19.583a9.787,9.787,0,0,1,7.859,15.626,8.631,8.631,0,0,0-4.287-4.293,5.17,5.17,0,1,0-7.145,0,8.675,8.675,0,0,0-4.285,4.294A9.786,9.786,0,0,1,105,2.209Z"
        transform="translate(-93)"
        fill={color}
      />
    </Svg>
  );
};

export default Profile;
