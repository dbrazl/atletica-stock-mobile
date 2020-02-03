import React, { useState, useEffect } from 'react';
import _ from 'lodash';

import { isOnString } from '../../../utils';
import { SignInSchema } from '../../../schema/Auth';

import { useDispatch } from 'react-redux';
import { signInRequest } from '../../../store/modules/auth/actions';

import View from './view';

export default function Model({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [validate, setValidate] = useState({});

    const [errorMessageUsername, setErrorMessageUsername] = useState('');
    const [errorMessagePassword, setErrorMessagePassword] = useState('');

    const [errorUsername, setErrorUsername] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);

    const dispatch = useDispatch();

    const goToLoading = () => {
        navigation.navigate('SignLoading');
    };

    const createValidate = () => {
        setValidate({ username, password });
    };

    const setFormErrors = err => {
        err.errors.forEach(error => {
            if (isOnString(error, 'usuário')) {
                setErrorUsername(true);
                setErrorMessageUsername(error);
            }

            if (isOnString(error, 'senha')) {
                setErrorPassword(true);
                setErrorMessagePassword(error);
            }
        });
    };

    const handleSubmit = async () => {
        try {
            await SignInSchema.validate(validate, {
                abortEarly: false,
            });

            dispatch(signInRequest(username, password));
            goToLoading();
        } catch (err) {
            setFormErrors(err);
        }
    };

    const onChangeUsername = text => {
        setUsername(text);
        setErrorUsername(false);
    };

    const onChangePassword = text => {
        setPassword(text);
        setErrorPassword(false);
    };

    useEffect(() => {
        submitForm = () => {
            if (!_.isEmpty(validate)) handleSubmit();
        };

        submitForm();
    }, [validate]);

    const viewProps = {
        goToLoading,
        createValidate,
        onChange: {
            onChangeUsername,
            onChangePassword,
        },
        data: {
            username,
            password,
        },
        errorMessage: {
            errorMessageUsername,
            errorMessagePassword,
        },
        error: {
            errorUsername,
            errorPassword,
        },
    };

    return <View viewProps={viewProps} />;
}
