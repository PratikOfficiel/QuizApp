import { useState } from 'react';
import QuizTimer from './QuizTimer';
import Answers from './Answers.jsx';
import QUESTIONS from '../questions.js';

function Question({onSubmit, onSkipped, index}) {

    const [answer, setAnswer] = useState({
        answer: '',
        isCorrect : null
    });

    function handleSubmit(submittedAnswer) {

        setAnswer({
            answer: submittedAnswer,
            isCorrect: null
        })

        setTimeout(()=>{

            setAnswer({
                answer: submittedAnswer,
                isCorrect: (submittedAnswer === QUESTIONS[index].answers[0])
            })

            setTimeout(()=>{
                onSubmit(submittedAnswer);
            }, 2000)

        }, 1000)
    }

    let answerState = '',timer = 10000;

    if(answer.answer !=='' && answer.isCorrect!==null){
        answerState = answer.isCorrect? "correct": "wrong";
        timer = 2000
    }
    else if(answer.answer !==''){
        answerState = "selected";
        timer = 1000
    }

    return (
        <div id="question">

            <QuizTimer key={timer} timeout={timer} onTimeout={answer.answer===''?onSkipped:null} mode={answerState}/>
            
            <h2>{QUESTIONS[index].text}</h2>

            <Answers 
            onSubmit = {handleSubmit}
            answers = {QUESTIONS[index].answers}
            answerState = {answerState}
            selectedAnswer={answer.answer}
            />
            
        </div>
    );
}

export default Question;