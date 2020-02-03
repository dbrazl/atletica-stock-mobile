import React from 'react';

import { Container } from './styles';

import Loader from '../../../components/Others/Loader';

export default function View() {
    return (
        <Container>
            <Loader name="upload-cloud" animation="fadeInLeft" />
        </Container>
    );
}
