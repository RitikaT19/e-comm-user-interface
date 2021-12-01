import { START_LOADING, STOP_LOADING } from "./Types";
import { Actions } from "../reducers/loading";
import React from "react";

// function for start loading
export const startLoading = (dispatch: React.Dispatch<Actions>) => {
  dispatch({
    type: START_LOADING,
  });
};

// function for stop loading
export const stopLoading = (dispatch: React.Dispatch<Actions>) => {
  dispatch({
    type: STOP_LOADING,
  });
};
