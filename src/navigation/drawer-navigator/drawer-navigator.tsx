import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { DrawerContentComponentProps } from '@react-navigation/drawer/src/types';
import * as React from 'react';
import { ReactElement } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { CloseSvgComponent, LabelsSvgComponent, SettingsSvgComponent } from '../../components/svg';
import { NavigatorScreens } from '../../enums/navigation-screens.enum';
import { DrawerNavigatorTabs } from '../../enums/navigation-tabs.enum';
import { normalize } from '../../helpers/normalize';
import BottomTabNavigator from '../bottom-tab-navigator/bottom-tab-navigator';
import DrawerElements from './drawer-elements';
import { styles } from './drawer-navigator.styles';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props: DrawerContentComponentProps): ReactElement {
  return (
    <DrawerContentScrollView {...props} style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} onPress={props.navigation.closeDrawer} style={styles.closeIcon}>
        <CloseSvgComponent />
      </TouchableOpacity>
      <View style={styles.visualElements}>
        <DrawerElements />
      </View>
      <View style={styles.content}>
        <DrawerItem
          icon={(): ReactElement => <LabelsSvgComponent />}
          labelStyle={styles.label}
          label={'labels'}
          onPress={(): void => props.navigation.navigate(NavigatorScreens.LABELS)}
        />
        <DrawerItem
          icon={(): ReactElement => <SettingsSvgComponent />}
          labelStyle={styles.label}
          label="settings"
          onPress={(): void => props.navigation.navigate(DrawerNavigatorTabs.SETTINGS)}
        />
      </View>
    </DrawerContentScrollView>
  );
}

function DrawerNavigator(): ReactElement {
  return (
    <Drawer.Navigator
      initialRouteName={DrawerNavigatorTabs.LANDING}
      screenOptions={{
        drawerPosition: 'right',
        headerShown: false,
        drawerType: 'front',
        drawerStyle: { width: normalize(215) },
        swipeEdgeWidth: 0
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name={DrawerNavigatorTabs.LANDING}
        options={{ sceneContainerStyle: styles.bottomNavigationSceneStyles }}
        component={BottomTabNavigator}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
