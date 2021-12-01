// importing types of action
import {
  ADD_TO_CART,
  ADD_TO_CART_ERROR,
  FETCH_CART,
  FETCH_CART_ERROR,
} from "../actions/Types";

// exporting types of actions
export type Actions =
  | {
      type: typeof ADD_TO_CART;
      payload: any;
    }
  | {
      type: typeof ADD_TO_CART_ERROR;
      payload: string;
    }
  | {
      type: typeof FETCH_CART;
      payload: any;
    }
  | {
      type: typeof FETCH_CART_ERROR;
      payload: any;
    };
//CartInterface to define the State type for the state of the reducer
interface CartInterface {
  addToCartSuccess: string | null;
  addToCartError: string | null;
  fetchCartSuccess: any;
  fetchCartError: string | null;
}
//State type for defining the state of the reducer
export type State = CartInterface;
//Initial state of the reducer of type State
export const initialState: State = {
  addToCartSuccess: null,
  addToCartError: null,
  fetchCartError: null,
  fetchCartSuccess: [],
};

export const Cart = (state: State = initialState, action: Actions) => {
  //switch between action.type
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        addToCartSuccess: action.payload,
      };
    case ADD_TO_CART_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case FETCH_CART:
      return {
        ...state,
        fetchCartSuccess: action.payload,
      };
    case FETCH_CART_ERROR:
      return {
        ...state,
        fetchCartError: action.payload
          ? action.payload
          : "Unable to fetch the cart at the moment",
      };
    default:
      return state;
  }
};
