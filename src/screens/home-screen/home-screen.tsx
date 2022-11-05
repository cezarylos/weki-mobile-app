import * as React from 'react';
import { ScrollView } from 'react-native';

import { LanguageOrchestrator } from '../../_locales/language.orchestrator';
import Background from '../../components/background/background';
import BaseText from '../../components/base-text/base-text';
import ScalableSvg from '../../components/scalable-svg/scalable-svg';
import { Element1SvgComponent, Element2SvgComponent } from '../../components/svg';
import { FontSizes, FontTypes } from '../../enums';
import { WithDrawerNavigationInterface } from '../../interfaces/with-navigation.interface';
import Recommended from './components/recommended/recommended';
import TipsCarousel from './components/tips-carousel/tips-carousel';
import { styles } from './home-screen.styles';

export default function HomeScreen({ navigation }: WithDrawerNavigationInterface) {
  return (
    <Background navigation={navigation}>
      <ScalableSvg top={0} left={0}>
        <Element1SvgComponent />
      </ScalableSvg>
      <ScalableSvg top={460} left={175}>
        <Element2SvgComponent />
      </ScalableSvg>
      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
      >
        <BaseText style={styles.title} fontType={FontTypes.MUSEO_MODERNO_MEDIUM} fontSize={FontSizes.SIZE_24}>
          {LanguageOrchestrator.homeScreen.title}
        </BaseText>
        <BaseText style={styles.title} fontType={FontTypes.MUSEO_MODERNO_MEDIUM} fontSize={FontSizes.SIZE_18}>
          {LanguageOrchestrator.homeScreen.subtitle}
        </BaseText>
        <TipsCarousel />
        <Recommended />
      </ScrollView>
    </Background>
  );
}
