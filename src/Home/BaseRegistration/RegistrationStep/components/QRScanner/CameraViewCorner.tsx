import React from 'react';
import { Path, Svg } from 'react-native-svg';

type CornerPosition = 'topLeft' | 'bottomLeft' | 'topRight' | 'bottomRight';

interface Props {
  position: CornerPosition;
}

const CameraViewCorner: React.FC<Props> = ({ position }) => {
  const positionToPathMap: Record<CornerPosition, string> = {
    topLeft: 'M32 2H6C3.79086 2 2 3.79086 2 6V34',
    bottomLeft: 'M32 32H6C3.79086 32 2 30.2091 2 28V-1.84774e-06',
    topRight: 'M0 2H26C28.2091 2 30 3.79086 30 6V34',
    bottomRight: 'M0 32H26C28.2091 32 30 30.2091 30 28V-1.84774e-06',
  };

  return (
    <Svg width={32} height={34} viewBox="0 0 32 34">
      <Path
        d={positionToPathMap[position]}
        stroke="white"
        strokeWidth="4"
        fill="none"
      />
    </Svg>
  );
};

export default CameraViewCorner;
