import React from 'react';

import { Size } from 'src/theme/Size';
import { Font } from 'src/theme/Text';

import { Body } from '../Text';

interface Props {
  children: React.ReactNode;
}

const Label: React.FC<Props> = ({ children }) => {
  return (
    <Body style={{ fontFamily: Font.LIGHT }} marginBottom={Size.XS}>
      {children}
    </Body>
  );
};

export default Label;
