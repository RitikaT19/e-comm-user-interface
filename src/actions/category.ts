import axios from "axios";
import { startLoading, stopLoading } from "./loading";
import { Actions as LoadingActions } from "../reducers/loading";
import { FETCH_CATEGORY_ERROR, FETCH_CATEGORY } from "./Types";
import { API_URL } from "./serverConnection";
import { Actions } from "../reducers/category";
import React from "react";

// function for getting category
export const getCategory =
  () =>
  // action creators for fetching category
  async (
    dispatch: React.Dispatch<Actions>,
    loadingDispatch: React.Dispatch<LoadingActions>
  ) => {
    try {
      // dispatch start loading
      startLoading(loadingDispatch);
      // fetch result from the API
      const result = await axios.get(`${API_URL}/category/get_category`);
      // dispatch Stop loading
      stopLoading(loadingDispatch)
      // dispatch result
      dispatch({
        type: FETCH_CATEGORY,
        payload: result.data.data,
      });
    } catch (error: any) {
      // in case of error, stop loading
      stopLoading(loadingDispatch);
      // dispatch error data
      dispatch({
        type: FETCH_CATEGORY_ERROR,
        payload: error.response
          ? error.response.data
          : "Failed to connect with the server",
      });
    }
  };

  