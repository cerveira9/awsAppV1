import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    Platform
} from 'react-native';
import { Button } from 'react-native-elements';
import CardItem from '../common/CardItem';
import Input from '../common/Input';
import ListaContratos from './ListaContratos';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class ContratosScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Contratos',
            headerRight: (
                <Button
                    title='Novo Contrato'
                    onPress={() => navigation.navigate('adicionar')}
                    backgroundColor="rgba(0,0,0,0)"
                    color="rgba(0, 122, 255, 1)"
                />
            ),
            style: {
                marginTop: Platform.OS === 'android' ? 24 : 0
            }
        };
    }

    render() {
        return (
            <View style={{ paddingTop: 5 }}>
                <View style={styles.listaStyle}>
                    <ListaContratos />
                </View>
                <CardItem style={styles.cardItemStyle}>
                    <Input 
                        label='Valor do Contrato: U$'
                        placeholder='40'
                    />
                </CardItem>
                {/* <View style={styles.buttonContainer}>
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
                </View> */}
            </View>
        );
    }
}

styles = StyleSheet.create({
    listaStyle: {
        height: 350,
        width: SCREEN_WIDTH
    },
    subtitleView: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingTop: 5
    },
    ratingImage: {
        height: 19.21,
        width: 100
    },
    buttonContainer: {
        paddingTop: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ratingText: {
        paddingLeft: 10,
        color: 'grey'
    },
    cardItemStyle: {
        paddingTop: 40,

    }
})

export default ContratosScreen;