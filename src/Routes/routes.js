import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import {
    SignSwitchNavigator,
    UserSwitchNavigator,
    DirectorSwitchNavigator,
} from './navigators';

import NoInternet from '../pages/NoInternet';

selectBottomMenu = (isSigned, personality, isConnected) => {
    if (!isConnected) return 'NoInternet';
    if (isSigned && personality === 'director') return 'Director';
    if (isSigned) return 'User';
    return 'Sign';
};

navigation = (isSigned, personality, isConnected) =>
    createSwitchNavigator(
        {
            NoInternet,
            Sign: SignSwitchNavigator,
            User: UserSwitchNavigator,
            Director: DirectorSwitchNavigator,
        },
        {
            initialRouteName: selectBottomMenu(
                isSigned,
                personality,
                isConnected
            ),
        }
    );

export default (isSigned = false, personality = 'user', isConnected = true) =>
    createAppContainer(navigation(isSigned, personality, isConnected));
