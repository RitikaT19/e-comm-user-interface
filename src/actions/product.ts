import axios from "axios";
import { startLoading, stopLoading } from "./loading";
import { Actions as LoadingActions } from "../reducers/loading";
import { FETCH_PRODUCT_ERROR, FETCH_PRODUCT } from "./Types";
import { API_URL } from "./serverConnection";
import { Actions } from "../reducers/product";
import React from "react";

// function for fetching product by id
export const getProductById =
  (id: string) =>
  async (
    // action creator for getProductById
    dispatch: React.Dispatch<Actions>,
    loadingDispatch: React.Dispatch<LoadingActions>
  ) => {
    try {
      // dispatch start loading
      startLoading(loadingDispatch);
      // fetch result from API
      const result = await axios.get(`${API_URL}/product/${id}`);
      // dispatch stop loading
      stopLoading(loadingDispatch);
      // dispatch result with FETCH_PRODUCT type
      dispatch({
        type: FETCH_PRODUCT,
        payload: result.data.data,
      });
    } catch (error: any) {
      // dispatch stop loading
      stopLoading(loadingDispatch);
      // dispatch error data
      dispatch({
        type: FETCH_PRODUCT_ERROR,
        payload: error.response
          ? error.response.data
          : "Failed to connect with the server",
      });
    }
  };
