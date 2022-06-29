import { StyleSheet } from 'react-native';

import { Colors } from '../../enums';
import { normalizeY } from '../../helpers/normalize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.BACKGROUND,
    position: 'relative'
  },
  element1: {
    position: 'absolute',
    top: 0,
    right: 0
  },
  element2: {
    position: 'absolute',
    top: normalizeY(459.65),
    right: 0
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 0
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  }
});
