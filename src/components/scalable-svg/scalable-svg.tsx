import React, { ReactNode } from 'react';
import { Animated, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import { normalize, normalizeY } from '../../helpers/normalize';
import { scaleFromIphoneX } from '../../helpers/scale-from-iphone-x';

export interface ScalableSvgInterface {
  children?: ReactNode;
  top?: number;
  left?: number;
  xOffset?: number;
  yOffset?: number;
  keepRatio?: boolean;
  style?: StyleProp<ViewStyle>;
  styleAnimation?: StyleProp<ViewStyle>;
}

export default function ScalableSvg({
  children,
  top = 0,
  left = 0,
  xOffset = 0,
  yOffset = 0,
  keepRatio = false,
  style,
  styleAnimation
}: ScalableSvgInterface) {
  const styles = StyleSheet.create({
    container: {
      ...scaleFromIphoneX({ xOffset, yOffset, keepRatio }),
      position: 'absolute',
      top: normalizeY(top),
      left: normalize(left)
    },
    content: {
      position: 'absolute',
      top: 0,
      left: 0
    }
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.content, style, styleAnimation]}>{children}</Animated.View>
    </View>
  );
}
