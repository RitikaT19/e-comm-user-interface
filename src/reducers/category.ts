// importing types of action
import { FETCH_CATEGORY, FETCH_CATEGORY_ERROR } from "../actions/Types";

// exporting actions
export type Actions =
  | {
      type: typeof FETCH_CATEGORY;
      payload: any;
    }
  | {
      type: typeof FETCH_CATEGORY_ERROR;
      payload: any;
    };
//CartInterface to define the State type for the state of the reducer
interface CategoryInterface {
  error: string | null;
  fetchCategorySuccess: any;
  fetchCategoryError: string | null;
}
//State type for defining the state of the reducer
export type State = CategoryInterface;
//Initial state of the reducer of type State
export const initialState: State = {
  error: null,
  fetchCategoryError: null,
  fetchCategorySuccess: [],
};

export const Category = (state: State = initialState, action: Actions) => {
  //switch between action.type
  switch (action.type) {
    case FETCH_CATEGORY:
      return {
        ...state,
        fetchCategorySuccess: action.payload,
      };
    case FETCH_CATEGORY_ERROR:
      return {
        ...state,
        fetchCategoryError: action.payload
          ? action.payload
          : "Unable to fetch the category at the moment",
      };
    default:
      return state;
  }
};
