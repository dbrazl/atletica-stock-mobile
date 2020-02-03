import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    padding: 0 20px;
`;

export const Photo = styled.Image.attrs(props => ({
    source: props.source,
}))`
    width: 100px;
    height: 100px;
`;

export const Scroll = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: { flexGrow: 1 },
})``;

export const Content = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;
