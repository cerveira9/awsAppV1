import React from 'react';
import { StyleSheet, Text, View, TabBarIOS, Component } from 'react-native';
import Tabs from './src/components/Tabs';
import FirstScreen from './src/components/FirstScreen';
import SettingsScreen from './src/components/SettingsScreen';
import ContratosScreen from './src/components/ContratosScreen';

var homeIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAAAl0lEQVR4Ae3SoRGDQBhE4ReBwaMRSQF0QBUUcV1QAJXQBRXQAhp/BrOJQGQyCf9dAMHMfc+vWg6R3HlwgIr5VcVONR4hPDU7NCxobaHhTw595Ih2o0Nf6oiS0aMf9WQEyhnQRgM5NgpGZDRSYCiZkB0TpXU+BTZTWecLzVNb5zPaOqlDMdknbVFgLaurDr1LQ2no/KHkgp494I7WqW28sQAAAABJRU5ErkJggg==';
var contractsIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAAAhElEQVR4Ae2RAQaAQBRE3z1Ce7SiI3SAD0Cnig5SBBDdYFvrAy1/hajdGcyaz1sMJainiSlITMec0XTcJGw0CD54xLGGtBtJgTwnXn1oWk0a9MClgsR2HihH74LEdl2trlZXq6t9BXTqWV92kwatOCb9p2XH200K1OFiTnpsWTKagf/rAnlzSZ73eD0uAAAAAElFTkSuQmCC';
var settingsIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAABb0lEQVR4AeTUAUdDURjG8b+yjdEAFMAATbZY9REKrCkBQvsQUWH7HhWbGQmIoBVM1J0WWA011h2VpgDLpLnBdey+zsndFdDvhcv77LHdY4f/Kk6egjt54gS2jzMyRQK79BRdEdibp6hHQFM4YmL4NEefc7JMAPNYsogGKWCSVar0SWFUcz/QpcwQRzNDynTd5xoGazhjzjoaEeyxi2xCSOwawg8cUODUsN3RH7WcNmlcpLnRJHpIbDEQoSemGRXmXiQG5NBI0PbEVpAWxfdNYBClqWIddBpq3yQKZtcqeIRORe0tfmWpYAWdY39FUe5U8BYdW+1bRDFIipe9gLTs52Xn+BKH2yLMqBls5PFvgvSOg5wGaXAt0dEkXkHaw9HOCQUOaRm223/zp30khMbG2EUZDOrqYisZLrZvijy7z1WMUnxyRsa9auvIGoskMEmWC/rM4lMMWRQhoA9PzQtBiR9XI7CSp+hns6jXiBiZAADLu77Go53e3QAAAABJRU5ErkJggg==';

export default class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     selectedTab: 'FirstScreen'
  //   };
  // }

  render() {
    return (
      <View style={styles.container}>
        <Tabs>
          {/* First tab */}
          <View title="HOME" style={styles.content}>
            <FirstScreen />
          </View>
          {/* Second tab */}
          <View title="CONTRATOS" style={styles.content}>
            <ContratosScreen />
          </View>
          {/* Third tab */}
          <View title="SETTINGS" style={styles.content}>
            <SettingsScreen />
          </View>
        </Tabs>
      </View>
      // <TabBarIOS selectedTab={this.state.selectedTab}>
      //   <TabBarIOS.Item
      //     title="Home"
      //     icon={{uri: homeIcon}}
      //     selected={this.state.selectedTab === 'FirstScreen'}
      //     onPress={() => {
      //       this.setState({
      //         selectedTab: 'FirstScreen'
      //       });
      //     }}>
      //     <FirstScreen />
      //   </TabBarIOS.Item>
      //   <TabBarIOS.Item
      //     title="Contratos"
      //     icon={{uri: contractsIcon}}
      //     selected={this.state.selectedTab === 'ContratosScreen'}
      //     onPress={() => {
      //       this.setState({
      //         selectedTab: 'ContratosScreen'
      //       });
      //     }}>
      //     <ContratosScreen />
      //   </TabBarIOS.Item>
      //   <TabBarIOS.Item
      //     title="Settings"
      //     icon={{uri: settingsIcon}}
      //     selected={this.state.selectedTab === 'SettingsScreen'}
      //     onPress={() => {
      //       this.setState({
      //         selectedTab: 'SettingsScreen'
      //       });
      //     }}>
      //     <SettingsScreen />
      //   </TabBarIOS.Item>
      // </TabBarIOS>
    );
  }
}

const styles = {
  iconStyle: {
    color: 'rgba(92, 99,216, 1)'
  },
  container: {
    flex: 1,                            // Take up all screen
    backgroundColor: 'rgba(92, 99,216, 1)',         // Background color
  },
  content: {
    backgroundColor: 'white'
    
  }
}

console.disableYellowBox = true;
