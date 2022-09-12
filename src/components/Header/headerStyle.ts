import styled from "styled-components";

export const Header = styled.header `
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 12rem;
    max-width: 120rem;
    margin: 0 auto;

    button {
        height: 6rem;
        width: 13rem;
        background-color: transparent;
        outline: none;
        border: 1px solid;
        border-radius: 0.5rem;
        border-color: var(--scolor5);
        font-size: 3.6rem;
        font-family: var(--bebasNeue);
        font-weight: 400;
        color: var(--scolor5);
        transition: ease-in-out .5s;

        :hover{
            transform: scale(1.1);
            cursor: pointer;
        }
    }

    h1{
        font-size: 6rem;
        font-family: var(--bebasNeue);
        letter-spacing: 0.5rem;
        font-weight: 400;
        color: var(--scolor5);
        transition: ease-in-out .5s;
    }

    h1:hover {
        cursor: pointer;
        transform: scale(1.1);
    }
`;