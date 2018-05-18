import React from 'react';
import {
    Header,
    Button
} from 'react-native-elements';
import {
    Text,
    View,
    Image
} from 'react-native';

const SettingsScreen = () => (
    <View>
        <Header
            backgroundColor={'#F8F8FF'} // Color: GhostWhite
            centerComponent={{ text: 'SETTINGS', style: { color: 'rgba(92, 99,216, 1)', fontSize: 20, fontWeight: 'bold' } }}
            leftComponent={{ icon: 'keyboard-arrow-left', color: 'rgba(92, 99,216, 1)' }}
        />
    </View>
);

export default SettingsScreen;