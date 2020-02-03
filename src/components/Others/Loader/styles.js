import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

import * as Animatable from 'react-native-animatable';

export const Container = styled(Animatable.View).attrs(props => ({
    animation: props.animation,
    easing: 'ease-out',
    duration: props.duration,
    delay: props.delay,
}))`
    justify-content: center;
    align-items: center;
`;

export const Pulse = styled(Animatable.View).attrs({
    animation: 'pulse',
    easing: 'ease-out',
    iterationCount: 'infinite',
})``;

export const Icon = styled(Feather).attrs(props => ({
    name: props.name,
    size: props.size,
    color: props.color,
}))``;
