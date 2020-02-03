import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
    height: 80px;
    margin-top: ${Platform.OS === 'ios' ? 50 : 20}px;
    flex-direction: row;
    justify-content: ${props => props.justifyContent};
    align-items: center;
`;

export const Back = styled.TouchableOpacity``;

export const Perfil = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Name = styled.Text.attrs({
    numberOfLines: 1,
})`
    font-size: 18px;
    font-family: 'Nunito-Regular';
    margin-right: 10px;
    color: #000;
`;

export const Photo = styled.Image.attrs(props => ({
    source: props.source,
}))`
    width: 60px;
    height: 60px;
`;
