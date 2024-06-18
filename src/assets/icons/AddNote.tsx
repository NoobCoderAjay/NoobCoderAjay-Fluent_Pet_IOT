import React from 'react';
import { Path, Svg } from 'react-native-svg';

import { Colors } from 'src/theme/Colors';

type Props = {
  color: Colors;
  size: number;
};

const AddNote: React.FC<Props> = ({ color, size = 20 }) => {
  return (
    <Svg width={size} height="20" viewBox="0 0 16 20" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.9997 11H8.9997V10C8.9997 9.448 8.5527 9 7.9997 9C7.4467 9 6.9997 9.448 6.9997 10V11H5.9997C5.4467 11 4.9997 11.448 4.9997 12C4.9997 12.552 5.4467 13 5.9997 13H6.9997V14C6.9997 14.552 7.4467 15 7.9997 15C8.5527 15 8.9997 14.552 8.9997 14V13H9.9997C10.5527 13 10.9997 12.552 10.9997 12C10.9997 11.448 10.5527 11 9.9997 11ZM13.444 18H2.555C2.249 18 2 17.776 2 17.5V2.5C2 2.224 2.249 2 2.555 2H8V5.15C8 6.722 9.217 8 10.714 8H14V17.5C14 17.776 13.751 18 13.444 18ZM10 2.978L12.742 6H10.714C10.32 6 10 5.619 10 5.15V2.978ZM15.74 6.328L10.296 0.328C10.106 0.119 9.838 0 9.555 0H2.555C1.146 0 0 1.122 0 2.5V17.5C0 18.878 1.146 20 2.555 20H13.444C14.853 20 16 18.878 16 17.5V7C16 6.751 15.907 6.512 15.74 6.328Z"
        fill={color}
      />
    </Svg>
  );
};

export default AddNote;
