import { DrawerNavigationProp } from '@react-navigation/drawer/src/types';
import * as React from 'react';
import { ReactElement } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

import { HamburgerSvgComponent } from '../svg/hamburger.svg.component';
import { styles } from './top-bar.styles';

const Logo = require('../../../assets/images/logo.svg');

export default function TopBar({ navigation }: { navigation: DrawerNavigationProp<any> }): ReactElement {
  return (
    <View style={styles.topBar}>
      <Image source={Logo} />
      <TouchableOpacity activeOpacity={0.7} onPress={navigation.openDrawer}>
        <HamburgerSvgComponent />
      </TouchableOpacity>
    </View>
  );
}
