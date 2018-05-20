import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class CotacaoApi extends Component {
    state = { valores: [] };

    componentWillMount() {
        axios.get('https://api.hgbrasil.com/finance?format=json&key=30842c3a')
        .then(res => {
            console.log(res.data.results.currencies.USD);
            this.setState({ valores: res.data.results.currencies.USD });
        });
    }

    render() {
        return (
            <View style={{ alignItems: 'center', paddingTop: 8 }}>
                <Text style={styles.textStyle}>{this.state.valores.name}</Text>
                <Text style={styles.textStyle}>{this.state.valores.buy}</Text>
            </View>
        );
    }
}

const styles = {
    textStyle : {
        color: 'white',
        fontStyle: 'italic',
        fontWeight: 'bold',
        textShadowColor: '#252525',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
}

export default CotacaoApi;