import React from 'react';
import PropTypes from 'prop-types';

import { Container, Message } from './styles';

export default function Error({ message, width }) {
    return (
        <Container width={width}>
            <Message>{message}</Message>
        </Container>
    );
}

Error.propTypes = {
    message: PropTypes.string,
    width: PropTypes.number,
};

Error.defaultProps = {
    message: 'error',
    width: 200,
};
