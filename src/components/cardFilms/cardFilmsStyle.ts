import styled from "styled-components";

export const CardContainer = styled.div `
    display: flex;
    flex-flow: column;
    justify-content: center;
    padding: 1.5rem;
    height: 28.1rem;
    width: 22.8rem;
`;

export const ImageContainer = styled.div `
    height: 17.3rem;
    width: 19.7rem;
`;

export const InfoFilm = styled.div `
    display: flex;
    flex-flow: row;
    justify-content: space-between;

    p {
        font-size: 1.8rem;
        font-family: var(--openSans);
        font-weight: 600;
        color: var(--pcolor10);
    }
`;

export const ScoreMovie = styled.div `
    display: flex;
    flex-flow: row;

    p {
        font-size: 1.8rem;
        font-family: var(--openSans);
        font-weight: 400;
        color: var(--pcolor9);
    }

    img {
        height: 2.4rem;
        width: 2.4rem;
    }
`;

export const BtnDetails = styled.button `
    height: 3.5rem;
    width: 15.7rem;
    background: linear-gradient(var(--gradient1));
    font-size: 2rem;
    font-family: var(--poppins);
    font-weight: 600;
    color: var(--scolor8);
`;
