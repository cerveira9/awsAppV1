import React, { Component } from 'react';
import {
    View,
    ScrollView
} from 'react-native';
import {
    Header,
    Button
} from 'react-native-elements';
import ContratosForm from './ContratosForm';


class AdicionarContratosScreen extends Component {
    render() {
        return (
            <View>
                <Header
                    backgroundColor={'#F8F8FF'} // Color: GhostWhite
                    centerComponent={{ text: 'ADICIONAR', style: { color: 'rgba(92, 99,216, 1)', fontSize: 20, fontWeight: 'bold' } }}
                    leftComponent={{ icon: 'keyboard-arrow-left', color: 'rgba(92, 99,216, 1)' }}
                />
                <ScrollView>
                    <ContratosForm />
                </ScrollView>
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
    }
};

export default AdicionarContratosScreen;