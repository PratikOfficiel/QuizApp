import React, { useCallback, useState } from 'react';
import QUESTIONS from '../questions.js';
import Question from './Question';
import Summary from './Summary.jsx';

function Quiz(props) {

    const [answersList, setAnswersList] = useState([]);

    const currentQuestionIdx = answersList.length;

    const quizCompleted = (currentQuestionIdx===QUESTIONS.length);

    
    const handleSubmitAns = useCallback(function handleSubmitAns(submittedAnswer) {

        setAnswersList((prev) => (
            [...prev, submittedAnswer]
        ));
            
    },[currentQuestionIdx]);
        
    const handleSkippedAns = useCallback(()=> handleSubmitAns(null),[handleSubmitAns]);
    
    if(quizCompleted) {
        return (
            <Summary userAnswers={answersList}/>
        )
    }

    return (
        <div id="quiz">
            
            <Question 
            key={currentQuestionIdx}
            index = {currentQuestionIdx}
            onSubmit={handleSubmitAns}
            onSkipped={handleSkippedAns}
            />

        </div>
    );
}

export default Quiz;