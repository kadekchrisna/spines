import { createStackNavigator } from 'react-navigation';

import AppNavigator from './BottomNav';

const rootStack = createStackNavigator(
    {
        Home: {
            screen: AppNavigator,
            headerMode: 'none',
            navigationOptions: {
                header: null
            }
        }
    },
    {
        initialRouteName: 'Home'
    }
);
export default rootStack;
