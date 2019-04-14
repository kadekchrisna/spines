
import React, { Component } from 'react';
import { Provider } from 'react-redux'

import Main from './src/Main';
import {abc} from './src/redux/stores/index';


export default class App extends Component {
    render() {
        return (
            <Provider store={abc}> 
                <Main />
            </Provider>
        );
    }
}