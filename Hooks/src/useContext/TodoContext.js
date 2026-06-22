import { createContext, useContext } from "react";


export const TodoContest = createContext({
    todo: [
        {
            id: 1,
            todo: "todo msgs",
            completed : false
         }
    ],
    addtodo: (todo) => { },
    deletetodo: (id) => { },
    updatetodo : (todo, id) => {},
    completetodo: (id) => { },     
 })
    



export const useTodo = () => {
return createContext(TodoContest)
}

export const TodoProvider = TodoContest.Provider