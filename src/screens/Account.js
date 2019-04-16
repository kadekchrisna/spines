
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, TextInput, SafeAreaView, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
// Component

export default class Account extends Component {

    componentDidMount(){
        this.props.navigation.addListener('didFocus', ()=> {
            if (this.props.isLoggedIn == false) {
                this.props.navigation.navigate('Login')
            }
        })
             
    }

    render() {
        const {id, username, email} = this.props.user
        console.log(this.props.user);
        

        return (
            <View style={styles.container}>
                <Text>Account Name: {username}</Text>
            </View>
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
        alignItems: 'center',
    },
    hrLine: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        margin: 10,

    },
});
