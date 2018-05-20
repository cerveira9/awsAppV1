import React, { Component } from 'react';

import {
    Header,
    Button
} from 'react-native-elements';
import {
    Text,
    View,
    Image,
    Dimensions
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class SettingsScreen extends Component {

    // static navigationOptions = ({navigation}) => ({
    //     tabBarLabel:"Settings",
    //     tabBarIcon:({tintColor, focused}) => {
    //         if(focused){
    //           return(
    //             <Image source={require('../img/icons/settings_on.png')} style={{width:20, height:20, tintColor: 'rgba(92, 99,216, 1)'}} />
    //           );
    //         }else{
    //           return(
    //             <Image source={require('../img/icons/settings_off.png')} style={{width:20, height:20, tintColor: 'rgba(92, 99,216, 1)'}} />
    //           );
    //         }
            
    //     }
    // });

    render() {
        return (
            <View style={{ paddingTop: 15 }}>
            <Text>Teste</Text>
                {/*<Header
                    backgroundColor={'#F8F8FF'} // Color: GhostWhite
                    centerComponent={{ text: 'SETTINGS', style: { color: 'rgba(92, 99,216, 1)', fontSize: 20, fontWeight: 'bold' } }}
                />*/}
            </View >
        );
    }
}


export default SettingsScreen;