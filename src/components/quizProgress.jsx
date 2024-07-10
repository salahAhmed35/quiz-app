import React from 'react';
import { Questions } from "../questions.js";
import { CurrentQuestionContext } from '../context/currentQuestion.js';
import { useContext } from 'react';
const QuizProggress = () => {
    const {currentQuestionIndex} = useContext(CurrentQuestionContext);
    return (
        <div className="quiz-progress">
            <div className="progress">
                <h5 className='progress-header'>Progress {currentQuestionIndex+1} / 50</h5>
            </div>
            {Questions.map((question, index) => (
                <div className={`progress-item ${currentQuestionIndex >= index ? 'active' : ''}`}>
                    <div className={`question-number`}>
                        <span className=''>{index+1}</span>
                    </div>
                    <p>Question {index+1}</p>
                </div>
            ))}
        </div>
    )
    
}
export default QuizProggress