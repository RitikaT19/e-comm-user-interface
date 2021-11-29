import React, { useReducer, createContext } from "react";
import {
  Category,
  initialState,
  State as InitialStateType,
  Actions,
} from "../reducers/category";

export const CategoryContext = createContext<{
    state: InitialStateType;
  dispatch: React.Dispatch<Actions>;
}>({
    state: initialState,
    dispatch: () => null,
  });

  export const CategoryProvider: React.FC = ({ children }) =>{
      const [state, dispatch] = useReducer(Category, initialState);
      const value = { state, dispatch};
      return <CategoryContext.Provider value = {value}>{children}</CategoryContext.Provider>
  }
