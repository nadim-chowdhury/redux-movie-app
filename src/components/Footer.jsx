import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <h3>
        &copy; {new Date().getFullYear()} All Rights Reserved By&nbsp;
        <a href="http://nadim-chowdhury.github.io/my-portfolio">
          Nadim Chowdhury
        </a>
      </h3>
    </div>
  );
};

export default Footer;
