import * as React from 'react';
import { ReactElement, ReactNode } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { ACTIVE_OPACITY } from '../../constants/shared';
import { Colors } from '../../enums';
import { styles } from './tab-icon.styles';

interface TabIconInterface {
  children: ReactNode | ReactNode[];
  isFocused: boolean;
  onPress: () => void;
}

const TabIcon = ({ children, isFocused, onPress }: TabIconInterface): ReactElement => (
  <TouchableOpacity
    activeOpacity={ACTIVE_OPACITY}
    onPress={onPress}
    style={[styles.container, isFocused && { backgroundColor: Colors.MENU_ITEM_FOCUSED }]}
  >
    {children}
  </TouchableOpacity>
);

export default TabIcon;
