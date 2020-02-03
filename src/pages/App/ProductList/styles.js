import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { primaryColor } from '../../../utils';

export const Container = styled.View`
    flex: 1;
    padding: 0 20px;
`;

export const Safe = styled.SafeAreaView`
    flex: 1;
`;

export const Scroll = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: { flexGrow: 1 },
})``;

export const Title = styled.Text.attrs({
    numberOfLines: 1,
})`
    margin-top: 20px;
    font-family: 'Nunito-Bold';
    font-size: 24px;
    color: ${primaryColor};
    margin-bottom: 20px;
`;

export const List = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
})`
    margin-top: 30px;
`;

export const Box = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 50px 20px;
`;

export const Message = styled.Text`
    margin-top: 30px;
    color: #808080;
    font-family: 'Nunito-Regular';
    font-size: 24px;
`;

export const Card = styled(RectButton)`
    width: ${props => props.width};
    height: 130px;
    border-radius: 20px;
    background-color: ${primaryColor};
    position: relative;
    margin-top: 20px;
`;

export const Logo = styled.Image`
    opacity: 0.1;
    width: 190px;
    height: 130px;
    position: absolute;
    top: 0;
    right: 0;
`;

export const Info = styled.View`
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    padding: 10px 30px;
`;

export const ProductIcon = styled.Image`
    margin-top: 10px;
    width: 50px;
    height: 50px;
`;

export const TextWrapper = styled.View`
    justify-content: flex-start;
    margin-left: 30px;
`;

export const Name = styled.Text`
    font-family: 'Nunito-Regular';
    font-size: 24px;
    margin-bottom: 10px;
`;

export const Quantity = styled.Text`
    font-family: 'Nunito-Regular';
    font-size: 16px;
    margin-left: ${props => (props.marginLeft ? props.marginLeft : 0)}px;
`;

export const QuantityBox = styled.View`
    margin-top: 10px;
    padding: 0 10px;
    border-radius: 5px;
    background-color: #fff;
`;
