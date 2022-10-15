import { StyleSheet } from 'react-native';

import { deviceHeight, deviceWidth } from '../../constants/device-dimensions';
import { Colors } from '../../enums';
import { normalize, normalizeY } from '../../helpers/normalize';

export const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1000,
    elevation: 1000,
    width: deviceWidth,
    height: deviceHeight,
    backgroundColor: Colors.BACKGROUND
  },
  logoContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 167,
    height: 72
  },
  title: {
    position: 'absolute',
    top: normalizeY(217),
    left: normalize(37),
    width: normalize(284),
    lineHeight: normalize(52),
    color: Colors.WHITE,
    zIndex: 2
  }
});
