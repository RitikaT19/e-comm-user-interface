import React from "react";
import "../styles/listProduct.css";
import mobile from "../../assets/icons/mobile.jpeg";
import Button from "../common/Button/Button";
import { CartButton } from "../common/CartButton/Cart";
interface Props {
  productDetails: any;
  handleAddToCartButton: any;
}

export const ListProduct: React.FC<Props> = ({
  productDetails,
  handleAddToCartButton,
}) => {
  const buyNowButton = {};

  const addToCartButton = async (index: number) => {
    let _productDetails = {
      cartItems: [
        {
          product: productDetails[index]._id,
          price: productDetails[index].price,
          quantity: 1,
        },
      ],
    };
    await handleAddToCartButton(_productDetails);
  };

  return (
    <div className="product-main-container">
      {productDetails &&
        productDetails.length >= 0 &&
        productDetails?.map((product: any, index: number) => (
          <div className="product-main-div">
            <div key={index}>
              <CartButton cartIconClick={() => addToCartButton(index)} />
              <img className="image" src={mobile} alt="mobile" />

              <p id={"product-name"}>
                <b>Product Name:</b>
                {product.name}{" "}
              </p>
              <p id={"product-price"}>
                <b>Rs. {product.price}</b>
              </p>
              <p id={"product-description"}>
                <b>Description:</b>
                {product.description}
              </p>
            </div>
            <Button
              id="buy-now-button"
              value="Buy Now"
              handleClick={buyNowButton}
            />
          </div>
        ))}
    </div>
  );
};
