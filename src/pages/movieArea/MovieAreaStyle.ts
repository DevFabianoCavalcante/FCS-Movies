import styled from "styled-components";

export const ContainerPage = styled.div `
    margin: 0 auto;
    max-width: 150rem;
    background-color: var(--pcolor1);
    padding: 0 3rem;
`;

export const ContainerMovieInfo = styled.div `
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    height: 60.7rem;
    max-width: 120rem;
    margin: 8rem auto 0 auto;

    @media(max-width: 900px) {
        height: auto;
        width: 100%;
        flex-flow: column-reverse;
        margin: 5rem auto 0 auto;
    }
`;

export const MovieDetails = styled.div `
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
    width: 70%;

    @media(max-width: 900px) {
        width: 100%;
    }
`;

interface PropsDescription {
    colorText: string,
    fontText: string,
    weightText: string,
}

export const ItemDescriptionMovie = styled.div<PropsDescription> `
    display: flex;
    align-items: center;
    align-self: flex-start;
    max-width: 70rem;
    margin: 0 0 2rem 0;

    img {
        max-height: 2.4rem;
        max-width: 2.4rem;
        margin: 0 1rem 0 0;
    }

    p {
        font-size: ${props => props.fontText};
        font-family: var(--nunitoSans);
        font-weight: ${props => props.weightText};
        color: ${props => props.colorText};
    }

    @media(max-width: 900px) {

        p {
            font-size: 1.5rem;
        }

        .title-movie {
            font-size: ${props => props.fontText};
        }

        .resume-icon {
            display: none;
        }
    }
`;

export const MoviePoster = styled.div `
    display: flex;
    align-items: center;
    max-height: 40rem;
    max-width: 30%;

    img {
        height: 100%;
        width: 100%;
        object-fit: contain;
    }

    @media(max-width: 900px) {
        height: 40rem;
        max-width: 120rem;
        margin: 0 0 2.5rem 0;
    }
`;

export const BtnWatch = styled.button `
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    height: 5rem;
    width: 20rem;
    background: linear-gradient(var(--scolor4), var(--scolor2));
    border: none;
    border-radius: 2rem;
    font-size: 2.4rem;
    font-family: var(--poppins);
    font-weight: 600;
    color: var(--scolor8);
    margin: 8rem auto 0 auto;
    transition: ease-in-out .5s;

    :hover {
        cursor: pointer;
        transform: scale(1.1);
    }

    @media(max-width: 900px) {
        margin: 1rem auto 0 auto;
    }
`;

export const TitleExtraSection = styled.h2 `
    display: flex;
    align-self: flex-start;
    font-size: 2.8rem;
    font-weight: 600;
    font-family: var(--nunitoSans);
    color: var(--scolor1);
    margin: 5rem 0 3rem 0;

    @media(max-width: 900px) {
        margin: 8rem 0 3rem 0;
    }
`;

export const LoadingMovie = styled.div `
    height: 100vh;
    width: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: 8rem;
        font-family: var(--bebasNeue);
        color: var(--scolor1);
        letter-spacing: 0.5rem;
        margin: 0 0 6rem 0;
    }

    @media(max-width: 900px) {
        h1{
            font-size: 4rem;
        }
    }
`;
