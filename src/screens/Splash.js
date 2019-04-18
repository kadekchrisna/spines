import React, { Component } from 'react';
import { View, StatusBar, StyleSheet, Text } from 'react-native';
import { WaveIndicator } from 'react-native-indicators';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { getMyValue } from '../redux/storage/AsyncStorage';

export default class Splash extends Component {

    static navigationOptions = {
        header: null
    }

    constructor() {
        super();
        this.state = {
            isLoading: true
        };
        this.performTimeConsumingTask();
    }

    async componentDidMount() {
        const token = await getMyValue('token')
        // console.log(token);
        if (token) {
            this.props.getUserData(token);
        }

    }

    performTimeConsumingTask = async () => {
        setTimeout(
            () => {
                this.props.navigation.navigate('Home')
            },
            2000
        )
    }

    render() {
        return (
            <View style={styles.viewStyles}>
                <StatusBar backgroundColor="#009C71" barStyle="light-content" />
                <Text style={styles.textStyles}>
                    <Icon name="alpha-s" size={80} color='white' />
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewStyles: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#009C71'
    },
    textStyles: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    }
}); 
