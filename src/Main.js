
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';

import rootStack from './routes';

const AppIndex = createAppContainer(rootStack);

export default class Main extends Component {
    render() {
        return (
            <AppIndex/>
        );
    }
}

