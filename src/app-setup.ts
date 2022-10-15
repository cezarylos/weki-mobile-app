import { LanguageOrchestrator } from './_locales/language.orchestrator';
import { Languages } from './enums/languages.enum';
import { StatusBar } from 'react-native';
import { isAndroidPlatform } from './helpers/platform';

const statusBarSettings = (): void => {
  StatusBar.setHidden(true);
  if (isAndroidPlatform) {
    StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor('transparent');
  }
}

export const appSetup = async (): Promise<void> => {
  statusBarSettings();
  LanguageOrchestrator.setLanguage(Languages.plPL);
};
