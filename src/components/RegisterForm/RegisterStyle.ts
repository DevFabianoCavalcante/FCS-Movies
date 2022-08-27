import styled from "styled-components";

export const RegisterArea = styled.div `
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h1 `
    display: flex;
    align-self: flex-start;
    font-size: 6.4rem;
    font-family: var(--bebasNeue);
    font-weight: 400;
    color: var(--scolor5);
`;

export const FormRegister = styled.form `
    height: 35rem;
    font-size: 2rem;
    font-family: var(--openSans);
    font-weight: 400;
    color: var(--scolor5);
    margin: 5rem 0 0 0;

    label {
        display: flex;
        flex-flow: column;
        text-align: left;
        margin: 0 0 3rem 0;
    }

    label:nth-child(3) {
        margin-bottom: 1rem;
    }

    input {
        font-size: 1.6rem;
        font-family: var(--openSans);
        font-weight: 400;
        color: var(--pcolor12);
        height: 3rem;
        width: 30rem;
        border: none;
        border-bottom: 1px solid var(--scolor5);
        background-color: transparent;
        margin: 1rem 0 0 0;
        padding: 0 0.5rem;
        outline: none;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 4.7rem;
        width: 17.9rem;
        border-radius: 2rem;
        background-color: var(--scolor5);
        font-size: 2rem;
        font-family: var(--poppins);
        font-weight: 600;
        color: var(--pcolor12);
        margin: 4rem auto 6rem auto;
        transition: ease-in-out .5s;

        :hover {
            cursor: pointer;
            background-color: var(--scolor4);
        }
    }
`;
