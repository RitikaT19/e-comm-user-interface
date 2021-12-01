import React from "react";
import cart from "../../../assets/icons/cartIcon.png"


interface Props {
  cartIconClick: any;
}
export const CartButton: React.FC<Props> = ({ cartIconClick }) => {
  return (
    <div className="cart-button" onClick={cartIconClick}>
      {/* cart icon */}
      <img className="cart-icon" src={cart} alt="cart" />
    </div>
  );
};
