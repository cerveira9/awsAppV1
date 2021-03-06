import React, { Component } from 'react';
import {
    Header,
    Button,
    Icon
} from 'react-native-elements';
import {
    Text,
    View,
    Image,
    Dimensions,
} from 'react-native';
import CotacaoApi from './CotacaoApi';

const remote = 'http://colorhunt.co/blog/gradient-wallpapers-mobile/colorhunt-5.png';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class FirstScreen extends Component {
    static navigationOptions = {
        title: 'Home',
        tabBarIcon: ({ tintColor }) => {
            return <Icon name="home" size={30} color={tintColor} />;
        }
    }

    render() {
        return (
            <View>
                <View >
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
                    <View style={styles.container}>
                        <Text style={styles.textStyle}>Cloud Mining</Text>
                        <Text style={styles.managerTextStyle}>Manager</Text>
                        <Image
                            style={{ width: 250, height: 250, paddingTop: 35 }}
                            source={{ uri: 'http://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Bitcoin-PNG-Image-500x496.png' }}
                        />
                        <View style={styles.textContainer}>
                            <Text style={styles.preDataTextStyle}>
                                Data aproximada para seu
                            </Text>
                            <Text style={styles.preDataTextStyle}>
                                próximo contrato de U$ X:
                            </Text>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.dateTextStyle}>
                                01/01/2019
                            </Text>
                        </View>
                        <View>
                            <CotacaoApi />
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = {
    container: {
        marginTop: 25,
        paddingTop: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        paddingTop: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        paddingTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        fontSize: 30,
        color: 'white'
    },
    managerTextStyle: {
        fontSize: 42,
        fontWeight: 'bold',
        color: 'white'
    },
    dateTextStyle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'red',
        paddingTop: 20
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    },
    preDataTextStyle: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    }
}

export default FirstScreen;