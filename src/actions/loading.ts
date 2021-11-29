import { START_LOADING, STOP_LOADING } from "./Types";
import { Actions } from "../reducers/loading";
import React from "react";

export const startLoading = (dispatch: React.Dispatch<Actions>) => {
  dispatch({
    type: START_LOADING,
  });
};

export const stopLoading = (dispatch: React.Dispatch<Actions>) => {
  dispatch({
    type: STOP_LOADING,
  });
};
