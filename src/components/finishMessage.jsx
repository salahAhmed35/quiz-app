import React from 'react';


const FinishMessage = ({time, score}) => {
    return(
        <div className="end-quiz-message">
            <div className="">
                <p>The Quiz Finished, you score is <strong>11 / 20</strong></p>
            </div>
        </div>
    )
}
export default FinishMessage