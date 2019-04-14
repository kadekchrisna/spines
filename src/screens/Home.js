
import React, { Component } from 'react';
import { View } from 'react-native';

import Products from '../redux/components/ProductContainers'

export default class Home extends Component {
    render() {
        return (
            <Products />
        );
    }
}
