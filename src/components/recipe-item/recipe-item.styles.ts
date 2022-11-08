import { StyleSheet } from 'react-native';

import { Colors } from '../../enums';
import { normalize } from '../../helpers/normalize';

export const styles = StyleSheet.create({
  container: {
    width: normalize(100),
    elevation: 1
  },
  categoryContainer: {
    width: normalize(150)
  },
  box: {
    width: normalize(100),
    height: normalize(135),
    backgroundColor: 'rgba(252, 205, 172, 0.85)',
    borderRadius: normalize(12),
    padding: normalize(8),
    paddingTop: normalize(18),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  categoryBox: {
    width: normalize(150),
    height: normalize(210)
  },
  isLikedContainer: {
    position: 'absolute',
    top: normalize(6),
    right: normalize(24),
    transform: [{ scale: 0.9 }]
  },
  imageContainer: {
    width: '100%'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  label: {
    paddingTop: normalize(8),
    paddingLeft: normalize(12),
    color: Colors.TEXT_PRIMARY,
    lineHeight: normalize(16)
  },
  categoryLabel: {
    textTransform: 'uppercase',
    paddingTop: normalize(8),
    lineHeight: normalize(20)
  }
});
