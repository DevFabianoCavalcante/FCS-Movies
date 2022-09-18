import styled from "styled-components";

export const InitialContent = styled.div `
    position: absolute;
    top: 30rem;
    right: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    div {
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: center;
    }

    h1 {
        font-size: 6.4rem;
        font-family: var(--bebasNeue);
        color: var(--pcolor12);
        max-width: 100rem;
        letter-spacing: 1rem;
        margin: 0 auto 20rem auto;
        text-align: center;
    }

    span {
        color: var(--scolor5);
    }

    p {
        font-size: 6.4rem;
        font-family: var(--bebasNeue);
        color: var(--pcolor12);
        letter-spacing: 1rem;
    }

    div img {
        height: 10rem;
        width: 10rem;
        margin: 0 0 0 2rem;
        transition: ease-in-out .5s;
    }

    div img:hover {
        transform: translateX(2rem);
        cursor: pointer;
    }

    @media(max-width: 900px) {
        top: 25rem;

        h1 {
            font-size: 3rem;
            max-width: 50rem;
            margin: 0 auto 10rem auto;
            padding: 0 1rem;
        }

        p {
            font-size: 2.5rem;
            letter-spacing: 0rem;
        }

        div img {
            height: 6rem;
            width: 6rem;
        }
    }
`;
