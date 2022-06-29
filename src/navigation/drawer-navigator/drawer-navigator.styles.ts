import { StyleSheet } from 'react-native';

import { Colors, FontTypes } from '../../enums';
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
    transform: [{ scale: 1.25 }]
  },
  visualElements: {
    top: 0,
    left: '100%',
    position: 'absolute',
    transform: [{ scaleX: -1 }]
  },
  content: {
    paddingHorizontal: normalize(8),
    marginTop: normalize(36)
  },
  label: {
    marginLeft: normalize(-16),
    fontFamily: FontTypes.MUSEO_MODERNO_REGUALAR,
    color: Colors.WHITE,
    fontSize: normalize(18)
  },
  bottomNavigationSceneStyles: {
    backgroundColor: Colors.BACKGROUND
  }
});
