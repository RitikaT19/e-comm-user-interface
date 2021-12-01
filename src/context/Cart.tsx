import React, { useReducer, createContext } from "react";
import {
  Cart,
  initialState,
  State as InitialStateType,
  Actions,
} from "../reducers/cart";

export const CartContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<Actions>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const CartContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(Cart, initialState);
  const value = { state, dispatch };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
