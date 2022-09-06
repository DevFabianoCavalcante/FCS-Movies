import styled from "styled-components";


export const Container = styled.div `
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    height: auto;
    max-width: 150rem;
    margin: 0 auto;
    padding: 0 3rem;
    background-color: var(--pcolor1);
`;

export const NavbarContainer = styled.div `
    display: flex;
    align-items: flex-start;
    margin: 0 0 8rem 0;
`;

export const Navbar = styled.ul `
    display: flex;
    flex-flow: row wrap;

    li {
        font-size: 1.8rem;
        font-family: var(--openSans);
        font-weight: 400;
        color: var(--scolor8);
        margin: 0 3rem 0 0;
    }

    li:hover {
        cursor: pointer;
        transform: scale(1.1);
        transition: ease-in-out .5s;
        color: var(--scolor4);
    }
`;

export const MoviesArea = styled.div `
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    height: auto;
    width: 100%;
`;
