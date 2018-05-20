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

    render() {
        return (
            <View style={{ paddingTop: 30 }}>
            <Text>Teste</Text>
            </View >
        );
    }
}


export default SettingsScreen;