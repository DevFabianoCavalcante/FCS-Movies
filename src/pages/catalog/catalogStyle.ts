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
    justify-content: space-between;
    align-items: center;
    margin: 0 0 8rem 0;

    @media(max-width: 680px) {
        flex-direction: column-reverse;
        margin: 4rem 0;
    }
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

        :hover {
            cursor: pointer;
            transition: ease-in-out .5s;
            color: var(--scolor4);
        }
    }

    @media(max-width: 680px) {
        flex-flow: row;
        
        li {
            font-size: 1.5rem;
            margin: 2.5rem 2rem 0 0;
        }
    }
`;

export const Search = styled.div `
    input {
        height: 4rem;
        width: 30rem;
        font-size: 1.6rem;
        font-family: var(--openSans);
        font-weight: 400;
        color: var(--pcolor12);
        padding: 0 1rem;
        outline: none;
        border-radius: 2rem;
        border: 1px solid var(--scolor5);
        background-color: transparent;
        transition: ease-in-out .5s;

        :focus{
            border-color: var(--pcolor12);
        }
    };

    img {
        max-height: 2.5rem;
        max-width: 2.5rem;
        margin: 0 0 -0.5rem -3rem;

        :hover {
            cursor: pointer;
        }
    }
`;

export const MoviesArea = styled.div `
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    height: auto;
    width: 100%;
`;
