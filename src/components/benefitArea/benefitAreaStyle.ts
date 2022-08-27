import styled from 'styled-components';

interface Flex {
    typeColumn: boolean,
};

export const Container = styled.section<Flex> `
    display: flex;
    flex-direction: ${prop => prop.typeColumn ? 'row' : 'row-reverse'};
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    height: 35rem;
    max-width: 120rem;
    margin: 25rem auto 0 auto;
`;

interface TextDirection {
    textDirection: 'left' | 'right',
}

export const Content = styled.div<TextDirection> `
    display: flex;
    flex-direction: column;

    h1 {
        font-size: 6.4rem;
        font-family: var(--bebasNeue);
        font-weight: 400;
        text-align: ${props => props.textDirection};
        color: var(--scolor5);
        margin: 0 0 2rem 0;
        max-width: 60rem;
    }

    p {
        font-size: 3rem;
        font-family: var(--openSans);
        font-weight: 400;
        text-align: ${props => props.textDirection};
        color: var(--pcolor12);
        max-width: 55rem;
    }
`;

export const ContainerImage = styled.div `
    max-height: 30rem;
    max-width: 30rem;

    img {
        height: 100%;
        width: 100%;
    }
`;
