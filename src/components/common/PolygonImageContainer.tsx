import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  ViewStyle,
} from "react-native";
import Svg, { Defs, Image, Mask, Polygon, Rect } from "react-native-svg";
import { Colors } from "src/theme/Colors";
import { SizeV2 } from "src/theme/Size";
import { getNameIntial } from "./helpers/getNameIntial";

interface PolygonImageContainerProps {
  imageSource?: any;
  pusherName?: string;
  imageLoaded: boolean;
  intialStyle?: ViewStyle;
  points: string;
  isStatusShare?: boolean;
  isIntialPage?: boolean;
}

const PolygonImageContainer: React.FC<PolygonImageContainerProps> = ({
  imageSource,
  pusherName,
  imageLoaded,
  points,
  isStatusShare = false,
  intialStyle = {},
  isIntialPage = false,
}) => {
  const PENTAGONMASK = "pentagonMask";
  return (
    <View style={isIntialPage ? {} : styles.container}>
      <Svg opacity={1} fillOpacity={1} width={imageSize} height={imageSize}>
        <Defs>
          <Mask fillOpacity={1} id={PENTAGONMASK}>
            <Polygon
              opacity={1}
              fillOpacity={1}
              points={points}
              fill={Colors.PRIMARY}
            />
          </Mask>
        </Defs>
        {imageSource ? (
          <>
            <Image
              x={isStatusShare ? "-30" : "0"}
              y="0"
              width={imageSize}
              height={imageSize}
              href={imageSource}
              opacity={1}
              mask={`url(#${PENTAGONMASK})`}
            />
            {!imageLoaded ? (
              <View style={styles.imageLoader}>
                <ActivityIndicator color={Colors.PRIMARY} />
              </View>
            ) : null}
          </>
        ) : (
          <Rect
            x="0"
            y="0"
            width={imageSize}
            height={imageSize}
            fill={Colors.PRIMARY}
            mask={`url(#${PENTAGONMASK})`}
          />
        )}
      </Svg>
      {!imageSource ? (
        <View style={{ ...styles.intialContainer, ...intialStyle }}>
          <Text style={styles.intialtext}>{getNameIntial(pusherName)}</Text>
        </View>
      ) : null}
    </View>
  );
};

const imageSize = 150;
const INTIAL_CONTAINER_SIZE = 200;
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    right: SizeV2.XL,
  },
  intialContainer: {
    position: "absolute",
    width: INTIAL_CONTAINER_SIZE,
    height: INTIAL_CONTAINER_SIZE,
    justifyContent: "center",
    alignItems: "center",
  },
  intialtext: {
    fontSize: SizeV2.X2_L,
  },
  imageLoader: {
    position: "absolute",
    top: 50,
    right: 65,
  },
});
export default PolygonImageContainer;
