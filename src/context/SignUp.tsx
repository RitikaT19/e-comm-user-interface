import React, { useReducer, createContext } from "react";
import {
  SignIn,
  initialState,
  State as InitialStateType,
  Actions,
} from "../reducers/sign-up";

export const SignUpContext = createContext<{
    state: InitialStateType;
    dispatch: React.Dispatch<Actions>
}>({
    state: initialState,
    dispatch:() => null,
});

export const SignUpContextProvider: React.FC = ({children}) =>{
    const [state, dispatch] = useReducer(SignIn, initialState);
    const value = {state, dispatch};
    return <SignUpContext.Provider value = {value}>{children}</SignUpContext.Provider>
}