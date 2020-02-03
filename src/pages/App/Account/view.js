import React from 'react';

import user from '../../../assets/pictures/user.png';

import { Container, Content, Scroll, Photo } from './styles';
import TopTabbar from '../../../components/App/TopTabbar';

export default function View() {
    const source = user;

    return (
        <Container>
            <Scroll>
                <TopTabbar noPerfil />
                <Content>
                    <Photo source={source} />
                </Content>
            </Scroll>
        </Container>
    );
}
