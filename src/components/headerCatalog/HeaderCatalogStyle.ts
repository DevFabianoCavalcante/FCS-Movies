import styled from "styled-components";

export const HeaderContainer = styled.header `
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 12rem;
    max-width: 100%;
`;

export const Search = styled.div `
    height: auto;
    width: auto;

    input {
        height: 4rem;
        width: 30rem;
        font-size: 1.6rem;
        font-family: var(--openSans);
        font-weight: 400;
        color: var(--pcolor12);
        padding: 0 1rem;
        outline: none;
        border-radius: 2rem;
        border: 1px solid var(--scolor5);
        background-color: transparent;
    };

    img {
        max-height: 2.5rem;
        max-width: 2.5rem;
        margin: 0 0 -0.5rem -3rem;
    }

    img:hover {
        cursor: pointer;
    }

`;

export const ProfileArea = styled.div `
    display: flex;
    flex-flow: column;
    align-items: flex-end;
    font-family: var(--openSans);
    font-weight: 400;

    h1 {
        font-size: 1.8rem;
        color: var(--scolor8);
        margin: 0 0 0.5rem 0;
    }

    button {
        height: 2rem;
        width: auto;
        font-size: 1.6rem;
        color: var(--pcolor12);
        border: none;
        outline: none;
        background-color: transparent;
        cursor: pointer;
    }
`;


