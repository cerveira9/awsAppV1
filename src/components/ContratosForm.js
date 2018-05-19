import React, { Component } from 'react';
import {
    Text,
    View,
    Picker,
    DatePickerIOS,
    ScrollView,
    TextInput,
    Platform,
    PickerIOS
} from 'react-native';
import {
    Header,
    ListItem
} from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import ActionSheet from 'react-native-actionsheet';
import CardItem from '../common/CardItem';
import Input from '../common/Input';

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
                <CardItem>
                    <Text style={styles.textStyle}>Valor U$:</Text>
                    <TextInput
                        keyboardType="numeric"
                        placeholder="2,56 ou 2.56"
                        style={{ height: 40, width: 200, paddingLeft: 20 }}
                    />
                </CardItem>

                <CardItem>
                    <Text style={styles.textStyle}>CMP:</Text>
                    <TextInput
                        keyboardType="numeric"
                        placeholder="0,5 ou 0.5"
                        style={{ height: 40, width: 200, paddingLeft: 20 }}
                    />
                </CardItem>

                <Text style={styles.datePickerTextStyle}>Selecione a Data:</Text>
                <CardItem>
                    <View style={styles.container}>
                        <DatePicker
                            style={{ width: 200 }}
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
                            options={['Bônus de Mineração', 'Bônus Residual', 'Valor Total', 'Cancelar']}
                            cancelButtonIndex={3}
                            destructiveButtonIndex={3}
                            onPress={(index) => { /* do something */ }}
                        /> : <Picker
                            mode="dropdown"
                        >
                                {/* <Picker.Item label="Bônus de Mineração" value="Bônus_de_Mineração" />
                        <Picker.Item label="Bônus Residual" value="Bônus_Residual" />
                        <Picker.Item label="Bônus de Equipe" value="Bônus_de_Equipe" />
                        <Picker.Item label="Bônus de Aceleração" value="Bônus_de_Aceleração" /> */}
                                <Picker.Item label="Valor Total" value="Valor_Total" />
                            </Picker>
                    }

                </CardItem>
            </ScrollView>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    },
    datePickerTextStyle: {
        paddingTop: 15,
        fontSize: 18,
        paddingLeft: 20
    },
    textStyle: {
        fontSize: 18,
        paddingLeft: 20,
        paddingTop: 10
    }
};

export default ContratosForm;