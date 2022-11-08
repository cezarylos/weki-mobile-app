import { StyleSheet } from 'react-native';

import { Colors } from '../../enums';
import { normalize, normalizeY } from '../../helpers/normalize';

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: Colors.TRANSPARENT,
    paddingHorizontal: normalize(24)
  },
  columnWrapperStyle: {
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: normalizeY(8)
  },
  title: {
    color: Colors.WHITE,
    paddingHorizontal: normalize(24)
  }
});
