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

class ListaContratos extends Component {
    render() {
        return (
            <View>
                <Card>
                    <ScrollView>
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
            </View>
        );
    }
}

export default ListaContratos;