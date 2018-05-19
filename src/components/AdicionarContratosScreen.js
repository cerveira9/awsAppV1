import React, { Component } from 'react';
import {
    View,
    Dimensions,
    Image
} from 'react-native';
import {
    Header,
    Button
} from 'react-native-elements';
import ContratosForm from './ContratosForm';

const remote = 'http://colorhunt.co/blog/gradient-wallpapers-mobile/colorhunt-5.png';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class AdicionarContratosScreen extends Component {
    render() {
        return (
            <View>
                <Header
                    backgroundColor={'#F8F8FF'} // Color: GhostWhite
                    centerComponent={{ text: 'ADICIONAR', style: { color: 'rgba(92, 99,216, 1)', fontSize: 20, fontWeight: 'bold' } }}
                    leftComponent={{ icon: 'keyboard-arrow-left', color: 'rgba(92, 99,216, 1)' }}
                />
                <View>
                    <Image
                        style={{
                            backgroundColor: 'rgba(92, 99,216, 1)',
                            flex: 1,
                            position: 'absolute',
                            width: SCREEN_WIDTH,
                            height: SCREEN_HEIGHT,
                            justifyContent: 'center',
                        }}
                        source={{ uri: remote }}
                    />
                    <View style={styles.contratosFormStyle}>
                        <ContratosForm />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button
                            title="ADICIONAR"
                            titleStyle={{ fontWeight: 'bold' }}
                            buttonStyle={{
                                backgroundColor: "rgba(92, 99,216, 1)",
                                width: 300,
                                height: 45,
                                borderColor: "transparent",
                                borderWidth: 0,
                                borderRadius: 30
                            }}
                            containerStyle={{ marginTop: 20 }}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = {
    buttonContainer: {
        paddingTop: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    },
    contratosFormStyle: {
        width: SCREEN_WIDTH
    }
};

export default AdicionarContratosScreen;