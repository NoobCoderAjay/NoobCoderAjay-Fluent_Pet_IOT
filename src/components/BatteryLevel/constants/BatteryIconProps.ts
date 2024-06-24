import { Colors } from 'src/theme/Colors';

import { BatteryState } from './BatteryState';

export const BatteryIconProps = {
  [BatteryState.FULL]: {
    name: 'battery-full',
    color: Colors.GREEN,
  },
  [BatteryState.THREE_QUARTERS]: {
    name: 'battery-three-quarters',
    color: Colors.GREEN,
  },
  [BatteryState.HALF]: {
    name: 'battery-half',
    color: Colors.GREEN,
  },
  [BatteryState.QUARTER]: {
    name: 'battery-quarter',
    color: Colors.ORANGE,
  },
  [BatteryState.EMPTY]: {
    name: 'battery-empty',
    color: Colors.RED,
  },
  [BatteryState.CHARGING]: {
    name: 'battery-charging-sharp',
    color: Colors.BLUE,
  },
  [BatteryState.UNAVAILABLE]: {
    name: 'battery-full',
    color: Colors.GREY_DARK,
  },
} as const;
