
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, TextInput, SafeAreaView, StatusBar, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native';
// Component

export default class Register extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props)
        this.state = {
            username: 'q',
            email: 'q@gmail.com',
            password: '123456',
            confPassword: '123456'
        }
    }
    onValidate = () => {
        if (this.state.password === this.state.confPassword) {
            this.props.registerUser(this.state.username, this.state.email, this.state.password) 
            return this.props.navigation.navigate('Home')
                      
        }
        return Alert.alert('Password and confirmation password must be same!')
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor="#E7E7E7" barStyle="dark-content" />
                <KeyboardAvoidingView behavior='height' style={styles.container}>
                    <TouchableWithoutFeedback style={styles.container}>
                        <View>
                            <Text style={styles.title}>R E G I S T E R</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Username"
                                placeholderTextColor='rgba(0,0,0,0.5)'
                                onChangeText={(text) => this.setState({ username: text })}
                                value={this.state.username}
                                returnKeyType='next'
                                autoCorrect={false}
                                ref={'txtPassword'}
                            />

                            <TextInput
                                style={styles.input}
                                placeholder="Email"
                                placeholderTextColor='rgba(0,0,0,0.5)'
                                onChangeText={(text) => this.setState({ email: text })}
                                value={this.state.email}
                                keyboardType='email-address'
                                returnKeyType='next'
                                autoCorrect={false}
                                ref={'txtPassword'}
                            />

                            <TextInput
                                style={styles.input}
                                placeholder="Password"
                                placeholderTextColor='rgba(0,0,0,0.5)'
                                onChangeText={(text) => this.setState({ password: text })}
                                value={this.state.password}
                                returnKeyType='next'
                                secureTextEntry
                                autoCorrect={false}
                                ref={'txtPassword'}
                            />

                            <TextInput
                                style={styles.input}
                                placeholder="Confirm Password"
                                placeholderTextColor='rgba(0,0,0,0.5)'
                                onChangeText={(text) => this.setState({ confPassword: text })}
                                value={this.state.confPassword}
                                returnKeyType='go'
                                secureTextEntry
                                autoCorrect={false}
                                ref={'txtPassword'}
                            />
                            <TouchableOpacity style={styles.buttonRegister} onPress={() => this.onValidate()}>
                                <Text style={styles.buttonText}>Register</Text>
                            </TouchableOpacity>
                            <View style={styles.hrLine} />
                            <TouchableOpacity style={styles.buttonLogin} onPress={() => this.props.navigation.navigate('Login')}>
                                <Text style={styles.buttonText}>Log In</Text>
                            </TouchableOpacity>

                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({

    input: {
        height: 40,
        backgroundColor: 'rgba(128,128,128,0.2)',
        color: '#000',
        marginBottom: 20,
        paddingHorizontal: 10
    },
    buttonLogin: {
        backgroundColor: '#f7c744',
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    buttonRegister: {
        backgroundColor: '#009C71',
        paddingHorizontal: 15,
        paddingVertical: 10

    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 40,
        paddingHorizontal: 10,
        color: '#f7c744',

    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },
    container: {
        flex: 1,
        paddingHorizontal: 6,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    hrLine: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        margin: 10,

    },
});
