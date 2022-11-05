import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { DrawerContentComponentProps } from '@react-navigation/drawer/src/types';
import * as React from 'react';
import { ReactElement } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useAuth0 } from 'react-native-auth0';

import { LanguageOrchestrator } from '../../_locales/language.orchestrator';
import { CloseSvgComponent, LabelsSvgComponent, SettingsSvgComponent } from '../../components/svg';
import { NavigatorScreens } from '../../enums/navigation-screens.enum';
import { DrawerNavigatorTabs } from '../../enums/navigation-tabs.enum';
import { navigateTo } from '../../helpers/navigateTo';
import { normalize } from '../../helpers/normalize';
import { useAppDispatch } from '../../store/store';
import BottomTabNavigator from '../bottom-tab-navigator/bottom-tab-navigator';
import DrawerElements from './drawer-elements';
import { styles } from './drawer-navigator.styles';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props: DrawerContentComponentProps): ReactElement {
  const {
    navigation,
    navigation: { navigate }
  } = props;
  const { authorize, user, clearSession } = useAuth0();

  const dispatch = useAppDispatch();

  const onLogin = async (): Promise<void> => {
    try {
      await authorize();
      navigation.closeDrawer();
    } catch (e) {
      console.log(e);
    }
  };

  const onLogout = async (): Promise<void> => {
    try {
      await clearSession();
      navigation.closeDrawer();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <DrawerContentScrollView {...props} style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} onPress={navigation.closeDrawer} style={styles.closeIcon}>
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
          onPress={navigateTo(navigate, NavigatorScreens.LABELS)}
        />
        <DrawerItem
          icon={(): ReactElement => <SettingsSvgComponent />}
          labelStyle={styles.label}
          label="settings"
          onPress={navigateTo(navigate, NavigatorScreens.RECIPES)}
        />
        {user ? (
          <DrawerItem
            labelStyle={[styles.label, styles.noIcon, styles.toBottom]}
            label={LanguageOrchestrator.drawer.logout}
            onPress={onLogout}
          />
        ) : (
          <DrawerItem
            labelStyle={[styles.label, styles.noIcon, styles.toBottom]}
            label={LanguageOrchestrator.drawer.login}
            onPress={onLogin}
          />
        )}
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
