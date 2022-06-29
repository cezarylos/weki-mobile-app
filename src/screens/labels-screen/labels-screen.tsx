import { DrawerNavigationProp } from '@react-navigation/drawer';
import * as React from 'react';
import { Text, View } from 'react-native';

import Background from '../../components/background/background';
import BaseText from '../../components/base-text/base-text';
import ScalableSvg from '../../components/scalable-svg/scalable-svg';
import { Element1SvgComponent, Element2SvgComponent } from '../../components/svg';
import TopBar from '../../components/top-bar/top-bar';
import { FontSizes, FontTypes } from '../../enums';
import { RootNavigatorTabs } from '../../enums/navigation-tabs.enum';
import { styles } from './labels-screen.styles';

export default function LabelsScreen({ navigation }: { navigation: DrawerNavigationProp<any> }) {
  return (
    <Background>
      <TopBar navigation={navigation} />
      <ScalableSvg top={0} left={0}>
        <Element1SvgComponent />
      </ScalableSvg>
      <ScalableSvg top={460} left={175}>
        <Element2SvgComponent />
      </ScalableSvg>
      <BaseText
        onPress={() => navigation.navigate(RootNavigatorTabs.MODAL)}
        fontType={FontTypes.MUSEO_MODERNO_MEDIUM}
        fontSize={FontSizes.SIZE_100}
      >
        LABELS FOR JARS
      </BaseText>
      <Text style={styles.title} onPress={navigation.openDrawer}>
        WEKI BY CEZARY LOS
      </Text>
      <View style={styles.separator} />
    </Background>
  );
}
