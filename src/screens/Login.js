
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, TextInput, SafeAreaView, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
// Component

export default class Login extends Component {
    static navigationOptions= {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = { 
            email: '',
            password: '' 
        };
      }
    login(email, password){
        this.props.loginUser(email, password);
               
    }
    render() {
        if (this.props.isLoggedIn === true) {
            this.props.navigation.navigate('Home')
        }
        return (
            <SafeAreaView style={styles.container}>
                <KeyboardAvoidingView behavior='height' style={styles.container}>
                    <TouchableWithoutFeedback style={styles.container}>
                        <View>
                            <Text style={styles.title}>S P I N E ` S</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Email"
                                placeholderTextColor='rgba(0,0,0,0.5)'
                                onChangeText={(text) => this.setState({email:text})}
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
                                returnKeyType='go'
                                onChangeText={(text) => this.setState({password:text})}
                                value={this.state.password}
                                secureTextEntry
                                autoCorrect={false}
                                ref={'txtPassword'}
                            />
                            <TouchableOpacity style={styles.buttonLogin} onPress={()=> this.login(this.state.email, this.state.password)}>
                                <Text style={styles.buttonText}>Log In</Text>
                            </TouchableOpacity>
                            <View style={styles.hrLine} />
                            <TouchableOpacity style={styles.buttonRegister} onPress={()=> this.props.navigation.navigate('Register')}> 
                                <Text style={styles.buttonText}>Register</Text>
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
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 40,
        paddingHorizontal: 10,
        color: '#009C71',

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
        justifyContent: 'space-around',
        alignItems: 'stretch',
    },
    hrLine: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        margin: 10,

    },
});
