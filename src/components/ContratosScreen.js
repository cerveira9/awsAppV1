import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Dimensions
} from 'react-native';
import {
    Header,
    Button,
    ListItem
} from 'react-native-elements';
import CardItem from '../common/CardItem';
import Input from '../common/Input';
import ListaContratos from './ListaContratos';

const SCREEN_WIDTH = Dimensions.get('window').width;

class ContratosScreen extends Component {

    static navigationOptions = ({navigation}) => ({
        tabBarLabel:"Contratos"
    });


    render() {
        return (
            <View>
                <Header
                    backgroundColor={'#F8F8FF'} // Color: GhostWhite
                    centerComponent={{ text: 'CONTRATOS', style: { color: 'rgba(92, 99,216, 1)', fontSize: 20, fontWeight: 'bold' } }}
                    leftComponent={{ icon: 'keyboard-arrow-left', color: 'rgba(92, 99,216, 1)' }}
                />
                <View style={styles.listaStyle}>
                    <ListaContratos />
                </View>
                <CardItem style={styles.cardItemStyle}>
                    <Input 
                        label='Valor do Contrato: U$'
                        placeholder='40'
                    />
                </CardItem>
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