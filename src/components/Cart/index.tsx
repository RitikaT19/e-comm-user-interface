import React, { useContext, useEffect } from "react";
import { LoadingContext } from "../../context/Loading";
import { getCart } from "../../actions/cart";
import { CartContext } from "../../context/Cart";
import Button from "../common/Button/Button";
import { useParams } from "react-router";
import { LayoutHeader } from "../common/LayoutHeader/LayoutHeader";
import { CartPage } from "./CartPage";

export const Cart: React.FC = () => {
  const { id }: any = useParams();
  const { state: cartState, dispatch: cartDispatch } = useContext(CartContext);
  const { dispatch: loadingDispatch } = useContext(LoadingContext);

  const fetchCart = async () => {
    await getCart()(cartDispatch, loadingDispatch).then(() => {
      console.log(cartState.addToCartSuccess, "from index");
    });
  };
  useEffect(() => {
    fetchCart();
  }, []);
  return (
    <div>
      <LayoutHeader />
      <Button id="cart" value="Cart" handleClick={fetchCart} />
      <CartPage cartItems = {cartState.addToCartSuccess}/>
    </div>
  );
};
