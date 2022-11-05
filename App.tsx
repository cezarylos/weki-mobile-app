import { ApolloClient, ApolloLink, ApolloProvider, concat, createHttpLink, InMemoryCache } from '@apollo/client';
import { API_URL, AUTH0_CLIENT_ID, AUTH0_DOMAIN } from '@env';
import React, { ReactElement, useEffect, useState } from 'react';
import { Auth0Provider, useAuth0 } from 'react-native-auth0';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import { appSetup } from './src/app-setup';
import Navigation from './src/navigation';
import AnimatedSplashScreen from './src/screens/splash-screen/splash-screen';
import { getUser } from './src/store/global/global.actions';
import { selectJWT } from './src/store/global/global.slice';
import store, { useAppDispatch, useAppSelector } from './src/store/store';

const httpLink = createHttpLink({
  uri: `${API_URL}/graphql`
});

const composeAuthMiddleware = (jwt?: string) =>
  new ApolloLink((operation, forward) => {
    operation.setContext({
      headers: {
        authorization: jwt ? `Bearer ${jwt}` : null
      }
    });

    return forward(operation);
  });

const ApolloWrapper = function ({ isAppReady }: { isAppReady: boolean }): ReactElement {
  const { user, getCredentials } = useAuth0();
  const jwt = useAppSelector(selectJWT);
  const dispatch = useAppDispatch();

  const [apolloClient, setApolloClient] = useState<ApolloClient<any> | null>(null);

  useEffect((): void => {
    const client = new ApolloClient({
      link: concat(composeAuthMiddleware(jwt), httpLink),
      cache: new InMemoryCache()
    });
    setApolloClient(client);
  }, [jwt]);

  useEffect((): void => {
    const getInitialUser = async (): Promise<void> => {
      await dispatch(getUser(getCredentials));
    };
    if (user) {
      getInitialUser().finally();
    }
  }, [user]);

  return (
    <>
      {apolloClient && (
        <ApolloProvider client={apolloClient as ApolloClient<any>}>
          <AnimatedSplashScreen isAppReady={isAppReady}>
            <SafeAreaProvider style={{ flex: 1 }}>
              <Navigation />
            </SafeAreaProvider>
          </AnimatedSplashScreen>
        </ApolloProvider>
      )}
    </>
  );
};

const App = function (): ReactElement {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect((): void => {
    (async (): Promise<void> => {
      await appSetup();
      setIsAppReady(true);
    })();
  }, []);

  return (
    <Provider store={store}>
      <Auth0Provider domain={AUTH0_DOMAIN} clientId={AUTH0_CLIENT_ID}>
        <ApolloWrapper isAppReady={isAppReady} />
      </Auth0Provider>
    </Provider>
  );
};

export default App;
