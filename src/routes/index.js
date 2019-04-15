import { createStackNavigator } from 'react-navigation';

import AppNavigator from './BottomNav';
import Detail from '../screens/DetailsContainers';
import Carts from '../screens/CartsContainers';
import Checkout from '../screens/Checkout';

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
            screen: Carts
        },
        Checkout: {
            screen: Checkout
        }
    },
    {
        initialRouteName: 'Home'
    }
);
export default rootStack;
