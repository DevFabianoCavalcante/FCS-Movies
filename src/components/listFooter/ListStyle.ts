import styled from "styled-components";

export const List = styled.ul `

    li {
        font-size: 1.6rem;
        font-family: var(--openSans);
        font-weight: 400;
        color: var(--pcolor8);
        margin: 0 0 2rem 0;
        cursor: pointer;

        :hover {
            color: var(--scolor5);
        }
    }

    @media(max-width: 900px) {
        li {
            font-size: 1.3rem;
        }
    }
`;