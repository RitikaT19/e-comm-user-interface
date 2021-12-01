import React from "react";
import { useHistory } from "react-router";
import "../../styles/menu-header-category.css";
interface Props {
  categoryInfo: any;
}
export const MenuHeaderCategory: React.FC<Props> = ({ categoryInfo }) => {
  const history = useHistory();
  return (
    <div className="display-category-container">
      {categoryInfo &&
        categoryInfo.length > 0 &&
        categoryInfo?.map((item: any, index: number) => (
          <div key={index}>
              <p onClick={()=>history.push(`/category/${item._id}`)} 
              id={"display-category-name"}>{item.name}</p>
          </div>
        ))}
    </div>
  );
};
