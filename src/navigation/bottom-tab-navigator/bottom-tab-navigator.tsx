/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ReactElement } from 'react';

import { CalendarSvgComponent, HomeSvgComponent, LikedSvgComponent, RecipesSvgComponent } from '../../components/svg';
import TabIcon from '../../components/tab-icon/tab-icon';
import { NavigatorScreens } from '../../enums/navigation-screens.enum';
import { BottomNavigatorTabs } from '../../enums/navigation-tabs.enum';
import HomeScreen from '../../screens/home-screen/home-screen';
import LabelsScreen from '../../screens/labels-screen/labels-screen';
import RecipesScreen from '../../screens/recipes-screen/recipes-screen';
import {
  BottomTabParamList,
  CalendarScreenParamList,
  HomeScreenParamList,
  LikedScreenParamList,
  RecipesScreenParamList
} from '../types';
import { styles } from './bottom-tab-navigator.styles';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator(): ReactElement {
  return (
    <BottomTab.Navigator
      initialRouteName={BottomNavigatorTabs.HOME}
      screenOptions={{
        tabBarStyle: styles.container,
        tabBarShowLabel: false,
        headerShown: false
      }}
    >
      <BottomTab.Screen
        name={BottomNavigatorTabs.HOME}
        component={HomeTabNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon isFocused={focused}>
              <HomeSvgComponent />
            </TabIcon>
          )
        }}
      />
      <BottomTab.Screen
        name={BottomNavigatorTabs.RECIPES}
        component={RecipesTabNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon isFocused={focused}>
              <RecipesSvgComponent />
            </TabIcon>
          )
        }}
      />
      <BottomTab.Screen
        name={BottomNavigatorTabs.LIKED}
        component={LikedTabNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon isFocused={focused}>
              <LikedSvgComponent />
            </TabIcon>
          )
        }}
      />
      <BottomTab.Screen
        name={BottomNavigatorTabs.CALENDAR}
        component={CalendarTabNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon isFocused={focused}>
              <CalendarSvgComponent />
            </TabIcon>
          )
        }}
      />
    </BottomTab.Navigator>
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeTabStack = createStackNavigator<HomeScreenParamList>();

function HomeTabNavigator(): ReactElement {
  return (
    <HomeTabStack.Navigator>
      <HomeTabStack.Group screenOptions={{ headerShown: false }}>
        <HomeTabStack.Screen name={NavigatorScreens.HOME} component={HomeScreen} />
        <HomeTabStack.Screen
          name={NavigatorScreens.LABELS}
          component={LabelsScreen}
          options={{ animationEnabled: false }}
        />
      </HomeTabStack.Group>
    </HomeTabStack.Navigator>
  );
}

const RecipesTabStack = createStackNavigator<RecipesScreenParamList>();

function RecipesTabNavigator(): ReactElement {
  return (
    <RecipesTabStack.Navigator>
      <RecipesTabStack.Screen
        name={NavigatorScreens.RECIPES}
        component={RecipesScreen}
        options={{ headerShown: false }}
      />
    </RecipesTabStack.Navigator>
  );
}

const LikedTabStack = createStackNavigator<LikedScreenParamList>();

function LikedTabNavigator(): ReactElement {
  return (
    <LikedTabStack.Navigator>
      <LikedTabStack.Screen name={NavigatorScreens.LIKED} component={RecipesScreen} options={{ headerShown: false }} />
    </LikedTabStack.Navigator>
  );
}

const CalendarTabStack = createStackNavigator<CalendarScreenParamList>();

function CalendarTabNavigator(): ReactElement {
  return (
    <CalendarTabStack.Navigator>
      <CalendarTabStack.Screen
        name={NavigatorScreens.CALENDAR}
        component={RecipesScreen}
        options={{ headerShown: false }}
      />
    </CalendarTabStack.Navigator>
  );
}
