
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';

import AppNavigator from './routes';

const AppIndex = createAppContainer(AppNavigator);

export default class Main extends Component {
    render() {
        return (
            <AppIndex/>
        );
    }
}

