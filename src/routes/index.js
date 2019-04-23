import { createStackNavigator } from 'react-navigation';

import AppNavigator from './BottomNav';
import Detail from '../screens/DetailsContainers';
import Carts from '../screens/CartsContainers';
import Checkout from '../screens/CheckoutContainers';
import Login from '../screens/LoginContainers';
import Register from '../screens/RegisterContainers';
import Splash from '../screens/SplashContainers';
import Product from '../screens/ProductContainers';
import History from '../screens/HistoryContainers';

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
        },
        Product: {
            screen: Product
        },
        History: {
            screen: History
        }
    },
    {
        initialRouteName: 'Splash'
    }
);
export default rootStack;
