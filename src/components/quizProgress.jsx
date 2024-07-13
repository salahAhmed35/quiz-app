import React from 'react';
import { Questions } from "../questions.js";
import { CurrentQuestionContext } from '../context/currentQuestion.js';
import { AnswersContext } from '../context/answersContext.js';
import { FinishQuizContext } from '../context/finishQuiz.js';
import { useContext } from 'react';
const QuizProggress = () => {
    const { currentQuestionIndex } = useContext(CurrentQuestionContext);
    const { answers } = useContext(AnswersContext);
    const { quizFinished } = useContext(FinishQuizContext)
    return (
        <div className="quiz-progress">
            <h5 className='progress-header'>Progress {currentQuestionIndex + 1} / {Questions.length}</h5>
            <div className="progress">
                {Questions.map((question, index) => (

                    <div className={`progress-item ${currentQuestionIndex >= index ? 'active' : ''}`}>
                        <div className={`question-number`}>
                            <span className=''>{index + 1}</span>
                        </div>
                        <p>Question {index + 1}</p>
                        {
                            quizFinished ?
                                <div className={`answer-status ${answers[index] === Questions[index].correctAnswer ? 'correct' : 'wrong'}`}></div> : ''
                        }
                    </div>
                ))}
            </div>
        </div>
    )

}
export default QuizProggress