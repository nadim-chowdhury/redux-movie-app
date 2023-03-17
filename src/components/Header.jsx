import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <h1>Movies App</h1>
        </Link>
      </div>
      <div className="user-image">
        <i className="fa-solid fa-user"></i>
      </div>
    </div>
  );
};

export default Header;
