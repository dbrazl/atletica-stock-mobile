import React from 'react';
import PropTypes from 'prop-types';

import { Container, Pulse, Icon } from './styles';

export default function Loader({
    animation,
    delay,
    duration,
    name,
    size,
    color,
}) {
    return (
        <Container animation={animation} delay={delay} duration={duration}>
            <Pulse>
                <Icon name={name} size={size} color={color} />
            </Pulse>
        </Container>
    );
}

Loader.propTypes = {
    animation: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    delay: PropTypes.number,
    duration: PropTypes.number,
    name: PropTypes.string,
    size: PropTypes.number,
    color: PropTypes.string,
};

Loader.defaultProps = {
    animation: '',
    delay: 0,
    duration: 1000,
    name: 'watch',
    size: 60,
    color: '#fff',
};
