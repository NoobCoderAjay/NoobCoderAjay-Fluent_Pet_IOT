import React from 'react';

import { Colors } from 'src/theme/Colors';

export type AvatarBadgeContent = number | React.ReactNode;

export interface AvatarBadge {
  content: AvatarBadgeContent;
  color?: Colors;
}
