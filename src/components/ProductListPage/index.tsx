import React, { useContext, useEffect, useState } from "react";
import { LayoutHeader } from "../common/LayoutHeader/LayoutHeader";
import { LoadingContext } from "../../context/Loading";
import { ProductContext } from "../../context/Product";
import { getProductBySlug} from "../../actions/product";
import Button from "../common/Button/Button";
import { useParams } from "react-router";
import { ListProduct } from "./ListProduct";



export const ProductListPage: React.FC = () => {
  const {slug}: any = useParams();
  const { state: productState, dispatch: productDispatch } =
    useContext(ProductContext);
  const { dispatch: loadingDispatch } = useContext(LoadingContext);

  // const [productData, setProductData] = useState<Array<any>>([])

  const fetchProducts = async (slug: string) => {
    await getProductBySlug(slug)(productDispatch, loadingDispatch) 
  };

  useEffect(() => {
    fetchProducts(slug);
  }, [slug]);
  
  console.log(slug, "slugName")
  return (
    <>
      <LayoutHeader />
      <ListProduct
      productDetails = {productState.fetchProductSuccess}/>
    </>
  );
};
