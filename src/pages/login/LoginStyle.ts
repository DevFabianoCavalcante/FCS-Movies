import styled from "styled-components";

export const ContainerPage = styled.section `
    display: flex;
    flex-flow: row wrap;
    height: 100vh;
    width: 100%;
    background-color: var(--pcolor1);
`;

interface PropImage {
    img: string,
};

export const ImageArea = styled.div<PropImage> `
    flex: 1;
    background-image: url(${prop=> prop.img});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

export const LoginArea = styled.div `
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
