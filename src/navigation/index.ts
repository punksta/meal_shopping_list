import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import ReactNavigation from 'react-navigation';
import MealPlansScreen from './MealPlansScreen';
import ShoppingListScreen from './ShoppingListScreen';

const NavigationConfig = {
  MealPlansScreen: {
    screen: MealPlansScreen,
  },
  ShoppingListScreen: {
    screen: ShoppingListScreen,
  },
};

type ScreenNames = Record<keyof typeof NavigationConfig, string>;

export const ScreensNames: ScreenNames = Object.keys(NavigationConfig).reduce(
  (v, k) => ({...v, [k]: k}),
  {} as ScreenNames,
);

const AppNavigator = createStackNavigator(NavigationConfig);

export interface ScreenProps<S = any, P = ReactNavigation.NavigationParams> {
  navigation: ReactNavigation.NavigationScreenProp<S, P>;
}

export const NavigationComponent = createAppContainer(AppNavigator);
