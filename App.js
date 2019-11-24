import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { MainScreen } from './src/screens/Main';
import { StartScreen } from './src/screens/Start';

const AppNavigator = createStackNavigator(
  {
    StartScreen,
    MainScreen,
  },
  {
    initialRouteName: 'StartScreen',
  }
);

export default createAppContainer(AppNavigator);
