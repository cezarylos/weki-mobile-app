import { DrawerNavigationProp } from '@react-navigation/drawer/src/types';
import * as React from 'react';
import { ReactElement } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

import { ACTIVE_OPACITY } from '../../constants/shared';
import { LogoSvgComponent } from '../svg';
import { HamburgerSvgComponent } from '../svg/hamburger.svg.component';
import { styles } from './top-bar.styles';

export default function TopBar({ navigation }: { navigation: DrawerNavigationProp<any> }): ReactElement {
  return (
    <View style={styles.topBar}>
      <LogoSvgComponent />
      <TouchableOpacity activeOpacity={ACTIVE_OPACITY} onPress={navigation.openDrawer}>
        <HamburgerSvgComponent />
      </TouchableOpacity>
    </View>
  );
}
