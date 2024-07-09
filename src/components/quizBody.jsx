import React, { useContext } from 'react';
import { CurrentQuestionContext } from '../context/currentQuestion';
import { Questions } from '../questions';
const QuizBody = () => {
    const {currentQuestion, setCurrentQuestion} = useContext(CurrentQuestionContext);
    let currentQuestionIndex = Questions[currentQuestion]
    return (
        <div className="quiz-body">
            <div className="timer">
                00:00:00
            </div>
            <div>
                <h6 className='question-title'>{currentQuestionIndex.question.replace(";", " ?")}</h6>
                <div className="answers">
                {currentQuestionIndex.answers.map(( answer, index) => (
                    <div className='answer' key={index}>
                        <input type="radio" id={index} name="answer-radio" />
                        <p className='answer-text'>{answer}</p>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}
export default QuizBody