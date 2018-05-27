import React, { Component } from 'react';
import { Icon } from 'react-native-elements';

import {
    Header,
    Button
} from 'react-native-elements';
import {
    Text,
    View,
    Image,
    Dimensions,
    Platform
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class SettingsScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Settings',
            tabBarIcon: ({ tintColor }) => {
                return <Icon name="settings" size={30} color={tintColor} />;
              },
            style: {
                marginTop: Platform.OS === 'android' ? 24 : 0
            }
        };
    }

    render() {
        return (
            <View style={{ paddingTop: 30 }}>
                <Text>Teste</Text>
            </View >
        );
    }
}


export default SettingsScreen;