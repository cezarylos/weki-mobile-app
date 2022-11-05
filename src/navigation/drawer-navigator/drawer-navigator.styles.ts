import { StyleSheet } from 'react-native';

import { Colors, FontSizes, FontTypes } from '../../enums';
import { normalize, normalizeY } from '../../helpers/normalize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY
  },
  closeIcon: {
    position: 'absolute',
    right: normalize(30),
    top: normalizeY(56),
    transform: [{ scale: 1.25 }],
    elevation: 1000
  },
  visualElements: {
    top: 0,
    left: '100%',
    position: 'absolute',
    transform: [{ scaleX: -1 }],
    elevation: 1000,
    zIndex: 1000
  },
  content: {
    paddingHorizontal: normalize(8),
    marginTop: normalize(36),
    flex: 1
  },
  label: {
    marginLeft: normalize(-16),
    fontFamily: FontTypes.MUSEO_MODERNO_REGUALAR,
    color: Colors.WHITE,
    fontSize: FontSizes.SIZE_18
  },
  noIcon: {
    marginLeft: normalize(0),
    fontSize: FontSizes.SIZE_24
  },
  toBottom: {
    // marginTop: normalizeY(8)
  },
  bottomNavigationSceneStyles: {
    backgroundColor: Colors.BACKGROUND
  }
});
