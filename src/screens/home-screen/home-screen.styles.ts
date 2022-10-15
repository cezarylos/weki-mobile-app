import { StyleSheet } from 'react-native';

import { Colors } from '../../enums';
import { normalize, normalizeY } from '../../helpers/normalize';

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: Colors.TRANSPARENT
  },
  contentContainerStyle: {
    paddingBottom: normalizeY(48)
  },
  title: {
    color: Colors.WHITE,
    paddingHorizontal: normalize(24)
  }
});
