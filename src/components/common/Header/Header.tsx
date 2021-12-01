import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/header.css";

export const Header: React.FC = () => {
  return (
    <div className="header-main-div">
      <div className="header-title">
        <NavLink exact className="dashboard" to="/category/61974a3625fde0c069255ed5">
          E-commerce
        </NavLink>
      </div>
      <div id="header_buttons">
        <NavLink exact className="active_class" to="/cart">
          Cart
        </NavLink>
        <NavLink exact className="active_class" to="/sign-up">
          Sign-up
        </NavLink>
        <NavLink exact className="active_class" to="/login">
          Login
        </NavLink>
      </div>
    </div>
  );
};
