import { StyleSheet } from 'react-native';

import { Colors } from '../../enums';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.BACKGROUND
  }
});
