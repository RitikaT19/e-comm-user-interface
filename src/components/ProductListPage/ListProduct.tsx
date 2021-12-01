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

  // functionality for when add to cart icon is pressed
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
      {/* checking the existance of product details */}
      {productDetails &&
        // checking the length of the product details, should be greater than or equal to 0
        productDetails.length >= 0 &&
        // mapping product details
        productDetails?.map((product: any, index: number) => (
          <div className="product-main-div">
            <div key={index}>
              {/* cart icon button for adding products into the cart */}
              <CartButton cartIconClick={() => addToCartButton(index)} />
              <img className="image" src={mobile} alt="mobile" />
              {/* printing product name */}
              <p id={"product-name"}>
                <b>Product Name:</b>
                {product.name}{" "}
              </p>
              {/* printing product price */}
              <p id={"product-price"}>
                <b>Rs. {product.price}</b>
              </p>
              {/* printing product description */}
              <p id={"product-description"}>
                <b>Description:</b>
                {product.description}
              </p>
            </div>
            {/* Button for buying the product */}
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
