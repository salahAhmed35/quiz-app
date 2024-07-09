import './App.css';
import React from 'react';
import QuizBody from './components/quizBody';
import QuizProggress from './components/quizProgress';
function App() {
  return (
    <div className="App">
      <div className='container'>
        <QuizProggress/>
         <QuizBody />
      </div>
    </div>
  );
}

export default App;
