import react, { useContext, useReducer } from "react"
import { createContext } from "react"
import { reducer,initialState } from "./reducer";

const StateContext = createContext();


export const StateProvider = ({children}) => {
    return <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
} 

export const useContextValue = () => useContext(StateContext); 
