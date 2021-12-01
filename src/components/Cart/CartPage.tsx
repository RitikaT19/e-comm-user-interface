import React from "react";

interface Props {
  cartItems: any;
}
export const CartPage: React.FC<Props> = ({ cartItems }) => {

  console.log("from cart", cartItems)
  return (
    <div className="cart-main-container">
      {cartItems &&
        cartItems.length >= 0 &&
        cartItems[0]?.map((items: any, index: number) => (
          <div className="cart-main-div">
            <div key={index}>
                <p id = "product-name">{items.data}</p>
                <p id = "product-price">{items.price}</p>
                <p id = "product-quantity">{items.quantity}</p>
            </div>
          </div>
        ))}
    </div>
  );
};
