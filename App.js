import React from 'react';
import { StyleSheet, Text, View, Component } from 'react-native';
import Tabs from './src/components/Tabs';
import FirstScreen from './src/components/FirstScreen';
import SettingsScreen from './src/components/SettingsScreen';
import ContratosScreen from './src/components/ContratosScreen';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Tabs>
          {/* First tab */}
          <View title="HOME">
            <FirstScreen />
          </View>
          {/* Second tab */}
          <View title="CONTRATOS">
            <ContratosScreen />
          </View>
          {/* Third tab */}
          <View title="SETTINGS">
            <SettingsScreen />
          </View>
        </Tabs>
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
