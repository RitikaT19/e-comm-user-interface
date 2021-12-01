import { startLoading, stopLoading } from "./loading";
import { Actions as LoadingActions } from "../reducers/loading";
import { SIGN_UP, SIGN_UP_ERROR, CLEAR_ERRORS } from "./Types";
import axios from "axios";
import { API_URL } from "./serverConnection";
import { Actions } from "../reducers/sign-up";
import React from "react";
import { History } from "history";

export const addUser =
  (data: any, history: History | undefined) =>
  async (
    dispatch: React.Dispatch<Actions>,
    loadingDispatch: React.Dispatch<LoadingActions>
  ) => {
    try {
      startLoading(loadingDispatch);
      const result = await axios.post(`${API_URL}/auth/user/sign_up`, data);
      stopLoading(loadingDispatch);
      dispatch({
        type: SIGN_UP,
        payload: result.data.message,
      });
      history?.push("/login");
    } catch (error: any) {
      stopLoading(loadingDispatch);
      dispatch({
        type: SIGN_UP_ERROR,
        payload: error.response
          ? error.response.data.message
          : "Failed to connect to the server",
      });
    }
  };


  export const clearErrors = (dispatch: React.Dispatch<Actions>) => {
    //Dispatch CLEAR_ERRORS type
    dispatch({
      type: CLEAR_ERRORS,
    });
  };
  