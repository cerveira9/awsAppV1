import FirstScreen from './src/components/FirstScreen';
import SettingsScreen from './src/components/SettingsScreen';
import ContratosScreen from './src/components/ContratosScreen';

import { TabNavigator } from 'react-navigation';


const TabNav = TabNavigator({
  Home: {
    screen:FirstScreen
  },
  ContratosScreen: {
    screen:ContratosScreen
  },
  SettingsScreen: {
    screen:SettingsScreen
  }
  },
  {
    tabBarOptions: {
      showIcon: true,
      enableSwipe: true
  },
  tabBarPosition: 'bottom',
  style:{
    height:20,
  }
  });
  
export default TabNav;

console.disableYellowBox = true;