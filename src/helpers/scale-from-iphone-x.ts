import { TransformsStyle } from 'react-native';

import { BASE_HEIGHT, BASE_WIDTH, deviceHeight, deviceWidth } from '../constants/device-dimensions';

interface ScaleFromIphoneX {
  xOffset: number;
  yOffset: number;
  keepRatio: boolean;
}

export const scaleFromIphoneX = ({ xOffset, yOffset, keepRatio }: ScaleFromIphoneX): TransformsStyle => ({
  transform: keepRatio
    ? [{ scale: deviceHeight / BASE_HEIGHT }]
    : [{ scaleX: deviceWidth / BASE_WIDTH + xOffset }, { scaleY: deviceHeight / BASE_HEIGHT + yOffset }]
});
