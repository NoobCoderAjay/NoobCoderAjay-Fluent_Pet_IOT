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
import { PolygonShapePoints } from "./helpers/constants";

interface PolygonImageContainerProps {
  imageSource?: any;
  pusherName?: string;
  imageLoaded: boolean;
  intialStyle?: ViewStyle;
  isStatusShare?: boolean;
  isIntialPage?: boolean;
  size?: number;
}

const PolygonImageContainer: React.FC<PolygonImageContainerProps> = ({
  imageSource,
  pusherName,
  imageLoaded,
  isStatusShare = false,
  intialStyle = {},
  isIntialPage = false,
  size = 150,
}) => {
  const PENTAGONMASK = "pentagonMask";

  const scalePoints = (points: string, scale: number): string => {
    const originalWidth = 150;
    const originalHeight = 145;

    return points
      .split(", ")
      .map((point) => {
        const [x, y] = point.split(" ").map(Number);
        return `${(x / originalWidth) * size} ${(y / originalHeight) * size}`;
      })
      .join(", ");
  };

  const scaledPoints = scalePoints(PolygonShapePoints.HEXAGON, size / 150);

  return (
    <View
      style={[
        isIntialPage ? {} : styles.container,
        { width: size, height: size },
      ]}
    >
      <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <Defs>
          <Mask id={PENTAGONMASK}>
            <Polygon points={scaledPoints} fill="white" />
          </Mask>
        </Defs>
        {imageSource ? (
          <>
            <Image
              x={isStatusShare ? `${-size / 5}` : "0"}
              y="0"
              width={size}
              height={size}
              href={imageSource}
              mask={`url(#${PENTAGONMASK})`}
            />
            {!imageLoaded && (
              <ActivityIndicator
                style={[styles.imageLoader, { top: size / 2, left: size / 2 }]}
                color={Colors.PRIMARY}
              />
            )}
          </>
        ) : (
          <Rect
            x="0"
            y="0"
            width={size}
            height={size}
            fill={Colors.PRIMARY}
            mask={`url(#${PENTAGONMASK})`}
          />
        )}
      </Svg>
      {!imageSource && (
        <View
          style={[
            styles.intialContainer,
            intialStyle,
            { width: size, height: size },
          ]}
        >
          <Text style={[styles.intialtext, { fontSize: size / 3 }]}>
            {getNameIntial(pusherName)}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    right: SizeV2.XL,
  },
  intialContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  intialtext: {
    color: Colors.WHITE,
  },
  imageLoader: {
    position: "absolute",
    transform: [{ translateX: -12 }, { translateY: -12 }],
  },
});

export default PolygonImageContainer;
