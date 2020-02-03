import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Feather';

import { Container, Message } from './styles';
import Button from '../../Auth/Button';

export default function ErrorHandler({
    message,
    messageColor,
    fontSize,
    animation,
    duration,
    delay,
    icon,
    iconSize,
    iconColor,
    onPress,
    buttonLabel,
    buttonWidth,
    buttonColor,
    buttonMarginTop,
    buttonMarginBottom,
    noButton,
}) {
    return (
        <Container animation={animation} duration={duration} delay={delay}>
            <Icon name={icon} size={iconSize} color={iconColor} />
            <Message color={messageColor} fontSize={fontSize}>
                {message}
            </Message>
            {!noButton && (
                <Button
                    label={buttonLabel}
                    onPress={onPress}
                    color={buttonColor}
                    width={buttonWidth}
                    marginTop={buttonMarginTop}
                    marginBottom={buttonMarginBottom}
                />
            )}
        </Container>
    );
}

ErrorHandler.propTypes = {
    message: PropTypes.string,
    messageColor: PropTypes.string,
    fontSize: PropTypes.number,
    animation: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    duration: PropTypes.number,
    delay: PropTypes.number,
    icon: PropTypes.string,
    iconSize: PropTypes.number,
    iconColor: PropTypes.string,
    onPress: PropTypes.func,
    buttonLabel: PropTypes.string,
    buttonColor: PropTypes.string,
    buttonWidth: PropTypes.number,
    buttonMarginTop: PropTypes.number,
    buttonMarginBottom: PropTypes.number,
    noButton: PropTypes.bool,
};

ErrorHandler.defaultProps = {
    message: 'Erro',
    messageColor: '#fff',
    fontSize: 18,
    animation: '',
    duration: 0,
    delay: 0,
    icon: 'cloud-off',
    iconSize: 50,
    iconColor: '#fff',
    onPress: () => {},
    buttonLabel: 'Voltar',
    buttonColor: '#DEB356',
    buttonWidth: 150,
    buttonMarginTop: 0,
    buttonMarginBottom: 0,
    noButton: false,
};
