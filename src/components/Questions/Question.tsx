import React from 'react';
import * as C from './QuestionStyle';
import Arrow from './utils/img/Arrow.svg';
import useTransition from '../../Hooks/useTransition';

interface QuestionProps {
    question: string;
    answer: string;
}

export const Question = ({question, answer}: QuestionProps) => {
    const [showAnswer, setShowAnswer] = React.useState(false);
    const questionRef = React.useRef(null);

    const refs = [questionRef];
    
    useTransition(refs,'transition--animationX');


    const toggleAnswer = () => {
        setShowAnswer(!showAnswer);
    }

    return (
        <C.ContainerDoubt onClick={toggleAnswer} ref={questionRef}>
            <C.Question arrowState={showAnswer}>
                <h2>{question}</h2>
                <img  src={Arrow} alt='Arrow icon' />
            </C.Question>
            <C.Answer show={showAnswer}> {answer} </C.Answer>
            
        </C.ContainerDoubt>
    )
}