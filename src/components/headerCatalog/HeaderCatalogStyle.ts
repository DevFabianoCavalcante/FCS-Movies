import styled from "styled-components";

export const HeaderContainer = styled.header `
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 12rem;
    max-width: 100%;
`;

export const Logo = styled.div `
    height: auto;
    width: auto;

    h1 {
        font-size: 6rem;
        font-family: var(--bebasNeue);
        letter-spacing: 0.5rem;
        font-weight: 400;
        color: var(--scolor1);
        transition: ease-in-out .5s;

        :hover {
            cursor: pointer;
            transform: scale(1.1);
        }
    }

    @media(max-width: 575px) {
        h1 {
            font-size: 3.5rem;
        }
    }

`;

export const ProfileArea = styled.div `
    display: flex;
    flex-flow: column;
    align-items: flex-end;
    font-family: var(--nunitoSans);
    font-weight: 400;

    h1 {
        font-size: 1.8rem;
        color: var(--scolor1);
        margin: 0 0 0.5rem 0;
    }

    button {
        height: 2rem;
        width: auto;
        font-size: 1.5rem;
        color: var(--pcolor12);
        border: none;
        outline: none;
        background-color: transparent;
        cursor: pointer;
    }

    @media(max-width: 575px) {
        
        h1 {
            font-size: 1.5rem;
            width: 20rem;
            text-align: right;
        }
    }
`;


