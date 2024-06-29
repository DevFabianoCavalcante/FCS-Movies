import styled from 'styled-components';

export const ContainerDoubt = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: inherit;
    max-width: 1000px;
    margin-bottom: 2rem;
    padding: 1rem;
    background-color: var(--pcolor2);
    border-bottom: 1px solid var(--scolor2);
    cursor: pointer;
`;

interface QuestionProps {
    arrowState: boolean;
}

export const Question = styled.div<QuestionProps> `
    display: flex;
    justify-content: space-between;
    width: 100%;

    h2{
        font: 400 2rem var(--poppins);
        color: var(--scolor1);
    }

    img{
        transform: ${({arrowState}) => (arrowState ? 'rotate(90deg)' : 'rotate(-90deg)')};
        transition: ease-in-out .7s;
    }
`;

interface AnswerProps {
    show: boolean;
}

export const Answer = styled.div<AnswerProps> `
    font: 400 1.6rem var(--nunitoSans);
    color: var(--pcolor9);
    max-height: ${({ show }) => (show ? '1000px' : '0')};
    overflow: hidden;
    transition: max-height 0.7s ease-in-out, opacity 0.7s ease-in-out;
    opacity: ${({ show }) => (show ? '1' : '0')};
`;