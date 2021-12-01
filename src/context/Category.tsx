import React, { useReducer, createContext } from "react";
import {
  Category,
  initialState,
  State as InitialStateType,
  Actions,
} from "../reducers/category";
//import Category reducer, initialState of that reducer, State type and Actions type
//export the CategoryContext by creating a context which has a state (initial state)
//and a function which dispatches one of the action types

export const CategoryContext = createContext<{
    state: InitialStateType;
  dispatch: React.Dispatch<Actions>;
}>({
    state: initialState,
    dispatch: () => null,
  });
  //export the CategoryProvider which is a component that takes the children prop
//and acts as a wrapper to provide the user reducer the the wrapped components

  export const CategoryProvider: React.FC = ({ children }) =>{
    //get the state and the dispatch function from the useReducer hook by using the category reducer
      const [state, dispatch] = useReducer(Category, initialState);
    //create an object called value which has the state and the dispatch function returned from the reducer
      const value = { state, dispatch};
      //wrap the children with the Provider component for the Loading Context and pass the value of the context
      return <CategoryContext.Provider value = {value}>{children}</CategoryContext.Provider>
  }
