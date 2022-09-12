import styled from "styled-components";

export const CardContainer = styled.div `
    display: flex;
    flex-flow: column;
    padding: 1rem 1.9rem 1rem 1.9rem;
    height: 50rem;
    width: 34.7rem;
    background-color: var(--pcolor3);
    border-radius: 1rem;
    margin: 0 5rem 8rem 5rem;
`;

export const ImageContainer = styled.div `
    height: 33rem;
    width: 30.7rem;
    margin: 0 auto;

    img {
        height: 100%;
        width: 100%;
        border-radius: 1rem;
    }
`;

export const InfoFilm = styled.div `
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    margin: 1rem 0 0 0;
    height: 6rem;
    width: 100%;

    p {
        font-size: 2.4rem;
        font-family: var(--openSans);
        font-weight: 600;
        color: var(--pcolor10);
        max-height: 5rem;
        max-width: 100%;
    }
`;

export const ScoreMovie = styled.div `
    display: flex;
    flex-flow: row;

    p {
        font-size: 1.7rem;
        font-family: var(--openSans);
        font-weight: 400;
        color: var(--pcolor9);
        margin: 0.5rem 0 0 0.5rem;
    }

    img {
        height: 3rem;
        width: 3rem;
    }
`;

export const BtnDetails = styled.button `
    height: 4.5rem;
    width: 20rem;
    background: linear-gradient(var(--scolor4), var(--scolor2));
    font-size: 2.4rem;
    font-family: var(--poppins);
    font-weight: 600;
    color: var(--scolor8);
    margin: 3rem auto 0 auto;
    border: none;
    border-radius: 1rem;
    transition: ease-in-out .5s;

    :hover {
        cursor: pointer;
        transform: scale(1.1);
    }
`;
