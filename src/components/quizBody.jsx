import React, { useContext, useState } from "react";
import { CurrentQuestionContext } from "../context/currentQuestion";
import { Questions } from "../questions";
const QuizBody = () => {
    let { currentQuestionIndex, setCurrentQuestionIndex } = useContext(
        CurrentQuestionContext
    );
    let currentQuestion = Questions[currentQuestionIndex];
    const [choosenAnswers, setChoosenAnswers] = useState(Array(Questions.length).fill(null));
    const handleAnswer = (answerIndex) => {
        choosenAnswers[currentQuestionIndex] = answerIndex;
        console.log(choosenAnswers);
    };
    const updateAnswer = (currentQuestionIndex, answerIndex) => {
        const newChoosenAnswers = [...choosenAnswers];
        newChoosenAnswers[currentQuestionIndex] = answerIndex;
        setChoosenAnswers(newChoosenAnswers);
        console.log(newChoosenAnswers);
    };
    return (
        <div className="quiz-body">
            <div className="quiz-body-container">
                <div className="timer">00:00:00</div>
                <h6 className="question-title">
                    {currentQuestion.question.replace(";", " ?")}
                </h6>
                <div className="answers">
                    {currentQuestion.answers.map((answer, index) => (
                        <div className="answer" key={answer}>
                            <input
                                type="radio"
                                id={answer}
                                name="answer-radio"
                                onChange={() => {
                                    if (choosenAnswers[currentQuestionIndex] != null) {
                                        updateAnswer(currentQuestionIndex, index )
                                    }else{
                                        handleAnswer(index);
                                    }                                    
                                }}
                            />
                            <p className="answer-text">{answer}</p>
                        </div>
                    ))}
                </div>
                <div className="buttons">
                    <button
                        className={`prev-btn ${currentQuestionIndex === 0 ?'disable' :''}`}
                        onClick={() => setCurrentQuestionIndex((currentQuestionIndex -= 1))}
                        disabled={currentQuestionIndex === 0}
                    >
                        Previous
                    </button>
                    <button
                        className={`next-btn ${currentQuestionIndex === Questions.length - 1 ? 'disable' : ''}`}
                        onClick={() => setCurrentQuestionIndex((currentQuestionIndex += 1))}
                        disabled={currentQuestionIndex === Questions.length - 1}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};
export default QuizBody;
