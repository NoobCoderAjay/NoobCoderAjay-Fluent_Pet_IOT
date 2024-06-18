import React from 'react';

import { Colors } from 'src/theme/Colors';

import Button, { ButtonProps } from './Button';

const SecondaryButton: React.FC<ButtonProps> = ({ ...props }) => (
  <Button
    color={Colors.TRANSPARENT}
    labelStyle={{ color: Colors.PRIMARY }}
    outline
    {...props}
  />
);

export default SecondaryButton;
