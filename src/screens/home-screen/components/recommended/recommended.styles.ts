import { StyleSheet } from 'react-native';
import { normalize, normalizeY } from '../../../../helpers/normalize';
import { Colors, FontSizes } from '../../../../enums';

export const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: normalize(24)
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: normalizeY(-24)
  },
  title: {
    color: Colors.TEXT_PRIMARY,
  },
  dot: {
    color: Colors.TEXT_PRIMARY,
    lineHeight: FontSizes.SIZE_18,
    paddingTop: normalizeY(36),
    marginLeft: normalize(8)
  },
  month: {
    color: Colors.TEXT_PRIMARY,
    marginLeft: normalize(8)
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
