import styled from "styled-components";

export const Header = styled.header `
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-self: center;
    height: 11.4rem;
    width: 100%;
    padding: 0 11.5rem 0 11.5rem;
    background-color: var(--pcolor1);

    @media(max-width: 835px) {
        padding: 0 5rem 0 5rem;
    }

    @media(max-width: 500px) {
        padding: 0 1rem;
    }
`;

interface BackgroundProps {
    img: string;
}

export const Main = styled.section<BackgroundProps> `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 80rem;
    width: 100%;
    background-image: url(${props => props.img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    box-shadow: inset 0 -20px 20px 0 var(--pcolor1), inset 0 20px 20px 0 var(--pcolor1);

    h1{
        max-width: 80rem;
        font: 700 4rem var(--poppins);
        text-align: center;
        color: var(--pcolor12);
        text-transform: uppercase;
        text-shadow: 0 4px 4px var(--pcolor1);
    }

    button{
            margin-top: 3rem;
    }

    @media(max-width: 800px) {
        padding: 0 5rem 0 5rem;
        background-position: right;

        button{
            font-size: 3.2rem;
            height: 6.8rem;
            width: 32rem;
        }
    }

    @media(max-width: 480px) {
        height: 70vh;
        padding: 0 2rem 0 2rem;
        background-position: left;
        justify-content: flex-start;
        
        h1{
            font-size: 3rem;
            padding-top: 5rem;
        }

        button{
            font-size: 2.4rem;
            height: auto;
            width: auto;
            margin-left: 0;
        }
    }
`;

export const SectionReadyUse = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    width: 100%;
    background-color: var(--pcolor1);
    padding: 0 11.5rem 0 11.5rem;
    margin-bottom: 5rem;

    h1{
        font: 6.4rem var(--bebasNeue);
        color: var(--scolor1);
        text-transform: uppercase;
        margin: 4.5rem 0 5rem 0;
    }

    @media(max-width: 800px) {
        padding: 0 5rem 0 5rem;
        h1{
            font-size: 4.8rem;
        }
    }

    @media(max-width: 480px) {
        padding: 0 2rem 0 2rem;
    }
`;

export const SectionDevices = styled.section `
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5rem;
    width: 100%;
    padding: 0 1rem;

    @media(max-width: 1250px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 5rem;
    }

    @media(max-width: 660px) {
        grid-template-columns: 1fr;
        gap: 3rem;
    }
`;

export const DeviceItem = styled.div `
    display: flex;
    flex-direction: column;

    img {
        margin: 0 auto;
    }

    h2 {
        font: 600 3.2rem var(--poppins);
        color: var(--pcolor10);
        text-align: center;
        margin: 1rem 0;
    }

    p {
        font: 400 2rem var(--nunitoSans);
        color: var(--pcolor11);
        text-align: center;
        margin-bottom: 0.8rem;
    }
`;

export const SectionPlans = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 60rem;
    background: linear-gradient(#131313 5%, #817200 70%, #FFFF00);
    margin: 0 auto;
    padding-bottom: 5rem;

    h1 {
        font: 400 6.4rem var(--bebasNeue);
        color: var(--pcolor10);
        margin: 5rem 0 5rem 0;
    }

    h1::after {
        content: '_';
        color: var(--scolor1);
    }
`;

export const ContainerPlans = styled.div `
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: 2rem;

    @media(max-width: 1250px) {
        grid-template-columns: auto;
        gap: 5rem;
    }
`;

interface PropsCardPlan {
    afterInfo: boolean;
    heightCard: string;
}

export const ContainerCardPlan = styled.div<PropsCardPlan> `
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: ${props => props.heightCard};
    width: 35rem;
    padding: 2rem;
    background-color: var(--pcolor1);
    color: var(--pcolor10);
    box-shadow: 0px 4px 10px rgba(0,0,0, 0.50);

    ${(props) => props.afterInfo && `
        &::after {
            position: absolute;
            content: "Mais popular";
            top: -3rem;
            left: 0;
            height: 3rem;
            width: 16rem;
            background: linear-gradient(#B6A100, #FFFF00);
            font: 400 2.4rem var(--nunitoSans);
            text-align: center;
            color: var(--scolor3);
            z-index: 100;
        }
    `}

    button{
        font-size: 2.4rem;
        margin: auto auto 0 auto;
        align-self: flex-end;
    }

    @media(max-width: 800px) {
        button{
            height: 5rem;
            width: 17rem;
        }
    }

    @media(max-width: 400px) {
        width: 30rem;
        height: auto;
    }
`;

export const TitlePlanArea = styled.div `
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0 0 3rem 0;

    h3{
        font: 700 2.4rem var(--poppins);
        color: var(--pcolor10);
    }

    span {
        font: 400 1.6rem var(--poppins);
        color: var(--scolor1);
    }

`;

export const listBenefit = styled.ul `

    li{
        width: 100%;
        font: 400 1.6rem var(--nunitoSans);
        color: var(--pcolor10);
        list-style-type: none;
        margin-bottom: 1.5rem;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid var(--scolor3);
    }
`;

export const SectionFooter = styled.footer `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5rem 11.5rem;
    height: auto;
    width: 100%;
    transition: ease-in-out .5s;

    h1{
        font: 400 6.4rem var(--bebasNeue);
        text-align: center;
        color: var(--pcolor10);
        margin-bottom: 9rem;
    }

    @media(max-width: 690px) {
        padding: 5rem 5rem;

        h1{
            font-size: 4.8rem;
            margin-bottom: 3rem;
        }
    }

    @media(max-width: 480px) {
        padding: 5rem 1.5rem;
    }
`;

export const ContainerExtraInfo = styled.div `
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: 2rem;
    height: auto;
    width: inherit;
    max-width: 96rem;
    margin: 0 auto;
    border-top: 5px solid ;
    border-image: linear-gradient(#B6A100, #FFFF00) 1;

    div {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        height: auto;
        width: 100%;
        padding: 1.5rem;
    }

    p{
        font: 400 1.2rem var(--nunitoSans);
        color: var(--scolor1);
        text-align: left;
        margin-bottom: 2rem;
    }

    @media(max-width: 1200px) {
        width: inherit;
        max-width: 80%;
        margin: 0 auto;
    }
    
    @media(max-width: 400px) {
        gap: 0px;

        div {
            padding: 1rem;
        }

        p{
            text-align: center;
        }
    }
`;

export const ContainerInfoDeveloper = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin: 2rem auto;

    p {
        font: 400 1.6rem var(--nunitoSans);
        text-align: center;
        color: var(--scolor1);
        margin-bottom: 1rem;
    }

    div {
        display: flex;
        justify-content: space-evenly;
        margin: 0 auto;
        width: 20rem;
    }

    img {
        cursor: pointer;
    }
`;

