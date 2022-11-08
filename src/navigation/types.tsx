import { NavigatorScreens } from '../enums/navigation-screens.enum';
import { BottomNavigatorTabs } from '../enums/navigation-tabs.enum';

/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  [BottomNavigatorTabs.HOME]: undefined;
  [BottomNavigatorTabs.RECIPES]: undefined;
  [BottomNavigatorTabs.LIKED]: undefined;
  [BottomNavigatorTabs.CALENDAR]: undefined;
};

export type HomeScreenParamList = {
  [NavigatorScreens.HOME]: undefined;
  [NavigatorScreens.LABELS]: undefined;
};

export type RecipesScreenParamList = {
  [NavigatorScreens.CATEGORIES]: undefined;
  [NavigatorScreens.RECIPES]: undefined;
};

export type LikedScreenParamList = {
  [NavigatorScreens.LIKED]: undefined;
};

export type CalendarScreenParamList = {
  [NavigatorScreens.CALENDAR]: undefined;
};
