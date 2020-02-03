import { createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';

import { tabBarOptions } from './options';
import { authTransition } from './transitions';

import SplashArt from '../pages/SplashArt';
import SignIn from '../pages/Auth/SignIn';
import SignLoading from '../pages/Auth/Loading';
import SignError from '../pages/Auth/SignError';

import ProductList from '../pages/App/ProductList';
import Account from '../pages/App/Account';

export const SignSwitchNavigator = createAnimatedSwitchNavigator(
    {
        Account,
        ProductList,
        SplashArt,
        SignIn,
        SignLoading,
        SignError,
    },
    {
        transition: authTransition(),
    }
);

export const UserSwitchNavigator = createBottomTabNavigator(
    {
        SplashArt,
        SignIn,
    },
    {
        tabBarOptions,
    }
);

export const DirectorSwitchNavigator = createBottomTabNavigator(
    {
        SignIn,
        // Delivery: {
        //     screen: productNavigate(),
        //     navigationOptions: deliveryNavigateOption,
        // },
        // NewRequest,
        // Profile,
    },
    {
        tabBarOptions,
    }
);
