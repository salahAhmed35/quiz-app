import React , {useContext} from 'react';
import { Questions } from '../questions';
import { AnswersContext } from '../context/answersContext';
const FinishMessage = () => {
    const {answers} = useContext(AnswersContext)
    let quizScore = 0;
    for(let i = 0 ; i < Questions.length; i++){
      if(answers[i] === Questions[i].correctAnswer){
        quizScore++;
      }
    }
    return(
        <div className="end-quiz-message">
            <div className="">
                <p>The Quiz Finished, you score is <strong>{quizScore} / {Questions.length}</strong></p>
            </div>
        </div>
    )
}
export default FinishMessage