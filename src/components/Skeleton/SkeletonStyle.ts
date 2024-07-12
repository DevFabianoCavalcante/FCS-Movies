import styled from 'styled-components';


export const SlideSkeleton = styled.div `
    flex: none;
    height: 50rem;
    width: 115rem;
    margin: 0 2rem;

    div {
        height: 100%;
        background-image: linear-gradient(90deg, #242424 0px, #363636 50%, #242424 100%);
        background-color: var(--pcolor1);
        background-size: 200%;
        animation: skeleton 2s infinite linear;
    }
   

    @media(max-width: 1180px) {
        height: 70rem;
        width: 100rem;
    }

    @media(max-width: 1030px){
        height: 50rem;
        width: 80rem;
    }

    @media(max-width: 840px) {
        height: 35rem;
        width: 70rem;
    }

    @media(max-width: 730px) {
        height: 35rem;
        width: auto;
    }
`;

export const MiniSlideSkeleton = styled.div `
    flex: none;
    height: 35rem;
    width: 100%;
    margin: 0 2rem;

    div {
        height: 100%;
        background-image: linear-gradient(90deg, #242424 0px, #363636 50%, #242424 100%);
        background-color: var(--pcolor1);
        background-size: 200%;
        animation: skeleton 2s infinite linear;
    }
`;