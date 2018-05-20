import React from 'react';
import FirstScreen from './src/components/FirstScreen';
import SettingsScreen from './src/components/SettingsScreen';
import ContratosScreen from './src/components/ContratosScreen';
import AdicionarContratosScreen from './src/components/AdicionarContratosScreen';
import ContratosForm from './src/components/ContratosForm';
import EditarContratosScreen from './src/components/EditarContratosScreen';
import ListaContratos from './src/components/ListaContratos';


import { TabNavigator } from 'react-navigation';
import CotacaoApi from './src/components/CotacaoApi';

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