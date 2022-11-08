import { DrawerNavigationProp } from '@react-navigation/drawer/src/types';
import React, { ReactElement, ReactNode } from 'react';
import { View } from 'react-native';

import { Colors } from '../../enums';
import FadeView from '../fade-view/fade-view';
import TopBar from '../top-bar/top-bar';
import { styles } from './background.styles';

interface BackgroundInterface {
  children: ReactNode | ReactNode[];
  navigation?: DrawerNavigationProp<any>;
  backgroundColor?: Colors;
  isNoPaddingHorizontal?: boolean;
}

const Background = ({
  children,
  navigation,
  backgroundColor,
  isNoPaddingHorizontal
}: BackgroundInterface): ReactElement => (
  <FadeView>
    <View
      style={[
        styles.container,
        backgroundColor && { backgroundColor },
        isNoPaddingHorizontal && { paddingHorizontal: 0 }
      ]}
    >
      <>
        {navigation && <TopBar navigation={navigation} />}
        {children}
      </>
    </View>
  </FadeView>
);

export default Background;
