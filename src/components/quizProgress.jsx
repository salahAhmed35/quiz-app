import React from 'react';
import { Questions } from "../questions.js"
const QuizProggress = () => {
    return (
        <div className="quiz-progress">
            <div className="progress">
                <h5 className='progress-header'>Progress 50 / 50</h5>
            </div>
            {Questions.map((question, index) => (
                <div className='progress-item'>
                    <div className='question-number'>
                        <span className=''>{index+1}</span>
                    </div>
                    <p>Question {index+1}</p>
                </div>
            ))}
        </div>
    )
}
export default QuizProggress