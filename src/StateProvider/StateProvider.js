import react, { useReducer } from "react"
import { createContext } from "react"
import { reducer,initialState } from "./reducer";

export const StateContext = createContext();


export const StateProvider = ({children}) => {
    return <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
} 

