import React from 'react';
import PropTypes from 'prop-types';

import logo from '../../assets/pictures/logo.png';
import { Container, Logo } from './styles';

export default function View({ animationEnd }) {
    return (
        <Container>
            <Logo source={logo} onAnimationEnd={animationEnd} />
        </Container>
    );
}

View.propTypes = {
    animationEnd: PropTypes.func,
};

View.defaultProps = {
    animationEnd: () => {},
};
