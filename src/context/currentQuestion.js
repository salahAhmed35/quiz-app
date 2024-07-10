import React , {createContext, useState} from 'react';


export const CurrentQuestionContext = createContext();

export const CurrentQuestionProvider = ({children}) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    return (
        <CurrentQuestionContext.Provider value={{currentQuestionIndex, setCurrentQuestionIndex}}>
            {children}
        </CurrentQuestionContext.Provider>
    )
}