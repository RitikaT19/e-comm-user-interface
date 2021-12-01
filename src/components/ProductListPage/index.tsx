import React, { useContext, useEffect } from "react";
import { LayoutHeader } from "../common/LayoutHeader/LayoutHeader";
import { LoadingContext } from "../../context/Loading";
import { ProductContext } from "../../context/Product";
import { getProductById } from "../../actions/product";
import { useParams } from "react-router";
import { ListProduct } from "./ListProduct";
import { CartContext } from "../../context/Cart";
import { addToCart } from "../../actions/cart";

export const ProductListPage: React.FC = () => {
  const { id }: any = useParams();
  // renamed state and dispatch property as productState and productDispatch respectively
  const { state: productState, dispatch: productDispatch } =
    useContext(ProductContext);
  const { dispatch: loadingDispatch } = useContext(LoadingContext);
  const { state: cartState, dispatch: cartDispatch } = useContext(CartContext);

  // function for fetching product by id
  const fetchProducts = async (id: string) => {
    // call getProductById action
    await getProductById(id)(productDispatch, loadingDispatch);
  };

  // call useEffect whenever fetchProducts function is successful
  useEffect(() => {
    fetchProducts(id);
  }, [id]);

  // function for adding product to the cart
  const addProductToCart = async (data: any) => {
    // call addToCart action
    await addToCart(data)(cartDispatch, loadingDispatch).then(() => {
      // when product is added to the cart, gives a alert message
      alert("Product added to the cart!");
    });
  };

  return (
    <>
      <LayoutHeader />
      <ListProduct
        productDetails={productState.fetchProductSuccess}
        handleAddToCartButton={addProductToCart}
      />
    </>
  );
};
