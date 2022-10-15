import React, { ReactElement, useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { appSetup } from './src/app-setup';
import Navigation from './src/navigation';
import AnimatedSplashScreen from './src/screens/splash-screen/splash-screen';
import { Provider } from 'react-redux';
import store from './src/store/store';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
});

const App = (): ReactElement => {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect((): void => {
    (async (): Promise<void> => {
      await appSetup();
      setIsAppReady(true);
    })();
  }, []);

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <AnimatedSplashScreen isAppReady={isAppReady}>
          <SafeAreaProvider style={{ flex: 1 }}>
            <Navigation />
          </SafeAreaProvider>
        </AnimatedSplashScreen>
      </Provider>
    </ApolloProvider>
  );
};

export default App;
