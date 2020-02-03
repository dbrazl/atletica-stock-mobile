import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';

import View from './view';

export default function Model({ navigation }) {
    const error = useSelector(state => state.auth.error);
    const success = useSelector(state => state.auth.success);

    // const successSignUp = navigation.getParam('successSignUp');
    // const successRestoreAccount = navigation.getParam('successRestoreAccount');

    useEffect(() => {
        errorOnSignIn = () => {
            if (error) {
                navigation.navigate('SignError');
            }
        };

        // isSignUpSuccess = () => {
        //     if (success && successSignUp) {
        //         navigation.navigate(successSignUp);
        //     }
        // };

        // isRestoreAccountSuccess = () => {
        //     if (success && successRestoreAccount) {
        //         navigation.navigate(successRestoreAccount);
        //     }
        // };

        errorOnSignIn();
        // isSignUpSuccess();
        // isRestoreAccountSuccess();
    }, [error, success]);

    return <View />;
}
