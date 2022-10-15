import { NavigationContainer, NavigationProp } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
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
