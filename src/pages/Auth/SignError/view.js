import React from 'react';

import { useSelector } from 'react-redux';

import { Container, Content } from './styles';
import ErrorHandler from '../../../components/Others/ErrorHandler';

export default function View({ tryAgain }) {
    const errorMessage = useSelector(state => state.auth.errorMessage);

    return (
        <Container>
            <Content>
                <ErrorHandler
                    message={errorMessage}
                    onPress={tryAgain}
                    fontSize={25}
                    buttonMarginTop={50}
                />
            </Content>
        </Container>
    );
}
