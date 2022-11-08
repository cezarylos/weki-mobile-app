import { useFocusEffect } from '@react-navigation/native';
import * as React from 'react';
import { ReactElement } from 'react';
import { Animated } from 'react-native';

import { Colors } from '../../enums';

const FadeInView = ({ children }: { children: ReactElement }): ReactElement => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  useFocusEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    }).start();
    return () => {
      Animated.timing(fadeAnim, {
        toValue: 0.5,
        duration: 250,
        useNativeDriver: true
      }).start();
    };
  });

  return (
    <Animated.View
      style={{
        flex: 1,
        opacity: fadeAnim,
        backgroundColor: Colors.BACKGROUND
      }}
    >
      {children}
    </Animated.View>
  );
};

export default FadeInView;
