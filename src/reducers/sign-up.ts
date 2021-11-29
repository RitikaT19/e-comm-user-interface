import { SIGN_UP, SIGN_UP_ERROR, CLEAR_ERRORS } from "../actions/Types";
export type Actions =
  | {
      type: typeof SIGN_UP;
      payload: string;
    }
  | {
      type: typeof SIGN_UP_ERROR;
      payload: string;
    }
  | {
      type: typeof CLEAR_ERRORS;
    };

interface SignUpInterface {
  error: string | null;
  addUserSuccess: string | null;
  addUserError: string | null;
}

export type State = SignUpInterface;

export const initialState: State = {
  error: null,
  addUserSuccess: null,
  addUserError: null,
};

export const SignIn = (state: State = initialState, action: Actions) => {
  // switch between action type
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
        addUserSuccess: action.payload,
      };
    case SIGN_UP_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return{
        ...state,
        error: null,
        addUserSuccess: null,
      }
    default:
      return state;
  }
};
