import axios from "axios";
import { startLoading, stopLoading } from "./loading";
import { Actions as LoadingActions } from "../reducers/loading";
import {
  ADD_TO_CART,
  ADD_TO_CART_ERROR,
  FETCH_CART,
  FETCH_CART_ERROR,
} from "../actions/Types";
import { API_URL } from "./serverConnection";
import { Actions } from "../reducers/cart";
import React from "react";

// function for fetching cart
export const getCart =
  () =>
  // Action creator for fetching cart
  async (
    dispatch: React.Dispatch<Actions>,
    loadingDispatch: React.Dispatch<LoadingActions>
  ) => {
    try {
      // dispatch start loading
      startLoading(loadingDispatch);
      // fetching result from API
      const result = await axios.get(`${API_URL}/cart/userCart`);
      // dispatxh stop loading
      stopLoading(loadingDispatch);
      // dispatch the result
      dispatch({
        type: FETCH_CART,
        payload: result.data.data,
      });
    } catch (error: any) {
      // if error, dispatch stop loading
      stopLoading(loadingDispatch);
      // dispatch the error data
      dispatch({
        type: FETCH_CART_ERROR,
        payload: error.response
          ? error.response.data
          : "Failed to connect with the server",
      });
    }
  };

// function for adding products into the cart
export const addToCart =
  (data: any) =>
  // Actions creator for adding products to the cart
  async (
    dispatch: React.Dispatch<Actions>,
    loadingDispatch: React.Dispatch<LoadingActions>
  ) => {
    try {
      // dispatch start loading
      startLoading(loadingDispatch);
      // fetch result from the API
      const result = await axios.post(`${API_URL}/cart/`, data);
      // dispatch stop loading
      stopLoading(loadingDispatch);
      // dispatch result
      dispatch({
        type: ADD_TO_CART,
        payload: result.data.message,
      });
    } catch (error: any) {
      // in case of error, stop loading
      stopLoading(loadingDispatch);
      // dispatch error data
      dispatch({
        type: ADD_TO_CART_ERROR,
        payload: error.response
          ? error.response.data.message
          : "Failed to connect to the server",
      });
    }
  };
