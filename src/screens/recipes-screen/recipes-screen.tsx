import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RouteProp } from '@react-navigation/native';
import * as React from 'react';
import { useEffect } from 'react';
import { Linking, Text, View } from 'react-native';

import Background from '../../components/background/background';
import { styles } from './recipes-screen.styles';

export default function RecipesScreen({
  navigation,
  route
}: {
  navigation: DrawerNavigationProp<any>;
  route: RouteProp<any>;
}) {
  useEffect(() => {
    Linking.getInitialURL().then(url => {
      console.info(`url`, url);
    });
  });

  return (
    <Background navigation={navigation}>
      <View style={styles.container}>
        <Text style={styles.title} onPress={navigation.openDrawer}>
          I WEKI RECIPES
        </Text>
        <View style={styles.separator} />
      </View>
    </Background>
  );
}
