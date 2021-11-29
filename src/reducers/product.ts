import { FETCH_PRODUCT, FETCH_PRODUCT_ERROR } from "../actions/Types";

export type Actions =
  | {
      type: typeof FETCH_PRODUCT;
      payload: any;
    }
  | {
      type: typeof FETCH_PRODUCT_ERROR;
      payload: any;
    };

interface ProductInterface {
  error: string | null;
  fetchProductSuccess: any;
  fetchProductError: string | null;
}
export type State = ProductInterface;

export const initialState: State = {
  error: null,
  fetchProductError: null,
  fetchProductSuccess:[]
};

export const Product = (state: State = initialState, action: Actions) => {
  console.log(action.type, "slug action");
  switch (action.type) {
    case FETCH_PRODUCT:
      return {
        ...state,
        fetchProductSuccess: action.payload,
      };
    case FETCH_PRODUCT_ERROR:
      return {
        ...state,
        fetchProductError: action.payload
          ? action.payload
          : "Unable to fetch the Product at the moment",
      };
    default:
      return state;
  }
};
