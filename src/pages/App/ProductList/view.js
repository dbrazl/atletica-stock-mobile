import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Dimensions } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import logoCard from '../../../assets/pictures/logo-card.png';
import productIcon from '../../../assets/pictures/product-icon.png';

import {
    Container,
    Title,
    Safe,
    Box,
    Message,
    Scroll,
    Card,
    Logo,
    Info,
    ProductIcon,
    TextWrapper,
    Name,
    Quantity,
    QuantityBox,
} from './styles';
import TopTabbar from '../../../components/App/TopTabbar';
import SearchBar from '../../../components/App/SearchBar';

export default function View({ viewProps }) {
    const [width, setWidth] = useState(Dimensions.get('window').width - 40);

    const { data } = viewProps;

    const onChangeDirection = event => {
        const { width, height } = event.screen;

        if (width > height) {
            setWidth(width - 100);
        } else {
            setWidth(width - 40);
        }
    };

    const renderItem = item => {
        const { id } = item.request;
        const { name, totalQuantity, availableQuantity } = item.product;

        return (
            <Card width={width} key={`${id}`}>
                <Logo source={logoCard} />
                <Info>
                    <ProductIcon source={productIcon} />
                    <TextWrapper>
                        <Name>{name ? name : 'Produto'}</Name>
                        <Quantity marginLeft={10}>
                            {totalQuantity ? totalQuantity : 0} unidades totais
                        </Quantity>
                        <QuantityBox>
                            <Quantity>
                                {availableQuantity ? availableQuantity : 0}{' '}
                                unidades dispoíveis
                            </Quantity>
                        </QuantityBox>
                    </TextWrapper>
                </Info>
            </Card>
        );
    };

    const noData = () => {
        return (
            <Box>
                <Icon name="archive" size={50} color="#808080" />
                <Message>Não há nenhum item na lista.</Message>
            </Box>
        );
    };

    useEffect(() => {
        Dimensions.addEventListener('change', event =>
            onChangeDirection(event)
        );

        return () => Dimensions.removeEventListener('change');
    });

    return (
        <Container>
            <Scroll>
                <Safe>
                    <TopTabbar noBack />
                    <Title>Produtos</Title>
                    <SearchBar
                        width={width}
                        placeholder="Pesquisar por nome..."
                    />
                    {data ? data.map(item => renderItem(item)) : noData()}
                </Safe>
            </Scroll>
        </Container>
    );
}

View.propTypes = {
    viewProps: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

View.defaultProps = {
    viewProps: {},
};
