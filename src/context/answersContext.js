import React , {useState, createContext} from 'react';

export const AnswersContext = createContext();

export const AnswersProvider = ({children}) => {
    const [answers, setAnswers] = useState([])
    return (
        <AnswersContext value = {{answers, setAnswers}}>
            {children}
        </AnswersContext>
    )
}
