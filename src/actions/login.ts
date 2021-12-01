import { LOGIN, LOGIN_ERROR } from "./Types";
import { stopLoading, startLoading } from "./loading";
import { Actions as LoadingActions } from "../reducers/loading";
import { API_URL } from "./serverConnection";
import { Actions } from "../reducers/login";
import React from "react";
import axios from "axios";
import { History } from "history";

export const signIn =
  (email: string, password: string ,history: History | undefined) =>
  async (
    dispatch: React.Dispatch<Actions>,
    loadingDispatch: React.Dispatch<LoadingActions>
  ) => {
    try {
      
      startLoading(loadingDispatch);
      const result = await axios.post(`${API_URL}/auth/user/login`, {
        email,
        password,
      });
      console.log(result, "result")
      const token = result.data.result;
      localStorage.setItem("E_COMM: AUTH_TOKEN", token);
      stopLoading(loadingDispatch);
      dispatch({
        type: LOGIN,
        payload: token,
      });
      console.log(token, "from axios")
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      history?.push("/category/61974a3625fde0c069255ed5");
    } catch (error: any) {
      stopLoading(loadingDispatch);
      dispatch({
        type: LOGIN_ERROR,
        payload: error.response
          ? error.response.data.message
          : "Failed to connect to the server",
      });
    }
  };


  export const logout = () => {
    try {
      // Remove the JWT token, idle limit and encryption key from the local storage
      localStorage.clear();
      // Reload the application from the index
      window.location.href = "/";
    } catch (err) {
      // In case of errors, log the response and move the user to the Error page
      console.log(err);
      window.location.href = "/";
    }
  };
  