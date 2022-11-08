import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { Animated, Easing, Image, StatusBar, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { shallowEqual } from 'react-redux';

import { LanguageOrchestrator } from '../../_locales/language.orchestrator';
import BaseText from '../../components/base-text/base-text';
import { FontSizes, FontTypes } from '../../enums';
import { selectLanguage } from '../../store/global/global.slice';
import { useAppSelector } from '../../store/store';
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
  const [isShownAnimation, setIsShownAnimation] = useState(true);

  const language = useAppSelector(selectLanguage, shallowEqual);

  useEffect((): void => {
    LanguageOrchestrator.setLanguage(language);
  }, [language]);

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
    ]).start((): void => {
      setIsShownAnimation(false);
      StatusBar.setHidden(false, 'slide');
    });
  }, [isAppReady, logoAnimation, splashScreenAnimation]);

  return (
    <View style={{ flex: 1 }}>
      {isShownAnimation && (
        <>
          <Animated.View pointerEvents="none" style={[{ opacity: splashScreenAnimation }, styles.container]}>
            <BaseText style={styles.title} fontType={FontTypes.MUSEO_MODERNO_MEDIUM} fontSize={FontSizes.SIZE_40}>
              {LanguageOrchestrator.splashScreen.title}
            </BaseText>
            <SplashScreenElements />
          </Animated.View>
          <Animated.View pointerEvents="none" style={[{ opacity: logoAnimation }, styles.container]}>
            <View style={styles.logoContainer}>
              <Image style={styles.logo} source={require(logo)} />
            </View>
          </Animated.View>
        </>
      )}
      {isAppReady && children}
    </View>
  );
};

export default AnimatedSplashScreen;
