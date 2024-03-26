import React from 'react';
import quizCompleteImg from '../assets/quiz-complete.png';
import QUESTIONS from '../questions.js';
import Answers from './Answers';

function Summary({userAnswers}) {

    const skippedAnswers = userAnswers.filter((answer) => answer===null);
    const correctAnswers = userAnswers.filter((answer,idx)=> (answer === QUESTIONS[idx].answers[0]));

    const skippedAnswerShare = Math.round(skippedAnswers.length / userAnswers.length * 100);
    const correctAnswerShare = Math.round(correctAnswers.length / userAnswers.length * 100);
    const wrongAnswerShare = 100 - skippedAnswerShare - correctAnswerShare;
    return (
        <div id="summary">
            <img src={quizCompleteImg} alt="trophy_Image" />
            <h2>Quiz Completed!</h2>

            <div id="summary-stats">
                <p>
                    <span className='number'>{skippedAnswerShare}%</span>
                    <span className='text'>skipped</span>
                </p>
                <p>
                    <span className='number'>{correctAnswerShare}%</span>
                    <span className='text'>answered Correctly</span>
                </p>
                <p>
                    <span className='number'>{wrongAnswerShare}%</span>
                    <span className='text'>answered InCorrectly</span>
                </p>
            </div>

            <ol>
                {userAnswers.map((ans,idx)=> {
                    
                    let cssClass = 'user-answer';

                    if(ans===null) {
                        cssClass +=' skipped';
                    } else if(ans===QUESTIONS[idx].answers[0]) {
                        cssClass +=' correct';
                    } else {
                        cssClass +=' wrong';
                    }
                    return (
                    <li key={idx}>
                        <h3>{idx+1}</h3>
                        <p className="question">{QUESTIONS[idx].text}</p>
                        <p className={cssClass}>{ans ?? 'Skipped'}</p>
                    </li>
                )}
                )}
            </ol>
        </div>
    );
}

export default Summary;