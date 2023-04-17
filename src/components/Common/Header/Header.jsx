import React, { useState, useEffect } from "react";
import { Switch } from "@mui/material";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

import Button from "../Button/Button";
import MobileDrawer from "./MobileDrawer";

import "./style.css";

const Header = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") == "dark" ? true : false
  );

  useEffect(() => {
    if (localStorage.getItem("theme") == "dark") {
      setDark();
    } else {
      setLight();
    }
  }, []);

  const changeMode = () => {
    setDarkMode(!darkMode);
    toast.success("Theme changed!");
    const mode = localStorage.getItem("theme");
    if (mode == "dark") {
      setLight();
    } else {
      setDark();
    }
  };

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };

  return (
    <div className="header">
      <a href="/">
        <h1>
          CryptoTrade<span style={{ color: "var(--blue)" }}></span>
        </h1>
      </a>

      <div className="links-flex">
        <Switch checked={darkMode} onClick={() => changeMode()} />
        <NavLink to="/compare">
          <p className="link">Compare</p>
        </NavLink>
        <NavLink to="/watchlist">
          <p className="link">Watchlist</p>
        </NavLink>
        <NavLink to="/">
          <Button text="Dashboard" />
        </NavLink>
      </div>
      <MobileDrawer />
    </div>
  );
};

export default Header;
