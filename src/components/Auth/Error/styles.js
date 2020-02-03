import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

export const Container = styled.View`
    width: ${props => props.width}px;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
`;

export const Message = styled(Animatable.Text).attrs({
    animation: 'shake',
    duration: 1000,
})`
    font-size: 24px;
    font-family: 'Nunito-Regular';
    color: #fff;
    text-align: center;
`;
