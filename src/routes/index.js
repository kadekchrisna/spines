import { createStackNavigator } from 'react-navigation';

import AppNavigator from './BottomNav';
import Detail from '../screens/DetailsContainers';
import Carts from '../screens/CartsContainers';
import Checkout from '../screens/Checkout';
import Login from '../screens/LoginContainers';
import Register from '../screens/RegisterContainers';
import Splash from '../screens/SplashContainers';

const rootStack = createStackNavigator(
    {
        Home: {
            screen: AppNavigator,
            headerMode: 'none',
            navigationOptions: {
                header: null
            }
        },
        Detail: {
            screen: Detail
        },
        Cart: {
            screen: Carts,
        },
        Checkout: {
            screen: Checkout
        },
        Login: {
            screen: Login
        },
        Register: {
            screen: Register
        },
        Splash: {
            screen: Splash
        }
    },
    {
        initialRouteName: 'Splash'
    }
);
export default rootStack;
