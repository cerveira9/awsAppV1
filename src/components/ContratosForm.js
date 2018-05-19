import React, { Component } from 'react';
import {
    Text,
    View,
    Picker,
    ScrollView,
    TextInput,
    Platform,
    Image,
    Dimensions
} from 'react-native';
import {
    Header,
    ListItem
} from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import ActionSheet from 'react-native-actionsheet';
import CardItem from '../common/CardItem';
import Input from '../common/Input';

const remote = 'http://colorhunt.co/blog/gradient-wallpapers-mobile/colorhunt-5.png';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class ContratosForm extends Component {
    constructor(props) {
        super(props);
        this.state = { chosenDate: new Date() };

        this.setDate = this.setDate.bind(this);
    }

    setDate(newDate) {
        this.setState({ chosenDate: newDate })
    }

    showActionSheet = () => {
        this.ActionSheet.show()
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.content}>
                        <Text style={styles.logo}>- CMM -</Text>
                        <View style={styles.cardsContainer}>
                            <CardItem>
                                <Text style={styles.textStyle}>Valor U$:</Text>
                                <TextInput
                                    style={styles.input}
                                    underlineColorAndroid='transparent'
                                    keyboardType="numeric"
                                    placeholder="2,56 ou 2.56"
                                    style={{ height: 40, width: 200, paddingLeft: 20 }}
                                />
                            </CardItem>
                            <CardItem>
                                <Text style={styles.textStyle}>CMP:</Text>
                                <TextInput
                                    style={styles.input}
                                    underlineColorAndroid='transparent'
                                    keyboardType="numeric"
                                    placeholder="0,5 ou 0.5"
                                    style={{ height: 40, width: 200, paddingLeft: 20 }}
                                />
                            </CardItem>

                            <CardItem>
                                <View style={styles.container}>
                                    <Text style={styles.datePickerTextStyle}>Selecione a Data:</Text>
                                    <DatePicker
                                        style={{ width: 200, alignSelf: 'center' }}
                                        date={this.state.date}
                                        mode="date"
                                        format="DD-MM-YYYY"
                                        confirmBtnText="Confirm"
                                        cancelBtnText="Cancel"
                                        customStyles={{
                                            dateIcon: {
                                                position: 'absolute',
                                                left: 0,
                                                top: 4,
                                                marginLeft: 0,
                                            },
                                            dateInput: {
                                                marginLeft: 36
                                            }
                                            // ... You can check the source to find the other keys.
                                        }}
                                        onDateChange={(date) => { this.setState({ date: date }) }}
                                    />
                                </View>
                            </CardItem>
                            <CardItem style={{ flexDirection: 'column' }}>
                                <Text style={styles.pickerTextStyle} onPress={this.showActionSheet}>Descrição:</Text>
                                {
                                    (Platform.OS === 'ios') ? <ActionSheet
                                        ref={o => this.ActionSheet = o}
                                        title={'Descrição'}
                                        options={[
                                            'Bônus de Mineração',
                                            'Bônus Residual',
                                            'Bônus de Equipe',
                                            'Bônus de Aceleração',
                                            'Valor Total',
                                            'Cancelar'
                                        ]}
                                        cancelButtonIndex={5}
                                        destructiveButtonIndex={5}
                                        onPress={(index) => { /* do something */ }}
                                    /> : <Picker
                                        mode="dropdown"
                                    >
                                            <Picker.Item label="Bônus de Mineração" value="Bônus_de_Mineração" />
                                            <Picker.Item label="Bônus Residual" value="Bônus_Residual" />
                                            <Picker.Item label="Bônus de Equipe" value="Bônus_de_Equipe" />
                                            <Picker.Item label="Bônus de Aceleração" value="Bônus_de_Aceleração" />
                                            <Picker.Item label="Valor Total" value="Valor_Total" />
                                        </Picker>
                                }

                            </CardItem>
                        </View>

                    </View>







                </View>
            </ScrollView>
        );
    }
}

const styles = {
    container: {
        flex: 1,
    },
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    },
    datePickerTextStyle: {
        paddingTop: 5,
        fontSize: 18,
        paddingLeft: 20
    },
    textStyle: {
        fontSize: 18,
        paddingLeft: 20,
        paddingTop: 10
    },
    cardsContainer: {
        margin: 20,
        marginBottom: 0,
        padding: 20,
        paddingBottom: 10,
        alignSelf: 'stretch',
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: 'rgba(255,255,255,0.2)',

    },
    backgroundImage: {
        flex: 1,
        alignSelf: 'stretch',
        width: null,
        justifyContent: 'center',
        position: 'absolute'
    },
    content: {
        alignItems: 'center',
    },
    logo: {
        color: 'white',
        fontSize: 40,
        fontStyle: 'italic',
        fontWeight: 'bold',
        textShadowColor: '#252525',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 15,
        marginBottom: 20,
        paddingTop: 20,
    },
    input: {
        fontSize: 16,
        height: 40,
        padding: 10,
        marginBottom: 10,
        backgroundColor: 'rgba(255,255,255,0.5)'
    }
};

export default ContratosForm;