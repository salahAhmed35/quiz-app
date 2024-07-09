import React , {createContext, useState} from 'react';


export const CurrentQuestionContext = createContext();

export const CurrentQuestionProvider = ({children}) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    return (
        <CurrentQuestionContext.Provider value={{currentQuestion, setCurrentQuestion}}>
            {children}
        </CurrentQuestionContext.Provider>
    )
}