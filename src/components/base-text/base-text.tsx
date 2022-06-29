import React, { ReactElement } from 'react';
import { Animated, StyleSheet, Text } from 'react-native';

import { Colors } from '../../enums';
import { TextProps } from './base-text.interface';

const BaseText = ({
  animated,
  children,
  fontSize,
  fontType,
  numberOfLines,
  onPress,
  style
}: TextProps): ReactElement => {
  const styles = StyleSheet.create({
    text: {
      fontSize,
      fontFamily: fontType,
      color: Colors.BLACK
    }
  });

  if (animated) {
    return (
      <Animated.Text numberOfLines={numberOfLines} style={[styles.text, style]}>
        {children}
      </Animated.Text>
    );
  }
  return (
    <Text style={[styles.text, style]} numberOfLines={numberOfLines} onPress={onPress}>
      {children}
    </Text>
  );
};

export default BaseText;
