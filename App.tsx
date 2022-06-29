import React, { ReactElement, useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { appSetup } from './src/app-setup';
import Navigation from './src/navigation';
import AnimatedSplashScreen from './src/screens/splash-screen/splash-screen';

const App = (): ReactElement => {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect((): void => {
    setIsAppReady(true);
  }, []);

  useEffect((): void => {
    (async (): Promise<void> => {
      await appSetup();
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

export default App;
