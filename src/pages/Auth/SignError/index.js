import React from 'react';

import { useDispatch } from 'react-redux';
import { resetError } from '../../../store/modules/auth/actions';

import View from './view';

export default function Model({ navigation }) {
    const dispatch = useDispatch();

    goToSignIn = () => {
        navigation.navigate('SignIn');
    };

    resetErrorState = () => {
        dispatch(resetError());
    };

    tryAgain = () => {
        goToSignIn();
        resetErrorState();
    };

    return <View tryAgain={tryAgain} />;
}
