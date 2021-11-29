import React from "react";
import "../styles/listProduct.css";
import mobile from "../../assets/icons/mobile.jpeg";
import Button from "../common/Button/Button";
interface Props {
  productDetails: any;
}

const editProduct = {}

export const ListProduct: React.FC<Props> = ({ productDetails }) => {
  return (
    <div className="product-main-container">
      {productDetails &&
        productDetails.length >= 0 &&
        productDetails?.map((product: any, index: number) => (
          <div className="product-main-div">
            <div key={index}>
              <img className="image" src={mobile} alt="mobile" />

              <p id={"product-name"}><b>Product Name:</b>{product.name} </p>
              <p id={"product-price"}><b>Rs. {product.price}</b></p>
              <p id={"product-description"}>
                <b>Description:</b>{product.description}
              </p>
              
            </div>
            
          </div>
          
        ))}
    </div>
  );
};
