import { StatusBar } from 'react-native';

import { LanguageOrchestrator } from './_locales/language.orchestrator';
import { Languages } from './enums/languages.enum';
import { isAndroidPlatform } from './helpers/platform';
import { getUser } from './store/global/global.actions';
import { getCategories, getRecommendedRecipes } from './store/recipes/recipes.actions';
import store from './store/store';

interface AppSetupInterface {
  getCredentials: Function;
}

const statusBarSettings = (): void => {
  StatusBar.setHidden(true);
  if (isAndroidPlatform) {
    StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor('transparent');
  }
};

export const appSetup = async ({ getCredentials }: AppSetupInterface): Promise<void> => {
  statusBarSettings();
  LanguageOrchestrator.setLanguage(Languages.plPL);
  await store.dispatch(getUser(getCredentials));
  await Promise.all([store.dispatch(getCategories()), store.dispatch(getRecommendedRecipes())]);
};
