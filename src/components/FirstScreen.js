import React from 'react';
import {
    Header,
    Button
} from 'react-native-elements';
import {
    Text,
    View,
    Image
} from 'react-native';

const FirstScreen = () => (
    <View>
        <Header
            backgroundColor={'#F8F8FF'} // Color: GhostWhite
            centerComponent={{ text: 'HOME', style: { color: 'rgba(92, 99,216, 1)', fontSize: 20, fontWeight: 'bold' } }}
            rightComponent={{ icon: 'settings', color: 'rgba(92, 99,216, 1)' }}
        />
        <View style={styles.container}>
            <Text style={styles.textStyle}>Cloud Mining</Text>
            <Text style={styles.managerTextStyle}>Manager</Text>
            <Image
                style={{ width: 250, height: 250, paddingTop: 35 }}
                source={{ uri: 'http://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Bitcoin-PNG-Image-500x496.png' }}
            />
            <View style={styles.textContainer}>
                <Text>
                    Data aproximada para seu
                </Text>
                <Text>
                    próximo contrato de U$ X:
                </Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.dateTextStyle}>
                    01/01/2019
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="CONTRATOS"
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

const styles = {
    container: {
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
    },
    managerTextStyle: {
        fontSize: 42,
        fontWeight: 'bold',
    },
    dateTextStyle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'red',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    },
    iconStyle: {

    }
}

export default FirstScreen;