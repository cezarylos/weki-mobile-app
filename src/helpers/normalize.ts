// this function will calculate proper value for all screen according to design
// design was made in 375x812dpi => iPhone X
// we need to calculate it for all screens
import { Dimensions } from 'react-native';

import { BASE_HEIGHT, BASE_WIDTH } from '../constants/device-dimensions';

const { width, height } = Dimensions.get('window');

export const normalize = (dp: number): number => (dp / BASE_WIDTH) * width;
export const normalizeY = (dp: number): number => (dp / BASE_HEIGHT) * height;
