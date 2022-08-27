import styled from "styled-components";

export const MainContainer = styled.div`
    height: 100%;
    width: 100%;
`;

interface PropImage {
    img: string,
}

export const InitialArea = styled.div<PropImage>`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    height: 85rem;
    width: 100%;

    background: url(${prop=> prop.img});
    background-size: cover;
    background-position: center;
    opacity: 0.2;
    background-repeat: no-repeat;
    background-attachment: fixed;
`;

export const PlansContainer = styled.section `
    display: flex;
    flex-flow: column;
    margin: 25rem auto 0 auto;
    height: 60rem;
    max-width: 120rem;
`;

export const TitlePlans = styled.h1 `
    font-size: 6.4rem;
    font-family: var(--bebasNeue);
    font-weight: 400;
    text-align: left;
    color: var(--pcolor5);

    ::after {
        content: "_";
        color: var(--scolor5);
        font-size: 7rem;
        font-weight: bold;
        margin: 0 0 0 1rem;
    }
`;

export const AreaPlans = styled.div `
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
`;

export const Footer = styled.footer `
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    height: 40rem;
    max-width: 100rem;
    margin: 30rem auto 3rem auto;
    background-color: transparent;
    border: none;
    border-top: 3px solid var(--pcolor3);
`;

export const ContainerInfos = styled.div `
    height: 20rem;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    margin: 5rem 0 0 0;
`;