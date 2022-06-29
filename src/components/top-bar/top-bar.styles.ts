import { StyleSheet } from 'react-native';

import { Colors } from '../../enums';
import { normalize, normalizeY } from '../../helpers/normalize';

export const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    width: '100%',
    position: 'relative',
    marginTop: normalizeY(52),
    marginBottom: normalizeY(16),
    paddingHorizontal: normalize(24),
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.TRANSPARENT,
    zIndex: 1
  }
});
