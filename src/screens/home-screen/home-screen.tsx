import { AUTH0_DOMAIN, AUTH0_CLIENT_ID, API_URL } from '@env';
import * as React from 'react';
import { useEffect } from 'react';
import { Button, ScrollView, View, Linking } from 'react-native';
import { useAuth0 } from 'react-native-auth0';

import axios from 'axios';

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
  const { authorize, user, clearSession, getCredentials } = useAuth0();

  const loggedIn = user !== undefined && user !== null;

  useEffect(() => {
    const init = async () => {
      const {
        idToken: id_token,
        accessToken: access_token,
        expiresIn: expires_in,
        tokenType: token_type
      } = await getCredentials();
      const { data } = await axios.get(`${API_URL}/api/auth/auth0/callback`, {
        params: {
          id_token,
          access_token,
          expires_in,
          token_type
        }
      });
      console.log(data);
    };
    if (user) {
      init().finally();
    }
  }, [user]);

  const onLogin = async () => {
    try {
      // await Linking.openURL(`${API_URL}/api/connect/auth0`);
      await authorize();
    } catch (e) {
      console.log(e);
    }
  };

  const onLogout = async () => {
    try {
      await clearSession();
    } catch (e) {
      console.log('Log out cancelled');
    }
  };

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
        <Button onPress={onLogout} title={'Log Out'} />
        <Button onPress={onLogin} title={'Log In'} />
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
