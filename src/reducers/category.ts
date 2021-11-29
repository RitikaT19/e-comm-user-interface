import { FETCH_CATEGORY, FETCH_CATEGORY_ERROR } from "../actions/Types";

export type Actions =
  | {
      type: typeof FETCH_CATEGORY;
      payload: any;
    }
  | {
      type: typeof FETCH_CATEGORY_ERROR;
      payload: any;
    };

interface CategoryInterface {
  error: string | null;
  fetchCategorySuccess: any;
  fetchCategoryError: string | null;
}
export type State = CategoryInterface;

export const initialState: State = {
  error: null,
  fetchCategoryError: null,
  fetchCategorySuccess: [],
};

export const Category = (state: State = initialState, action: Actions) => {
  console.log(action.type, "action");
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
