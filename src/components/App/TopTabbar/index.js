import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import user from '../../../assets/pictures/user.png';
import Icon from 'react-native-vector-icons/Feather';

import { Container, Back, Perfil, Name, Photo } from './styles';

export default function TopTabbar({ goBack, noBack, noPerfil }) {
    const profile = useSelector(state => state.user.profile);
    const { name, avatar } = profile ? profile : {};
    const { uri } = avatar ? avatar : {};
    const source = uri ? { uri } : user;

    const selectJustifyContent = () => {
        if (noBack) return 'flex-end';
        if (noPerfil) return 'flex-start';
        return 'space-between';
    };

    return (
        <Container justifyContent={selectJustifyContent()}>
            {!noBack && (
                <Back onPress={goBack}>
                    <Icon name="arrow-left" size={50} color="#38352D" />
                </Back>
            )}
            {!noPerfil && (
                <Perfil>
                    <Name>Olá, {name ? name : 'Usuário'}</Name>
                    <Photo source={source} />
                </Perfil>
            )}
        </Container>
    );
}

TopTabbar.propTypes = {
    goBack: PropTypes.func,
    noBack: PropTypes.bool,
    noPerfil: PropTypes.bool,
};

TopTabbar.defaultProps = {
    goBack: () => {},
    noBack: false,
    noPerfil: false,
};
