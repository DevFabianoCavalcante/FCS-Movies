import styled from "styled-components";

export const ContainerPage = styled.div `
    margin: 0 auto;
    max-width: 100%;
    padding: 0 5rem;
    background-color: var(--pcolor1);

    @media(max-width: 900px) {
        padding: 0 2rem;
    }
`;

export const ContainerMovieInfo = styled.div `
    display: grid;
    grid-template-columns: minmax(50rem, 1fr) 1fr;
    gap: 4rem;
    min-height: 55rem;
    height: auto;
    max-width: 100%;
    margin: 3rem auto 5rem auto;
    padding: 2rem 4rem;
    background-color: var(--pcolor2);

    @media(max-width: 1300px) {
        display: flex;
        gap: 3rem;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        margin-top: 1rem;
        padding: 2rem;
    }

    @media(max-width: 750px) {
        padding: 1.5rem;
    }

    @media(max-width: 650px) {
        gap: 2rem;
    }
`;

export const MovieVideoContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: auto;
    width: 100%;

    iframe {
        height: 100%;
        width: 100%;
        border: none;
        margin-bottom: 1rem;
    }

    p {
        font: 400 2rem var(--nunitoSans);
        color: var(--pcolor8);
    }

    img{
        align-self: flex-start;
        width: 100%;
        object-fit: contain;
        image-rendering: crisp-edges;
    }

    @media(max-width: 1300px) {
        height: auto;
        max-height: 50rem;

        img {
            height: 50rem;
        }

        iframe {
            height: 50rem;
        }
    }


    @media(max-width: 900px) {
        height: auto;
        max-height: 40rem;

        img {
            height: auto;
        }

        iframe {
            height: 40rem;
        }
    } 

    @media(max-width: 640px) {
        height: auto;
        max-height: 30rem;

        img {
            height: auto;
        }

        iframe {
            height: 30rem;
        }
    }

    @media(max-width: 475px) {
        height: auto;
        max-height: 30rem;

        img {
            height: auto;
        }

        iframe {
            height: 20rem;
        }
    }
`;


export const MovieDetails = styled.div `
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
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

    @media(max-width: 1300px) {
        margin-bottom: 1rem;
    }

    @media(max-width: 900px) {

        p {
            font-size: 1.5rem;
        }

        .title-movie {
            font-size: ${props => props.fontText};
        }
    }
`;

export const WatchProvidersContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: auto;
    width: 100%;

    h2{
        font: 600 2.4rem var(--nunitoSans);
        text-align: left;
        color: var(--pcolor9);
        margin-bottom: 1rem;
    }

    div {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        height: auto;
        width: 100%;
    }

    span {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 6rem;
        margin-right: 2.5rem;
        margin-bottom: 1rem;
    }

    img {
        height: 4rem;
        width: 4rem;
        object-fit: contain;
        margin-bottom: 0.5rem;
    }

    h3 {
        font: 400 1.8rem var(--nunitoSans);
        color: var(--pcolor8);
    }

    @media(max-width: 750px) {
        span {
            width: auto;
            margin-right: 1.5rem;
            justify-self: left;
        }

        img {
            align-self: flex-start;
        }
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
