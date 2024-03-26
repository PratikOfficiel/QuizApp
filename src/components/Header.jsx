import React from 'react';
import QuizLogo from '../assets/quiz-logo.png';
function Header(props) {
    return (
        <header>
            <img src={QuizLogo} alt="quiz-logo" />
            <h1>Quiz App</h1>
        </header>
    );
}

export default Header;