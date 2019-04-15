// Libs
import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Account from '../screens/Account';
import Home from '../screens/Home';
import Product from '../screens/ProductContainers';

const AppNavigator = createMaterialBottomTabNavigator(
    {   
        Home: {
            screen: Product,
            navigationOptions: {
                tabBarLabel: 'Home',
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="home" size={28} color={tintColor} />
                    
                ),
            }
        },
        Account: {
            screen: Account,
            navigationOptions: {
                tabBarLabel: 'Account',
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="user" size={28} color={tintColor} />
                )
            }
        }
    }, {
        initialRouteName: 'Home',
        activeColor: '#009C71',
        inactiveColor: 'gray',
        showIcon: true,
        barStyle: {
            backgroundColor: 'white',
            height: 55,
        },
    }
);
export default AppNavigator;

