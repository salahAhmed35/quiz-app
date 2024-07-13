import './App.css';
import React, { useContext } from 'react';
import QuizBody from './components/quizBody';
import QuizProggress from './components/quizProgress';
import FinishMessage from './components/finishMessage';
import { FinishQuizContext } from './context/finishQuiz';
function App() {

  let {quizFinished} = useContext(FinishQuizContext);
  return (
    <div className="App">
      {quizFinished ? <FinishMessage/> : <></>}
      <div className='container'>
        <QuizProggress/>
        <QuizBody />
      </div>
    </div>
  );
}

export default App;
