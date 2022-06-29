import { ReactNode } from 'react';

import { FontSizes } from '../../enums';
import { FontTypes } from '../../enums';

export interface TextProps {
  fontType: FontTypes;
  fontSize: FontSizes;
  key?: string;
  animated?: boolean;
  style?: { [key: string]: any };
  children?: ReactNode;
  numberOfLines?: number;
  onPress?: () => Promise<void> | void;
}
