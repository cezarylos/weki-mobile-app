import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RouteProp } from '@react-navigation/native';

export interface WithDrawerNavigationInterface {
  navigation: DrawerNavigationProp<any>;
  route: RouteProp<any>;
}
