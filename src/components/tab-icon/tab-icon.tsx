import * as React from 'react';
import { ReactElement, ReactNode } from 'react';
import { View } from 'react-native';

import { Colors } from '../../enums';
import { styles } from './tab-icon.styles';

interface TabIconInterface {
  children: ReactNode | ReactNode[];
  isFocused: boolean;
}

const TabIcon = ({ children, isFocused }: TabIconInterface): ReactElement => (
  <View style={[styles.container, isFocused && { backgroundColor: Colors.MENU_ITEM_FOCUSED }]}>{children}</View>
);

export default TabIcon;
