import React, { useContext, useEffect} from "react";
import { MenuHeaderCategory } from "./MenuHeaderCategory";
import { CategoryContext } from "../../../context/Category";
import { LoadingContext } from "../../../context/Loading";
import { getCategory } from "../../../actions/category";
import "../../styles/menu-header.css"

export const MenuHeader: React.FC = () => {
  const { state: categoryState, dispatch: categoryDispatch } =
    useContext(CategoryContext);
  const { dispatch: loadingDispatch } = useContext(LoadingContext);

  const fetchCategory = async () => {
    await getCategory()(categoryDispatch, loadingDispatch).then(() => {
      console.log(categoryState.fetchCategorySuccess);
    });
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <div className="home-page-container">
      <MenuHeaderCategory categoryInfo={categoryState.fetchCategorySuccess} />
    </div>
  );
};
