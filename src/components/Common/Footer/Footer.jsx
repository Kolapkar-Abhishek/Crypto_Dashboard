import React from "react";
import { Email, Facebook, Instagram, Twitter } from "@mui/icons-material";

import "./style.css";

const Footer = () => {
  const backToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <footer className="footer">
      <h2 className="logo" onClick={() => backToTop()}>
        CryptoTrade
      </h2>

      <div className="social-links">
        <a href="https://facebook.com">
          <Facebook className="social-link"/>
        </a>
        <a href="mailto:kolapkar109@gmail.com">
          <Email className="social-link"/>
        </a>
        <a href="https://www.twitter.com">
          <Twitter className="social-link"/>
        </a>
        <a href="https://www.instagram.com">
          <Instagram className="social-link"/>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
