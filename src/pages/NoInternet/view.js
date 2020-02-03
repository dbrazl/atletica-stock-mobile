import React from 'react';

import { Container, Content } from './styles';
import ErrorHandler from '../../components/Others/ErrorHandler';

export default function View() {
    return (
        <Container>
            <Content>
                <ErrorHandler
                    icon="wifi-off"
                    message="Não há conexão com a internet!"
                    fontSize={25}
                    noButton
                />
            </Content>
        </Container>
    );
}
