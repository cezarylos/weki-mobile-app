import React, { ReactElement, useEffect, useRef } from 'react';
import { Animated, Easing, StyleProp } from 'react-native';

import ScalableSvg, { ScalableSvgInterface } from '../../components/scalable-svg/scalable-svg';
import { LogoSvgComponent } from '../../components/svg';
import {
  Element10SvgComponent,
  Element1SvgComponent,
  Element2SvgComponent,
  Element3SvgComponent,
  Element4SvgComponent,
  Element5SvgComponent,
  Element6SvgComponent,
  Element7SvgComponent,
  Element8SvgComponent,
  Element9SvgComponent
} from '../../components/svg/splash-screen-elements';

function getRandomArbitrary(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

interface AnimatedWrapperInterface extends Partial<ScalableSvgInterface> {
  isRotating?: boolean;
}

function AnimatedWrapper({ children, top, left, keepRatio, isRotating }: AnimatedWrapperInterface): ReactElement {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const animation = (): void => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1,
          easing: Easing.ease,
          duration: getRandomArbitrary(1500, 3000),
          useNativeDriver: false
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          easing: Easing.ease,
          duration: getRandomArbitrary(1500, 3000),
          useNativeDriver: false
        })
      ])
    ).start();
  };

  useEffect((): void => animation(), []);

  const topAnimationOffset = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, getRandomArbitrary(30, 50)]
  });

  const rotateAnimation = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['-5deg', '5deg']
  });

  const styleAnimation = {
    top: topAnimationOffset,
    transform: isRotating ? [{ rotate: rotateAnimation }] : []
  } as StyleProp<any>;

  return (
    <ScalableSvg top={top} left={left} keepRatio={keepRatio} styleAnimation={styleAnimation}>
      {children}
    </ScalableSvg>
  );
}

export default function SplashScreenElements(): ReactElement {
  return (
    <>
      <AnimatedWrapper top={75} left={209}>
        <Element1SvgComponent />
      </AnimatedWrapper>
      <AnimatedWrapper top={335} left={137} keepRatio>
        <Element2SvgComponent />
      </AnimatedWrapper>
      <AnimatedWrapper top={433} left={0}>
        <Element3SvgComponent />
      </AnimatedWrapper>
      <AnimatedWrapper top={603} left={142}>
        <Element4SvgComponent />
      </AnimatedWrapper>
      <AnimatedWrapper top={726} left={0}>
        <Element6SvgComponent />
      </AnimatedWrapper>
      <AnimatedWrapper top={650} left={18} isRotating>
        <Element5SvgComponent />
      </AnimatedWrapper>
      <AnimatedWrapper top={688} left={105}>
        <Element7SvgComponent />
      </AnimatedWrapper>
      <AnimatedWrapper top={502} left={259} keepRatio>
        <Element8SvgComponent />
      </AnimatedWrapper>
      <AnimatedWrapper top={393} left={0}>
        <Element9SvgComponent />
      </AnimatedWrapper>
      <AnimatedWrapper top={383} left={87} isRotating>
        <Element10SvgComponent />
      </AnimatedWrapper>
      <ScalableSvg top={643} left={268}>
        <LogoSvgComponent />
      </ScalableSvg>
    </>
  );
}
