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

   // static navigationOptions = ({navigation}) => ({
    //     tabBarLabel:"Contratos",
    //     tabBarIcon:({tintColor, focused}) => {
    //         if(focused){
    //           return(
    //             <Image source={require('../img/icons/contracts_on.png')} style={{width:20, height:20, tintColor: 'rgba(92, 99,216, 1)'}} />
    //           );
    //         }else{
    //           return(
    //             <Image source={require('../img/icons/contracts_off.png')} style={{width:20, height:20, tintColor: 'rgba(92, 99,216, 1)'}} />
    //           );
    //         }
            
    //     }
    // });