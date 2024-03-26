import React, { useRef } from 'react';
function Answers({answers,onSubmit,answerState,selectedAnswer}) {

    const shuffledAnswers = useRef();

    if(!shuffledAnswers.current){

        shuffledAnswers.current = [...answers];
    
        shuffledAnswers.current.sort((a,b)=> Math.random()-0.5);
    }

    return (
        <ul id="answers">
            {shuffledAnswers.current.map((ans,idx)=> {

                let cssClass = '';
                const isSelected = ans === selectedAnswer

                if(answerState==='selected' && isSelected) {
                    cssClass = 'selected';
                }

                if((answerState==='correct' || answerState==='wrong') && isSelected){

                    cssClass = answerState;
                }

                return (
                    <li key={idx} className='answer'>
                        <button onClick={() =>onSubmit(ans)} className={cssClass} disabled={answerState!==''}>{ans}</button>
                    </li>
                )
            }
            )}
        </ul>
    );
}

export default Answers;