import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CurrentQuestionProvider } from './context/currentQuestion';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CurrentQuestionProvider>
       <App />
    </CurrentQuestionProvider>
  </React.StrictMode>
);
