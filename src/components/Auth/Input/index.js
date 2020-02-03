import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Dimensions } from 'react-native';

import { Container, TextInput, Bar } from './styles';
import Error from '../Error';

export default function Input({
    autoFocus,
    autoCapitalize,
    autoCompleteType,
    autoCorrect,
    secureTextEntry,
    onChangeText,
    value,
    placeholder,
    keyboardType,
    error,
    errorMessage,
    width,
    marginTop,
    marginBottom,
}) {
    return (
        <Container marginTop={marginTop} marginBottom={marginBottom}>
            <TextInput
                autoFocus={autoFocus}
                autoCapitalize={autoCapitalize}
                autoCompleteType={autoCompleteType}
                autoCorrect={autoCorrect}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                onChangeText={onChangeText}
                value={value}
                placeholder={placeholder}
                width={width}
            />
            <Bar />
            {error && <Error width={width} message={errorMessage} />}
        </Container>
    );
}

Input.propTypes = {
    autoFocus: PropTypes.bool,
    autoCapitalize: PropTypes.string,
    autoCompleteType: PropTypes.string,
    autoCorrect: PropTypes.bool,
    secureTextEntry: PropTypes.bool,
    onChangeText: PropTypes.func,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    keyboardType: PropTypes.string,
    error: PropTypes.bool,
    errorMessage: PropTypes.string,
    width: PropTypes.number,
    marginTop: PropTypes.number,
    marginBottom: PropTypes.number,
};

Input.defaultProps = {
    autoFocus: false,
    autoCapitalize: 'none',
    autoCompleteType: 'off',
    autoCorrect: false,
    secureTextEntry: false,
    onChangeText: () => {},
    value: '',
    placeholder: 'Input',
    keyboardType: 'default',
    error: false,
    errorMessage: 'error',
    width: 200,
    marginTop: 0,
    marginBottom: 0,
};
