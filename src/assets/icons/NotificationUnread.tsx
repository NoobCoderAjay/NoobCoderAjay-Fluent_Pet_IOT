import React from "react";
import { Path, Svg, Rect } from "react-native-svg";

import { Colors } from "src/theme/Colors";

type Props = {
  // color: Colors;
  size?: number;
};

const NotificatonUnread: React.FC<Props> = ({ size = 10 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 9 8" fill="none">
      <Path
        d="M2.57436 7.14021L4.09075 7.79513C4.74867 8.07929 5.50834 7.9897 6.08211 7.56029L7.85022 6.23702C8.48005 5.76565 8.77504 4.96885 8.60402 4.20099L8.15268 2.1746C7.96026 1.3107 7.22292 0.676006 6.34 0.614278L4.01414 0.451666C3.47334 0.413857 2.94036 0.597204 2.53727 0.959714L1.36983 2.00963C0.762699 2.55564 0.548458 3.41589 0.828593 4.18287L1.48875 5.99029C1.67728 6.50646 2.06988 6.92232 2.57436 7.14021Z"
        fill="#007180"
      />
    </Svg>
  );
};

export default NotificatonUnread;
