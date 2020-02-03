import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
    justify-content: center;
    align-items: center;
    width: ${props => props.width};
    height: 45px;
    border-radius: 10px;
    background-color: ${props => props.color};
    margin-top: ${props => props.marginTop}px;
    margin-bottom: ${props => props.marginBottom}px;
`;

export const Label = styled.Text`
    font-family: 'Nunito-Light';
    font-size: 24px;
    color: #fff;
`;
