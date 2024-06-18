import React from "react";
import { StyleSheet } from "react-native";
import { G, Path, Svg } from "react-native-svg";

import { Colors } from "../../theme/Colors";

import { IconProps } from "./types";

const Note: React.FC<IconProps> = ({ color = Colors.BLACK }) => {
  return (
    <Svg width={28} height={28} viewBox="0 0 28 26" style={styles.icon}>
      <G>
        <G transform="translate(0 0)">
          <Path
            d="M25.944,9.924a2.351,2.351,0,0,0-3.308.288L20.4,12.855V5.191a2.364,2.364,0,0,0-.733-1.707L16.689.652A2.344,2.344,0,0,0,15.068,0H2.354A2.357,2.357,0,0,0,0,2.359V24.436A2.357,2.357,0,0,0,2.354,26.79H18.048A2.357,2.357,0,0,0,20.4,24.436V20.148l5.831-6.907A2.353,2.353,0,0,0,25.944,9.924ZM15.694,1.872c3.14,2.982,2.917,2.764,2.975,2.841H15.694Zm3.139,22.564a.786.786,0,0,1-.785.785H2.354a.786.786,0,0,1-.785-.785V2.359a.786.786,0,0,1,.785-.785H14.125V5.5a.785.785,0,0,0,.785.785h3.924v8.429L15.5,18.66a2.366,2.366,0,0,0-.486.966l-.729,3.053a.785.785,0,0,0,1.075.9l2.88-1.248a2.366,2.366,0,0,0,.6-.374Zm-1.866-5.083,1.2,1.009-.267.317a.788.788,0,0,1-.289.216l-1.44.624.365-1.526a.786.786,0,0,1,.16-.32Zm2.214-.191-1.2-1.008,4.337-5.133,1.2,1.006Zm5.852-6.932-.5.6-1.2-1.006.507-.6a.782.782,0,0,1,1.2,1.007Z"
            transform="translate(0 -0.005)"
            fill={color}
          />
        </G>
      </G>
      <G transform="translate(3.139 4.708)">
        <G>
          <Path
            d="M68.63,90H60.783a.785.785,0,0,0,0,1.569H68.63a.785.785,0,0,0,0-1.569Z"
            transform="translate(-59.998 -90.003)"
            fill={color}
          />
        </G>
      </G>
      <G transform="translate(3.139 9.469)">
        <G>
          <Path
            id="Path_213"
            data-name="Path 213"
            d="M73.338,181H60.783a.785.785,0,1,0,0,1.569H73.338a.785.785,0,1,0,0-1.569Z"
            transform="translate(-59.998 -181.001)"
            fill={color}
          />
        </G>
      </G>
      <G transform="translate(3.139 14.177)">
        <G>
          <Path
            d="M73.338,271H60.783a.785.785,0,1,0,0,1.569H73.338a.785.785,0,1,0,0-1.569Z"
            transform="translate(-59.998 -271)"
            fill={color}
          />
        </G>
      </G>
      <G transform="translate(3.139 18.885)">
        <G>
          <Path
            d="M68.63,361H60.783a.785.785,0,0,0,0,1.569H68.63a.785.785,0,0,0,0-1.569Z"
            transform="translate(-59.998 -360.998)"
            fill={color}
          />
        </G>
      </G>
    </Svg>
  );
};

export default Note;

const styles = StyleSheet.create({
  icon: {
    marginLeft: 9,
  },
});
