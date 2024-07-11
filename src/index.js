import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CurrentQuestionProvider } from "./context/currentQuestion";
import { FinishQuizProvider } from "./context/finishQuiz";
import { AnswersProvider } from "./context/answersContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AnswersProvider>
      <FinishQuizProvider>
        <CurrentQuestionProvider>
          <App />
        </CurrentQuestionProvider>
      </FinishQuizProvider>
    </AnswersProvider>
  </React.StrictMode>
);
