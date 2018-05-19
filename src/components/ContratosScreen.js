import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    Image
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
        tabBarLabel:"Contratos",
        tabBarIcon:({tintColor, focused}) => {
            if(focused){
              return(
                <Image source={require('../img/icons/contracts_on.png')} style={{width:20, height:20, tintColor: 'rgba(92, 99,216, 1)'}} />
              );
            }else{
              return(
                <Image source={require('../img/icons/contracts_off.png')} style={{width:20, height:20, tintColor: 'rgba(92, 99,216, 1)'}} />
              );
            }
            
        }
    });


    render() {
        return (
            <View>
                {/*<Header
                    backgroundColor={'#F8F8FF'} // Color: GhostWhite
                    centerComponent={{ text: 'CONTRATOS', style: { color: 'rgba(92, 99,216, 1)', fontSize: 20, fontWeight: 'bold' } }}
                />*/}
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