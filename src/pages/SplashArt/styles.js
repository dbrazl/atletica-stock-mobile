import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';
import animation from '../../animations/SplashArt';
import { primaryColor } from '../../utils';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${primaryColor};
`;

export const Logo = styled(Animatable.Image).attrs(props => ({
    source: props.source,
    animation,
    duration: 3000,
    delay: 500,
}))`
    width: 200px;
    height: 200px;
`;
