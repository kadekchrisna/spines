
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, TextInput, SafeAreaView, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
// Component

export default class Account extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <KeyboardAvoidingView behavior='height' style={styles.container}>
                    <TouchableWithoutFeedback style={styles.container}>
                        <View>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter Email"
                                placeholderTextColor='rgba(0,0,0,0.5)'
                                keyboardType='email-address'
                                returnKeyType='next'
                                autoCorrect={false}
                                ref={'txtPassword'}
                            />

                            <TextInput
                                style={styles.input}
                                placeholder="Enter Password"
                                placeholderTextColor='rgba(0,0,0,0.5)'
                                returnKeyType='go'
                                secureTextEntry
                                autoCorrect={false}
                                ref={'txtPassword'}
                            />
                            <TouchableOpacity style={styles.buttonLogin}>
                                <Text style={styles.buttonText}>Log In</Text>
                            </TouchableOpacity>
                            <View style={styles.hrLine} />
                            <TouchableOpacity style={styles.buttonRegister}>
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
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    hrLine: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        margin: 10,

    },
});
