import { LOGIN, LOGIN_ERROR } from "../actions/Types";
export type Actions =
  | {
      type: typeof LOGIN;
      payload: string;
    }
  | {
      type: typeof LOGIN_ERROR;
      payload: string;
    };

interface SignUpInterface {
  token: string | null;
  error: string | null;
  loginSuccess: string | null;
  loginError: string | null;
}

export type State = SignUpInterface;

export const initialState: State = {
  token: null,
  error: null,
  loginSuccess: null,
  loginError: null,
};

export const Login = (state: State = initialState, action: Actions) => {
  // switch between action type
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.payload,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
