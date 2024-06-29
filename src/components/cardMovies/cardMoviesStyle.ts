import styled from "styled-components";

export const CardContainer = styled.div `
    display: flex;
    flex-flow: column;
    padding: 1rem 1.9rem;
    height: 50rem;
    width: 34.7rem;
    background-color: var(--pcolor3);
    border-radius: 1rem;
    margin: 0 5rem 8rem 5rem;

    @media(max-width: 380px) {
        width: 31rem;
    }
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

    @media(max-width: 380px) {
        width: 27rem;
    }
`;

export const InfoFilm = styled.div `
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    margin: 1rem 0;
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
