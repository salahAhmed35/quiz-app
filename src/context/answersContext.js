import React , {useState, createContext} from 'react';


export const AnswersContext = createContext();

export const AnswersProvider = ({children}) => {
    const [answers, setAnswers] = useState(null)
    return (
        <AnswersContext.Provider value = {{answers, setAnswers}}>
            {children}
        </AnswersContext.Provider>
    )
}