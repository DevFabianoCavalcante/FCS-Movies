import styled from "styled-components";

export const ContainerInput = styled.div `
    margin: 5rem 0 3rem 2rem;

    input {
        height: 4rem;
        width: 70rem;
        font: 400 2.4rem var(--nunitoSans);
        text-align: left;
        padding: 0.5rem;
        color: var(--pcolor10);
        background-color: transparent;
        border: 1px solid var(--pcolor10);

        @media(max-width: 1000px) {
            width: 90%;
        }
    }

    img {
        height: 2rem;
        width: 2rem;
        margin: 0 0 0 -3rem;
        cursor: pointer;
    }

    @media(max-width: 1000px) {
        margin: 4rem 0 2rem 2rem;
    }
`;


export const Container = styled.section `
    position: relative;
    height: auto;
    width: auto;
    margin-bottom: 4rem;

    h1 {
        font: 600 3.2rem var(--nunitoSans);
        color: var(--scolor2);
        margin: 0 0 1rem 2rem;
    }
`;

export const ContainerSearch = styled.section `
    display: grid;
    grid-template-columns: repeat(auto-fit, 340px);
    justify-content: center;
    align-items: center;
    justify-items: center;
    gap: 2rem;
    height: 100%;
    margin: 0 auto;

    div {
        display: flex;
        flex-direction: column;
        height: 45rem;
        width: auto;
        align-items: center;
        cursor: pointer;

        @media(max-width: 900px) {
            height: 35rem;
        }
    }
`;

export const Carousel = styled.section `
    display: flex;
    overflow: hidden;
    scroll-behavior: smooth;
    width: 100%;
`;

export const MainSlide = styled.div `
    display: flex;
    flex-direction: row;
    flex: none;
    height: 50rem;
    width: 115rem;
    padding: 1.5rem 3rem;
    background-color: var(--pcolor2);
    margin: 0 2rem;
    cursor: pointer;

    img {
        height: 100%;
        width: auto;
        object-fit: cover;
    }

    div {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        padding: 1.5rem 0 0 5rem;
    }

    h1, h2, h3, p {
        font-family: var(--nunitoSans);
        color: var(--pcolor12);
        margin-bottom: 1rem;
    }

    h1 {
        font-size: 4.8rem;
        font-weight: 700;
        color: var(--scolor2);
        margin-left: 0;
    }

    h2, h3 {
        font-size: 2.4rem;
    }

    p {
        font-size: 2rem;
        text-align: left;
    }

    button {
        margin-left: 0;
        margin-top: auto;
    }

    @media(max-width: 1180px) {
        height: 70rem;
        width: 100rem;
    }

    @media(max-width: 1030px){
        height: 50rem;
        width: 80rem;

        h2, h3 {
            font-size: 2.4rem;
        }

        p {
            font-size: 1.4rem;
        }
    }

    @media(max-width: 840px) {
        height: 35rem;
        width: 70rem;

        p{
            display: none;
        }
    }

    @media(max-width: 730px) {
        height: 35rem;
        width: auto;

        div, h1, h2, h3{
            display: none;
        }
    }
`;

export const ContainerSlide = styled.div `
    display: flex;
    flex-direction: column;
    height: 45rem;
    align-items: center;
    margin: 0 2rem;
    cursor: pointer;

    @media(max-width: 900px) {
        height: 35rem;
    }
`;

export const Slide = styled.div `
    display: flex;
    flex-direction: column;
    flex: none;
    height: 35rem;
    width: auto;
    padding: 1.5rem 3rem;
    background-color: var(--pcolor2);

    img {
        height: 100%;
        width: auto;
        object-fit: cover;
        pointer-events: none;
    }
`;

interface PropsDropdown {
    show: boolean;
}

export const DropdownSlide = styled.div<PropsDropdown> `
    display: flex;
    flex-direction: column;
    height: 10rem;
    max-height: ${({ show }) => (show ? '220px' : '0')};
    width: 27.3rem;
    padding: 0rem 3rem 1rem 3rem;
    text-align: left;
    background-color: var(--pcolor2);
    opacity: ${({ show }) => (show ? '1' : '0')};
    overflow: hidden;
    transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;

    div{
        display: flex;
        justify-content: space-between;
        margin-top: auto;
    }

    h2 {
        font: 700 2rem var(--nunitoSans);
        color: var(--pcolor12);
        margin-bottom: 0.5rem;
    }

    h3 {
        font: 400 1.6rem var(--nunitoSans);
        color: var(--pcolor8);
        margin-top: auto;
    }

    @media(max-width: 900px) {
        display: none;
    }
`;

interface PropsController {
    position: string;
}

export const SlideController = styled.div<PropsController> `
    position: absolute;
    top: ${({position}) => position};
    transform: translateY(-50%);
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 0.9rem;
    pointer-events: none;
    transition:  ease-in-out .5s;

    img {
        width: 8rem;
        object-fit: cover;
        padding: 1rem;
        cursor: pointer;
        pointer-events: auto;
    }

    img:nth-of-type(2) {
        transform: rotate(-180deg);
        pointer-events: auto;
    }
`;
