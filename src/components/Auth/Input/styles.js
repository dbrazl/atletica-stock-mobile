import styled from 'styled-components/native';

export const Container = styled.View`
    justify-content: center;
    align-items: center;
    margin-top: ${props => props.marginTop && props.marginTop}px;
    margin-bottom: ${props => props.marginBottom && props.marginBottom}px;
`;

export const TextInput = styled.TextInput.attrs({
    placeholderTextColor: '#fff',
})`
    width: ${props => props.width};
    padding: 0 20px;
    height: 45px;
    color: #fff;
    font-family: 'Nunito-Light';
    font-size: 24px;
    text-align: center;
`;

export const Bar = styled.View`
    width: 50px;
    height: 5px;
    border-radius: 2.5px;
    background-color: #fff;
`;
