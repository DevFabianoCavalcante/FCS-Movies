import styled from 'styled-components';

export const Logo = styled.h1 `
    font: 4.8rem var(--play);
    color: var(--scolor1);

    @media(max-width: 800px) {
        font-size: 3.2rem;
    }

    @media(max-width: 480px) {
        font-size: 2.4rem;
    }

    @media(max-width: 360px) {
        font-size: 1.8rem;
    }
`;