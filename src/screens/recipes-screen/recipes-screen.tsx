import { DrawerNavigationProp } from '@react-navigation/drawer';
import * as React from 'react';
import { Text, View } from 'react-native';

import Background from '../../components/background/background';
import { styles } from './recipes-screen.styles';

export default function RecipesScreen({ navigation }: { navigation: DrawerNavigationProp<any> }) {
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
