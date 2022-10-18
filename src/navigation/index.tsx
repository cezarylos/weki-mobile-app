import { NavigationContainer, NavigationProp } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ReactElement } from 'react';
import { Button, Linking, Text, View } from 'react-native';

import { RootNavigatorTabs } from '../enums/navigation-tabs.enum';
import RecipesScreen from '../screens/recipes-screen/recipes-screen';
import DrawerNavigator from './drawer-navigator/drawer-navigator';

const linking = {
  prefixes: ['eu.weki://'],
  // Custom function to get the URL which was used to open the app
  async getInitialURL() {
    // As a fallback, you may want to do the default deep link handling
    const url = await Linking.getInitialURL();

    return url;
  },
  // Custom function to subscribe to incoming links
  subscribe(listener) {
    // Listen to incoming links from deep linking
    const linkingSubscription = Linking.addEventListener('url', ({ url }) => {
      console.error(url);
      listener(url);
    });

    return () => {
      linkingSubscription.remove();
    };
  },
  config: {
    screens: {
      main: {
        screens: {
          landing: {
            screens: {
              recipes: 'connect/auth0:id_token'
            }
          }
        }
      }
    }
  }
};

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const RootStack = createStackNavigator();

function RootNavigator(): ReactElement {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Group>
        <RootStack.Screen name={RootNavigatorTabs.MAIN} component={DrawerNavigator} />
      </RootStack.Group>
      <RootStack.Group screenOptions={{ presentation: 'modal' }}>
        <RootStack.Screen name={RootNavigatorTabs.MODAL} component={ModalScreen} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
}

export function ModalScreen({ navigation }: { navigation: NavigationProp<any> }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}
