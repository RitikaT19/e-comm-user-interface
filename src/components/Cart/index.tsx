import React, { useContext, useEffect } from "react";
import { LoadingContext } from "../../context/Loading";
import { getCart } from "../../actions/cart";
import { CartContext } from "../../context/Cart";
import Button from "../common/Button/Button";
import { useParams } from "react-router";
import { LayoutHeader } from "../common/LayoutHeader/LayoutHeader";
import { CartPage } from "./CartPage";

export const Cart: React.FC = () => {
  const { state: cartState, dispatch: cartDispatch } = useContext(CartContext);
  const { dispatch: loadingDispatch } = useContext(LoadingContext);

  // function for fetching cart
  const fetchCart = async () => {
    await getCart()(cartDispatch, loadingDispatch)
  };

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
