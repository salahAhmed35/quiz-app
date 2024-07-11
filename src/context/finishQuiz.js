import React , { createContext, useState} from 'react';


export  const FinishQuizContext = createContext();

export  const FinishQuizProvider = ({children}) => {
    const [quizFinished, setQuizFinished] = useState(true);
    return (
        <FinishQuizContext.Provider value={{quizFinished, setQuizFinished}} >
             {children}
        </FinishQuizContext.Provider>
    )
}