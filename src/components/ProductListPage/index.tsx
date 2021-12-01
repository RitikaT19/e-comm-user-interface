import React, { useContext, useEffect, useState } from "react";
import { LayoutHeader } from "../common/LayoutHeader/LayoutHeader";
import { LoadingContext } from "../../context/Loading";
import { ProductContext } from "../../context/Product";
import { getProductById} from "../../actions/product";
import Button from "../common/Button/Button";
import { useParams } from "react-router";
import { ListProduct } from "./ListProduct";
import {CartContext} from "../../context/Cart"
import {addToCart} from "../../actions/cart"



export const ProductListPage: React.FC = () => {
  const {id}: any = useParams();
  const { state: productState, dispatch: productDispatch } =
    useContext(ProductContext);
  const { dispatch: loadingDispatch } = useContext(LoadingContext);
  const { state: cartState, dispatch: cartDispatch } =
  useContext(CartContext);

  // const [productData, setProductData] = useState<Array<any>>([])

  const fetchProducts = async (id: string) => {
    await getProductById(id)(productDispatch, loadingDispatch) 
  };

  useEffect(() => {
    fetchProducts(id);
  }, [id]);
  
  const addProductToCart = async(data: any) =>{
    await addToCart(data)(cartDispatch, loadingDispatch).then(()=>{
      alert("Product added to the cart!")
    })
  }
  console.log(id, "slugName")
  return (
    <>
    {console.log(productState.fetchProductSuccess,"product detailss")}
      <LayoutHeader />
      <ListProduct
      productDetails = {productState.fetchProductSuccess}
      handleAddToCartButton = {addProductToCart}/>
    </>
  );
};
