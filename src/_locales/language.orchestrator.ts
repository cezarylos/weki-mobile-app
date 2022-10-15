import LocalizedStrings from 'react-native-localization';
import {enTranslates} from './en.locale';
import { plTranslates } from './pl.locale';
import { Languages } from '../enums/languages.enum';



export const LanguageOrchestrator = new LocalizedStrings({
    [Languages.plPL]: plTranslates,
      // [Languages.enUS]: enTranslates
});

// use LanguageOrchestrator.setLanguage('pl-PL'); to change language (for settings)
