import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

export const Message = styled.Text`
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
    font-family: 'Nunito-Light';
    text-align: center;
    margin-top: 50;
`;

export const Container = styled(Animatable.View).attrs(props => ({
    animation: props.animation,
    easing: 'ease-out',
    delay: props.delay,
    duration: props.duration,
}))`
    justify-content: center;
    align-items: center;
`;
