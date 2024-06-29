import styled from "styled-components";

export const ContainerArrow = styled.button `
    display: none;

    @media(max-width: 900px) {
        display: block;
        position: fixed;
        right: 2rem;
        bottom: 2rem;
        height: 3rem;
        width: 3rem;
        background-color: transparent;
        border-radius: 50%;
        /* border: none; */

        img {
            height: 100%;
            width: 100%;
            object-fit: contain;
        }
    }
`;
