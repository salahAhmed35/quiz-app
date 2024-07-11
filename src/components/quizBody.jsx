import React, { useContext, useEffect, useState } from "react";
import { CurrentQuestionContext } from "../context/currentQuestion";
import { FinishQuizContext } from "../context/finishQuiz";
import { AnswersContext } from "../context/answersContext";
import { Questions } from "../questions";
const QuizBody = () => {
    let { currentQuestionIndex, setCurrentQuestionIndex } = useContext(CurrentQuestionContext);
    let {quizFinished, setQuizFinished } = useContext(FinishQuizContext);
    let {answers, setAnswers} = useContext(AnswersContext);
    let currentQuestion = Questions[currentQuestionIndex];
    const [choosenAnswers, setChoosenAnswers] = useState(Array(Questions.length).fill(null));
    const [seconds, setSeconds] = useState(10);
    const [minutes, setMinutes] = useState(1); // quiz time 
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
    // handle timer 
    useEffect(() => {
        let timer = setInterval(() => {
            setSeconds(prevSec => {
                if (prevSec === 0) {
                    if (minutes === 0) {
                        clearInterval(timer);
                        window.confirm('The Quiz Time End')

                        // Call the finishQuiz function here if needed
                        submitQuiz();
                        return 0;
                    } else {
                        setMinutes(prevMin => prevMin - 1);
                        return 59;
                    }
                } else {
                    return prevSec - 1;
                }
            });
        }, 1000); // Set to 1000 milliseconds (1 second)
        return () => clearInterval(timer);
    }, []);
    const submitQuiz = () => {
        setQuizFinished(true);
        setAnswers()
    }
    return (
        <div className="quiz-body">

            <div className="quiz-body-container">
                <div className="timer">{minutes} min {seconds} sec</div>
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
                                checked = {choosenAnswers[currentQuestionIndex] === index}
                                onChange={() => {
                                    if (choosenAnswers[currentQuestionIndex] != null) {
                                        updateAnswer(currentQuestionIndex, index);
                                    } else {
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
                        className={`prev-btn ${currentQuestionIndex === 0 ? "disable" : ""
                            }`}
                        onClick={() => setCurrentQuestionIndex((currentQuestionIndex -= 1))}
                        disabled={currentQuestionIndex === 0}
                    >
                        Previous
                    </button>
                    {currentQuestionIndex === Questions.length - 1 ? (
                        <button className="submit" onClick={submitQuiz}>Submit Quiz</button>
                    ) : (
                        <button
                            className={`next-btn ${currentQuestionIndex === Questions.length - 1 ? "disable" : ""
                                }`}
                            onClick={() =>
                                setCurrentQuestionIndex((currentQuestionIndex += 1))
                            }
                            disabled={currentQuestionIndex === Questions.length - 1}
                        >
                            Next
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};
export default QuizBody;
