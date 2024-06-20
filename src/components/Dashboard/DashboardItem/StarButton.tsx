import React from "react";
import { Path, Svg } from "react-native-svg";

import { AnimatedPressable } from "src/components/common";

interface Props {
  isChecked?: boolean;
  size?: number;
  onPress?: () => void;
}

export const StarButton: React.FC<Props> = ({
  size = 20,
  isChecked,
  onPress,
}) => {
  return (
    <AnimatedPressable style={{ height: size, width: size }} onPress={onPress}>
      {isChecked ? (
        <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.5614 19.0009C15.4034 19.0009 15.2444 18.9639 15.0984 18.8879L9.99938 16.2239L4.90138 18.8879C4.56338 19.0629 4.15538 19.0329 3.84938 18.8089C3.54138 18.5849 3.38838 18.2059 3.45338 17.8309L4.42438 12.2029L0.304379 8.2179C0.0303789 7.9529 -0.0686211 7.5549 0.0483789 7.1909C0.165379 6.8289 0.478379 6.5639 0.856379 6.5099L6.55638 5.6819L9.10438 0.555898C9.44238 -0.124102 10.5574 -0.124102 10.8954 0.555898L13.4434 5.6819L19.1434 6.5099C19.5214 6.5639 19.8344 6.8289 19.9514 7.1909C20.0684 7.5549 19.9694 7.9529 19.6954 8.2179L15.5754 12.2029L16.5464 17.8309C16.6114 18.2059 16.4574 18.5849 16.1504 18.8089C15.9764 18.9369 15.7694 19.0009 15.5614 19.0009Z"
            fill="#FFB046"
          />
        </Svg>
      ) : (
        <Svg width={size} height={size} viewBox="2 2 20 20" fill="none">
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.9995 16.05C12.1585 16.05 12.3175 16.088 12.4625 16.163L16.2315 18.133L15.5145 13.976C15.4575 13.65 15.5665 13.318 15.8045 13.087L18.8405 10.151L14.6375 9.539C14.3125 9.492 14.0315 9.289 13.8855 8.995L11.9995 5.201L10.1135 8.995C9.96755 9.289 9.68655 9.492 9.36155 9.539L5.15855 10.151L8.19455 13.087C8.43255 13.318 8.54155 13.65 8.48455 13.976L7.76755 18.133L11.5365 16.163C11.6815 16.088 11.8405 16.05 11.9995 16.05ZM17.5615 20.955C17.4025 20.955 17.2435 20.918 17.0985 20.842L11.9995 18.178L6.90055 20.842C6.56255 21.018 6.15455 20.987 5.84955 20.763C5.54155 20.539 5.38855 20.16 5.45255 19.785L6.42455 14.157L2.30455 10.172C2.02955 9.907 1.93155 9.509 2.04855 9.146C2.16455 8.783 2.47855 8.519 2.85555 8.464L8.55655 7.636L11.1035 2.51C11.4415 1.83 12.5575 1.83 12.8955 2.51L15.4425 7.636L21.1435 8.464C21.5205 8.519 21.8345 8.783 21.9505 9.146C22.0675 9.509 21.9695 9.907 21.6945 10.172L17.5745 14.157L18.5465 19.785C18.6105 20.16 18.4575 20.539 18.1495 20.763C17.9765 20.891 17.7695 20.955 17.5615 20.955Z"
            fill="#9A96B2"
          />
        </Svg>
      )}
    </AnimatedPressable>
  );
};