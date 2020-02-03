import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/Feather';
import { TextInput, Container } from './styles';

export default function SearchBar({ width, value, onChangeText, placeholder }) {
    return (
        <Container width={width}>
            <Icon name="search" size={24} color="#000" />
            <TextInput
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
            ></TextInput>
        </Container>
    );
}

SearchBar.propTypes = {
    width: PropTypes.number,
    value: PropTypes.string,
    onChangeText: PropTypes.func,
    placeholder: PropTypes.string,
};

SearchBar.defaultProps = {
    width: 200,
    value: '',
    onChangeText: () => {},
    placeholder: 'Pesquisar...',
};
