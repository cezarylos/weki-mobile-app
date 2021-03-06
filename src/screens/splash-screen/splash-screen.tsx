import React, { ReactNode, useEffect, useRef } from 'react';
import { Animated, Easing, Image, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import BaseText from '../../components/base-text/base-text';
import { FontSizes, FontTypes } from '../../enums';
import SplashScreenElements from './splash-screen-elements';
import { styles } from './splash-screen.styles';

const LOGO_TIMEOUT_IN_MS = 1000;
const SPLASH_SCREEN_OUTRO_TIMEOUT_IN_MS = 2500;
const logo = '../../../assets/images/weki-logo.png';

interface AnimatedSplashScreenInterface {
  isAppReady: boolean;
  children?: ReactNode;
}

const AnimatedSplashScreen = ({ isAppReady, children }: AnimatedSplashScreenInterface) => {
  const logoAnimation = useRef(new Animated.Value(1)).current;
  const splashScreenAnimation = useRef(new Animated.Value(1)).current;

  useEffect((): void => {
    if (!isAppReady) {
      return;
    }
    SplashScreen.hide();
    Animated.sequence([
      Animated.timing(logoAnimation, {
        toValue: 0,
        duration: LOGO_TIMEOUT_IN_MS,
        easing: Easing.sin,
        useNativeDriver: true
      }),
      Animated.timing(splashScreenAnimation, {
        toValue: 0,
        duration: SPLASH_SCREEN_OUTRO_TIMEOUT_IN_MS,
        easing: Easing.sin,
        useNativeDriver: true
      })
    ]);
  }, [isAppReady, logoAnimation, splashScreenAnimation]);

  return (
    <View style={{ flex: 1 }}>
      <Animated.View pointerEvents='none' style={[{ opacity: splashScreenAnimation }, styles.container]}>
        <BaseText style={styles.title} fontType={FontTypes.MUSEO_MODERNO_MEDIUM} fontSize={FontSizes.SIZE_40}>
          Przepisy na przetwory z pomysłem
        </BaseText>
        <SplashScreenElements />
      </Animated.View>
      <Animated.View pointerEvents='none' style={[{ opacity: logoAnimation }, styles.container]}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require(logo)} />
        </View>
      </Animated.View>
      {isAppReady && children}
    </View>
  );
};

export default AnimatedSplashScreen;
