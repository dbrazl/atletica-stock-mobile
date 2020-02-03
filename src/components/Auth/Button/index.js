import React from 'react';
import PropTypes from 'prop-types';

import { Container, Label } from './styles';

export default function Button({
    label,
    onPress,
    color,
    width,
    marginTop,
    marginBottom,
}) {
    return (
        <Container
            onPress={onPress}
            color={color}
            width={width}
            marginTop={marginTop}
            marginBottom={marginBottom}
        >
            <Label>{label}</Label>
        </Container>
    );
}

Button.propTypes = {
    label: PropTypes.string,
    onPress: PropTypes.func,
    color: PropTypes.string,
    width: PropTypes.number,
    marginTop: PropTypes.number,
    marginBottom: PropTypes.number,
};

Button.defaultProps = {
    label: 'Label',
    onPress: () => {},
    color: '#38352d',
    width: 150,
    marginTop: 0,
    marginBottom: 0,
};
