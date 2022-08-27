import styled from "styled-components";

export const CreditArea = styled.div `
    display: flex;
    flex-flow: column;
    height: 5rem;
    max-width: 100%;
    margin: 0 auto;
`;

export const Dev = styled.h1 `
    font-size: 1.4rem;
    font-family: var(--openSans);
    font-weight: 400;
    text-align: center;
    color: var(--scolor5);
`;

export const AreaSocialLinks = styled.div `
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    margin: 2rem 0 0 0;

    a {
        cursor: pointer;
        margin: 0 1rem;
    }

    img {
        height: 3.2rem;
        width: 3.2rem;
        cursor: pointer;
        transition: ease-in-out .5s;
    }

    img:hover {
        transform: scale(1.2);
    }

`;
