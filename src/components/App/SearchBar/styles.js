import styled from 'styled-components/native';

export const Container = styled.View`
    height: 45px;
    width: ${props => props.width};
    border-radius: 10px;
    background-color: #eee;
    padding: 0 10px;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
`;

export const TextInput = styled.TextInput.attrs({
    placeholderTextColor: '#000',
})`
    flex: 1;
    margin-left: 10px;
    font-family: 'Nunito-Regular';
    font-size: 18px;
    color: #000;
`;
