import { StyleSheet } from 'react-native';

import { Colors } from '../../../../enums';
import { normalize, normalizeY } from '../../../../helpers/normalize';
import { TIPS_CAROUSEL_ITEM_SIZE } from './tips-carousel';

export const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: normalizeY(16),
    marginLeft: normalize(-24),
    paddingLeft: normalize(24),
    height: TIPS_CAROUSEL_ITEM_SIZE
  },
  itemContainer: {
    width: TIPS_CAROUSEL_ITEM_SIZE,
    height: TIPS_CAROUSEL_ITEM_SIZE,
    position: 'relative'
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1
  },
  tip: {
    position: 'absolute',
    color: Colors.WHITE,
    textAlign: 'right',
    right: normalize(20),
    bottom: normalize(20)
  },
  paginationContainerStyle: {
    width: normalize(60),
    height: normalize(8),
    alignSelf: 'center'
  },
  paginationDotContainerStyle: {
    width: normalize(8)
  },
  dotStyle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
    backgroundColor: Colors.PRIMARY
  }
});
