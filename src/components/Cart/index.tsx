import React, { useContext, useEffect } from "react";
import { LoadingContext } from "../../context/Loading"; // import loading context
import { getCart } from "../../actions/cart"; // import actions
import { CartContext } from "../../context/Cart"; //import cartContext
import { LayoutHeader } from "../common/LayoutHeader/LayoutHeader"; 
import { CartPage } from "./CartPage";

export const Cart: React.FC = () => {
  // renamed state and dispatch property as cartState and cartDispatch respectively
  const { state: cartState, dispatch: cartDispatch } = useContext(CartContext);
  const { dispatch: loadingDispatch } = useContext(LoadingContext);

  // function for fetching cart
  const fetchCart = async () => {
    // call getCart action
    await getCart()(cartDispatch, loadingDispatch)
  };

  // calling useEffect whenever fetchCart function is successful
  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div>
      <LayoutHeader />
      <CartPage cartItems = {cartState.fetchCartSuccess}/>
    </div>
  );
};
