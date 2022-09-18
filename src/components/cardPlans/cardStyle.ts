import styled from 'styled-components';

interface PropColor {
    backgroundGradient1: string,
    backgroundGradient2: string,
}

export const ContainerCard = styled.div<PropColor>`
    display: flex;
    flex-flow: column wrap;
    min-height: 30.2rem;
    width: 40rem;
    padding: 2rem 2rem 4rem 2rem;
    background: linear-gradient(${prop => prop.backgroundGradient1}, ${prop=> prop.backgroundGradient2} );
    border-radius: 2rem;

    @media(max-width:900px) {
        width: 28rem;
        margin: 0 0 4rem 0;
    }
`;


export const PlanInfoTitle = styled.div `
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;

    h1, h2 {
        display: flex;
        font-family: var(--poppins);
        font-weight: 400;
        color: var(--pcolor12);
    }

    h1 {
        font-size: 2.4rem;
    }

    h2{
        font-size: 1.6rem;
    }
`;

export const ListBenefit = styled.ul `
    margin: 3rem 0 4.5rem 0;

    li{
        font-size: 1.6rem;
        font-family: var(--openSans);
        font-weight: 400;
        color: var(--pcolor12);
        margin: 0 0 1.5rem 0;
    }

    li::before {
        content: '+';
        font-size: 1.5rem;
        font-weight: bold;
        font-family: var(--openSans);
        margin: 0 0.5rem 0 0;
    }
`;

interface PropBtn {
    colorGradient1: string,
    colorGradient2: string,
}

export const ButtonPlan = styled.button<PropBtn> `
    height: 5rem;
    width: 17rem;
    border-radius: 0.5rem;
    background: linear-gradient(${prop=>prop.colorGradient1}, ${prop=> prop.colorGradient2});
    font-size: 2.4rem;
    font-family: var(--poppins);
    font-weight: 400;
    color: var(--pcolor12);
    margin: 0 auto;
    transition: ease-in-out .5s;
    border: none;
    outline: none;

    :hover {
        cursor: pointer;
        transform: scale(1.1);
    }
`;