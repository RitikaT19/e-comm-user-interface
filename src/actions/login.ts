import { LOGIN, LOGIN_ERROR } from "./Types";
import { stopLoading, startLoading } from "./loading";
import { Actions as LoadingActions } from "../reducers/loading";
import { API_URL } from "./serverConnection";
import { Actions } from "../reducers/login";
import React from "react";
import axios from "axios";
import { History } from "history";

// function for sign in
export const signIn =
  // passing the parameters

    (email: string, password: string, history: History | undefined) =>
    // actions creator for sign in
    async (
      dispatch: React.Dispatch<Actions>,
      loadingDispatch: React.Dispatch<LoadingActions>
    ) => {
      try {
        // dispatch start loading
        startLoading(loadingDispatch);
        // fetching result from API
        const result = await axios.post(`${API_URL}/auth/user/login`, {
          email,
          password,
        });
        // get the token from result
        const token = result.data.result;
        // storing token in local storage
        localStorage.setItem("E_COMM: AUTH_TOKEN", token);
        // dispatch stop loading
        stopLoading(loadingDispatch);
        // dispatch the result token with LOGIN type action
        dispatch({
          type: LOGIN,
          payload: token,
        });
        // Add authorization header
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        // redirect user to the category page after logging
        history?.push("/category/61974a3625fde0c069255ed5");
      } catch (error: any) {
        // dispatch stop loading
        stopLoading(loadingDispatch);
        // dispatch error data
        dispatch({
          type: LOGIN_ERROR,
          payload: error.response
            ? error.response.data.message
            : "Failed to connect to the server",
        });
      }
    };

// function for sign out
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
