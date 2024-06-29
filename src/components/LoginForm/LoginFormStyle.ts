import styled from "styled-components";

export const LoginArea = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 37rem;
    width: 45rem;
    padding: 1rem;
    background: var(--pcolor2);

    @media(max-width: 480px) {
        width: 90%;
    }
`;

export const Title = styled.h1 `
    display: flex;
    align-self: flex-start;
    font-size: 6.4rem;
    font-family: var(--bebasNeue);
    font-weight: 400;
    color: var(--scolor1);
    margin: 0 16rem 0 0;

    @media(max-width: 480px) {
        margin: 0 auto;
    }
`;

export const FormLogin = styled.form `
    height: 35rem;
    font-size: 2rem;
    font-family: var(--nunitoSans);
    font-weight: 400;
    color: var(--scolor1);
    margin: 5rem 0 0 0;

    label {
        display: flex;
        flex-flow: column;
        text-align: left;
        margin: 0 0 5rem 0;
    }

    label:nth-child(2) {
        margin-bottom: 1rem;
    }

    input {
        font-size: 1.6rem;
        font-family: var(--nunitoSans);
        font-weight: 400;
        color: var(--pcolor12);
        height: 3rem;
        width: 30rem;
        border: none;
        border-bottom: 1px solid var(--scolor2);
        background-color: transparent;
        margin: 2rem 0 0 0;
        padding: 0 1rem;
        outline: none;
    }

    h3 {
        font-size: 1.6rem;
        font-family: inherit;
        color: var(--scolor2);
        text-align: center;
        transition: ease-in-out .5s;
    }

    p {
        font-size: 1.4rem;
        text-align: right;
        font-family: var(--poppins);
        color: var(--scolor1);
        transition: ease-in-out .5s;
    }

    p:hover, h3:hover {
        cursor: pointer;
        color: var(--scolor4);
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 4rem auto 6rem auto;
    }

    @media(max-width: 370px) {
        input {
            width: 28rem;
        }
    }
`;
