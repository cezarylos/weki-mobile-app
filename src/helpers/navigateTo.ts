import { NavigatorScreens } from '../enums/navigation-screens.enum';

export const navigateTo =
  (navigate: Function, screen: NavigatorScreens): (() => void) =>
  (): void =>
    navigate(screen);
