import styled from 'styled-components';
import {Props} from './Button';

export const Button = styled.button<Props> `
    height: ${props => props.height};
    width: ${props => props.width};
    background: ${props => props.isGradient ? `linear-gradient(${props.background})` : props.background};
    color: ${props => props.color};
    border: ${props => props.border? '1px solid #FEE100' : 'none'};
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.fontWeight};
    font-family: var(--poppins);
    text-align: center;
    cursor: pointer;
    margin-left: 5rem;
    
    :hover {
        background-color: var(--scolor1);
        color: var(--scolor3);
        transition: ease-in-out .5s;
    }

    @media(max-width: 800px) {
        height: auto;
        width: auto;
        padding: 0.7rem;
        font-size: 1.8rem;
        margin-left: 2rem;
    }

    @media(max-width: 480px) {
        font-size: 1.6rem;
    }
`;