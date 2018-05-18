import React, { Component } from 'react';
import {
    Text,
    View,
    Picker,
    DatePickerIOS,
} from 'react-native';
import {
    Header,
    Button,
    ListItem
} from 'react-native-elements';
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

    render() {
        return (
                <View>
                    <Text style={styles.datePickerTextStyle}>Selecione a Data:</Text>
                    <CardItem>
                        <View style={styles.container}>
                            <DatePickerIOS
                                date={this.state.chosenDate}
                                onDateChange={this.setDate}
                            />
                        </View>
                    </CardItem>

                    <CardItem>
                        <Input
                            label="Valor"
                            placeholder="2,43 ou 2.43"

                        />
                    </CardItem>

                    <CardItem style={{ flexDirection: 'column' }}>
                        <Text style={styles.pickerTextStyle}>Descrição</Text>
                        <Picker>
                            <Picker.Item label="Bônus de Mineração" value="Bônus_de_Mineração" />
                            <Picker.Item label="Bônus Residual" value="Bônus_Residual" />
                            <Picker.Item label="Bônus de" value="Bônus_de_Equipe" />
                            <Picker.Item label="Bônus de" value="Bônus_de_Aceleração" />
                            <Picker.Item label="Valor Total" value="Valor_Total" />
                        </Picker>
                    </CardItem>
                    <CardItem>
                        <Input
                            label="CMP"
                            placeholder="0.5"
                        />
                    </CardItem>
                </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
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
    }
};

export default ContratosForm;