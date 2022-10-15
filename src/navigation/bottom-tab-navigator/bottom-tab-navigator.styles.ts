import { StyleSheet } from 'react-native';

import { Colors } from '../../enums';
import { normalize, normalizeY } from '../../helpers/normalize';

export const BOTTOM_NAVIGATION_HEIGHT = normalizeY(72);

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: normalize(30),
    paddingBottom: normalizeY(2),
    height: normalize(72),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.BACKGROUND,
    borderTopRightRadius: normalize(23),
    borderTopLeftRadius: normalize(23),
    shadowColor: Colors.BLACK,
    shadowOffset: {
      width: 0,
      height: normalize(-1)
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 1,
    borderBottomWidth: 0,
    width: '100%'
  },
  bottomBar: {
    paddingHorizontal: normalize(30),
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
