import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';
import animation from '../../../animations/SignIn';
import { primaryColor } from '../../../utils';

export const Container = styled.View`
    flex: 1;
    background-color: ${primaryColor};
    padding: 50px;
`;

export const Content = styled(Animatable.View).attrs({
    animation,
    duration: 1500,
    delay: 200,
})`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.Image`
    width: 150px;
    height: 150px;
`;

export const Scroll = styled.ScrollView.attrs({
    contentContainerStyle: { flexGrow: 1 },
    showsVerticalScrollIndicator: false,
})``;
