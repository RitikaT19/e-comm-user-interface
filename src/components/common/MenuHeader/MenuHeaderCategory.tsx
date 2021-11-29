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
            {/* <a href={`/${item.slug}?cid = ${item._id}&type = ${item.type}`}> */}
              <p onClick={()=>history.push(`/category/${item.slug}`)} 
              id={"display-category-name"}>{item.name}</p>
            {/* </a> */}
          </div>
        ))}
    </div>
  );
};
