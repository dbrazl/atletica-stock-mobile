import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import logo from '../../../assets/pictures/logo.png';

import { Container, Logo, Scroll, Content } from './styles';
import Input from '../../../components/Auth/Input';
import Button from '../../../components/Auth/Button';
import { Dimensions, BackHandler } from 'react-native';

export default function View({ viewProps }) {
    const [width, setWidth] = useState(Dimensions.get('window').width);

    const {
        goToLoading,
        createValidate,
        onChange,
        data,
        error,
        errorMessage,
    } = viewProps;

    const { onChangeUsername, onChangePassword } = onChange;
    const { errorUsername, errorPassword } = error;
    const { errorMessageUsername, errorMessagePassword } = errorMessage;
    const { username, password } = data;

    const orientationChange = event => {
        const { width } = event.screen;
        setWidth(width);
    };

    useEffect(() => {
        Dimensions.addEventListener('change', event =>
            orientationChange(event)
        );

        return () => {
            Dimensions.removeEventListener('change');
        };
    }, []);

    return (
        <Container>
            <Scroll>
                <Content>
                    <Logo source={logo} />
                    <Input
                        placeholder="Usuário"
                        value={username}
                        onChangeText={onChangeUsername}
                        error={errorUsername}
                        errorMessage={errorMessageUsername}
                        width={width}
                        marginTop={30}
                        marginBottom={30}
                    />
                    <Input
                        placeholder="Senha"
                        value={password}
                        onChangeText={onChangePassword}
                        secureTextEntry
                        error={errorPassword}
                        errorMessage={errorMessagePassword}
                        width={width}
                        marginBottom={50}
                    />
                    <Button label="Entrar" onPress={createValidate} />
                </Content>
            </Scroll>
        </Container>
    );
}

View.propTypes = {
    viewProps: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

View.defaultProps = {
    viewProps: {},
};
