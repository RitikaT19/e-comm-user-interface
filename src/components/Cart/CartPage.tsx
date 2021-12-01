import React from "react";
import "../styles/cart.css"
import mobile from "../../assets/icons/mobile.jpeg";
interface Props {
  cartItems: any;
}
export const CartPage: React.FC<Props> = ({ cartItems }) => {
  return (
    <div className="cart-main-container">
      {cartItems && (
        <div className="cart-main-div">
          <div key={"index"}>
            {/* product image */}
          <img className="image" src={mobile} alt="mobile" />
            {/* for printing name of the product */}
            <p id="product-name">{cartItems.name}</p>
            {/* for printing price of the product */}
            <p id="product-price"><b>Price: </b>Rs.{cartItems.price}</p>
          </div>
        </div>
      )}
    </div>
  );
};
