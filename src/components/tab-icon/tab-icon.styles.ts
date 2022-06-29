import { StyleSheet } from 'react-native';

import { Colors } from '../../enums';
import { normalize } from '../../helpers/normalize';

export const styles = StyleSheet.create({
  container: {
    width: normalize(39),
    height: normalize(39),
    borderRadius: normalize(39),
    justifyContent: 'center',
    alignItems: 'center'
  },
  tint: {
    position: 'absolute',
    width: normalize(39),
    height: normalize(39),
    borderRadius: normalize(39)
  },
  focused: {
    backgroundColor: Colors.MENU_ITEM_FOCUSED
  }
});
