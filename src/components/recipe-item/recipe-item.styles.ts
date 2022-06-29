import { StyleSheet } from 'react-native';

import { Colors } from '../../enums';
import { normalize } from '../../helpers/normalize';

export const styles = StyleSheet.create({
  container: {
    width: normalize(145)
  },
  box: {
    width: normalize(145),
    height: normalize(195),
    backgroundColor: 'rgba(252, 205, 172, 0.85)',
    borderRadius: normalize(12),
    padding: normalize(8),
    paddingTop: normalize(18),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  isLikedContainer: {
    // position: 'absolute',
    // top: normalize(18),
    // right: normalize(32)
  },
  imageContainer: {
    width: normalize(125)
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
  }
});
