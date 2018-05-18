import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    ScrollView
} from 'react-native';
import {
    Header,
    Button,
    ListItem
} from 'react-native-elements';
import Card from '../common/Card';

class ContratosScreen extends Component {

    render() {
        return (
            <View>
                <Header
                    backgroundColor={'#F8F8FF'} // Color: GhostWhite
                    centerComponent={{ text: 'CONTRATOS', style: { color: 'rgba(92, 99,216, 1)', fontSize: 20, fontWeight: 'bold' } }}
                    leftComponent={{ icon: 'keyboard-arrow-left', color: 'rgba(92, 99,216, 1)' }}
                />
                <Card>
                    <ScrollView

                    >
                        <ListItem
                            title='(DATE)'
                            subtitle={
                                <View>
                                    <View style={styles.subtitleView}>
                                        <Text style={styles.ratingText}>Valor: (Value)</Text>
                                    </View>
                                    <View style={styles.subtitleView}>
                                        <Text style={styles.ratingText}>Descrição: (Description)</Text>
                                    </View>
                                    <View style={styles.subtitleView}>
                                        <Text style={styles.ratingText}>CMP: (CMP)</Text>
                                    </View>
                                </View>

                            }
                        />
                        <ListItem
                            title='(DATE)'
                            subtitle={
                                <View>
                                    <View style={styles.subtitleView}>
                                        <Text style={styles.ratingText}>Valor: (Value)</Text>
                                    </View>
                                    <View style={styles.subtitleView}>
                                        <Text style={styles.ratingText}>Descrição: (Description)</Text>
                                    </View>
                                    <View style={styles.subtitleView}>
                                        <Text style={styles.ratingText}>CMP: (CMP)</Text>
                                    </View>
                                </View>

                            }
                        />
                        <ListItem
                            title='(DATE)'
                            subtitle={
                                <View>
                                    <View style={styles.subtitleView}>
                                        <Text style={styles.ratingText}>Valor: (Value)</Text>
                                    </View>
                                    <View style={styles.subtitleView}>
                                        <Text style={styles.ratingText}>Descrição: (Description)</Text>
                                    </View>
                                    <View style={styles.subtitleView}>
                                        <Text style={styles.ratingText}>CMP: (CMP)</Text>
                                    </View>
                                </View>

                            }
                        />
                        <ListItem
                            title='(DATE)'
                            subtitle={
                                <View>
                                    <View style={styles.subtitleView}>
                                        <Text style={styles.ratingText}>Valor: (Value)</Text>
                                    </View>
                                    <View style={styles.subtitleView}>
                                        <Text style={styles.ratingText}>Descrição: (Description)</Text>
                                    </View>
                                    <View style={styles.subtitleView}>
                                        <Text style={styles.ratingText}>CMP: (CMP)</Text>
                                    </View>
                                </View>

                            }
                        />
                    </ScrollView>
                </Card>
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
        );
    }
}

styles = StyleSheet.create({
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
        paddingTop: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ratingText: {
        paddingLeft: 10,
        color: 'grey'
    }
})

export default ContratosScreen;