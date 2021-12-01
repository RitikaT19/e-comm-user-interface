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

export const getCart = () =>
async(
    dispatch: React.Dispatch<Actions>,
    loadingDispatch: React.Dispatch<LoadingActions>
)=>{
    try{
        startLoading(loadingDispatch)
        const result = await axios.get(`${API_URL}/cart/userCart`)
        console.log(result.data.data, "result from axios")
        dispatch({
            type: FETCH_CART,
            payload: result.data.data
        })
        stopLoading(loadingDispatch)
    }catch(error: any){
        stopLoading(loadingDispatch)
        dispatch({
            type: FETCH_CART_ERROR,
            payload: error.response
            ? error.response.data
            :"Failed to connect with the server"
        })
    }
}

export const addToCart = (data: any) =>
async(
    dispatch: React.Dispatch<Actions>,
    loadingDispatch: React.Dispatch<LoadingActions>
) =>{
    try{
        startLoading(loadingDispatch)
        const result = await axios.post(`${API_URL}/cart/`,data)
        stopLoading(loadingDispatch);
        dispatch({
            type: ADD_TO_CART,
            payload: result.data.message
        })
    }catch(error: any){
        stopLoading(loadingDispatch);
      dispatch({
        type: ADD_TO_CART_ERROR,
        payload: error.response
          ? error.response.data.message
          : "Failed to connect to the server",
      });
    }
}