import React, { useReducer, createContext } from "react";
import {
  Login,
  initialState,
  State as InitialStateType,
  Actions,
} from "../reducers/login";

export const LoginContext = createContext<{
    state: InitialStateType;
    dispatch: React.Dispatch<Actions>
}>({
    state: initialState,
    dispatch:() => null,
});

export const LoginContextProvider: React.FC = ({children}) =>{
    const [state, dispatch] = useReducer(Login, initialState);
    const value = {state, dispatch};
    return <LoginContext.Provider value = {value}>{children}</LoginContext.Provider>
}