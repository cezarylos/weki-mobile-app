import { AUTH0_CLIENT_ID, AUTH0_DOMAIN } from '@env';
import React, { ReactElement, useEffect, useState } from 'react';
import { Auth0Provider, useAuth0 } from 'react-native-auth0';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import { appSetup } from './src/app-setup';
import Navigation from './src/navigation';
import AnimatedSplashScreen from './src/screens/splash-screen/splash-screen';
import store from './src/store/store';

const App = function (): ReactElement {
  const [isAppReady, setIsAppReady] = useState(false);
  const { getCredentials } = useAuth0();

  useEffect((): void => {
    (async (): Promise<void> => {
      await appSetup({ getCredentials });
      setIsAppReady(true);
    })();
  }, []);

  return (
    <AnimatedSplashScreen isAppReady={isAppReady}>
      <SafeAreaProvider style={{ flex: 1 }}>
        <Navigation />
      </SafeAreaProvider>
    </AnimatedSplashScreen>
  );
};

const AppWrapper = function (): ReactElement {
  return (
    <Auth0Provider domain={AUTH0_DOMAIN} clientId={AUTH0_CLIENT_ID}>
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>
  );
};

export default AppWrapper;
