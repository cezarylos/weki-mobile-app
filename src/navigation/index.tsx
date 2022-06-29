/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, NavigationProp } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ReactElement } from 'react';
import { Button, Text, View } from 'react-native';

import { RootNavigatorTabs } from '../enums/navigation-tabs.enum';
import DrawerNavigator from './drawer-navigator/drawer-navigator';

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal

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

function ModalScreen({ navigation }: { navigation: NavigationProp<any> }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}
