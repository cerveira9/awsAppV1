import React from 'react';
import { StyleSheet, Text, View, Component } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import FirstScreen from './src/components/FirstScreen';
import SettingsScreen from './src/components/SettingsScreen';
import ContratosScreen from './src/components/ContratosScreen';
import AdicionarContratosScreen from './src/components/AdicionarContratosScreen';
import EditarContratosScreen from './src/components/EditarContratosScreen';

export default class App extends React.Component {

  render() {
    const MainNavigator = TabNavigator({
      first: { screen: FirstScreen },
      contratos: {
        screen: StackNavigator({
          contratosTela: { screen: ContratosScreen },
          adicionar: { screen: AdicionarContratosScreen },
          editar: { screen: EditarContratosScreen }
        })
      },
      settings: { screen: SettingsScreen},
    });

    return (
      <View style={styles.container}>
        <MainNavigator />
      </View>
    );
  }
}

const styles = {
  iconStyle: {
    color: 'rgba(92, 99,216, 1)'
  },
  container: {
    flex: 1,  // Take up all screen
  },
}

console.disableYellowBox = true;
