import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { Header } from 'react-native-elements';
import { emailChanged, passwordChanged, loginUser, logoutUser } from '../actions';
import Card from '../common/Card';
import CardItem from '../common/CardItem';
import Input from '../common/Input';
import Button from '../common/Button';
import Spinner from '../common/Spinner';


class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text); //action creator
    }

    onButtonPress() {
        const { email, password } = this.props;

        this.props.loginUser({ email, password });
    }

    onLogoutPress() {
        firebase.auth().signOut();
        this.props.logoutUser();
    }

    renderError() {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    renderButon() {
        if (this.props.loading) {
            return <Spinner size="large" />;
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
                    </Button>
        );
    }

    loggedIn() {
        if (!this.props.loggedIn) {
            return (
                <View style={styles.viewContainer}>
                    <Header
                        centerComponent={{ text: 'LOGIN', style: { color: '#fff', fontSize: 18, fontWeight: 'bold' } }}
                    />
                    <Image
                        style={styles.imgStyle}
                        source={{ uri: '/Volumes/HDD/Code/React-Native/ESTUDOS/TRABALHOS/manager/src/img/LOGO.png' }}
                    />
                    <Card>
                        <CardItem>
                            <Input
                                label="Email"
                                placeholder="email@gmail.com"
                                onChangeText={this.onEmailChange.bind(this)}
                                value={this.props.email}
                            />
                        </CardItem>

                        <CardItem>
                            <Input
                                secureTextEntry
                                label="Password"
                                placeholder="password"
                                onChangeText={this.onPasswordChange.bind(this)}
                                value={this.props.password}
                            />
                        </CardItem>

                        {this.renderError()}

                        <CardItem>
                            {this.renderButon()}
                        </CardItem>
                    </Card>
                </View>
            );
        }
        return (
            <View style={styles.buttonLogout}>
                <Button onPress={this.onLogoutPress.bind(this)}>
                    Log Out
                </Button>
            </View>
        );
    }

    render() {
        return (
            this.loggedIn()
        );
    }
}

const styles = {
    errorTextStyle: {
        color: 'red',
        fontSize: 20,
        alignSelf: 'center',
    },
    buttonLogout: {
        marginTop: 10,
        flexDirection: 'row'
    },
    viewContainer: {
        backgroundColor: 'white'
    },
    imgStyle: {
        marginTop: 100,
        marginBottom: 100,
        alignSelf: 'center',
        width: 259.6,
        height: 93,
        justifyContent: 'center',
        alignItems: 'center',
        
    }
};

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading, loggedIn } = auth;

    return { email, password, error, loading, loggedIn };
};

export default connect(mapStateToProps, {
    emailChanged,
    passwordChanged,
    loginUser,
    logoutUser
})(LoginForm);
