import React from "react";
import "../../styles/button.css"
interface Props {
  value: string;
  handleClick: any;
  id: string;
}

 const Button: React.FC<Props> = ({ id, handleClick, value }) => {
  return (
    <button className="button" 
    onClick={handleClick}
    id={id + "_element"}>
      {value}
      
    </button>
  );
};
export default Button;
