import React, { useEffect, useState } from "react";
import { Switch } from "@mui/material";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import Drawer from "@mui/material/Drawer";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

const MobileDrawer = () => {
  const [flag, setFlag] = useState(false);
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
    toast.success("Theme Changed!");
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
    <div className="drawer-wrapper">
      <MenuRoundedIcon className="link" onClick={() => setFlag(true)} />
      <Drawer anchor={"right"} open={flag} onClose={() => setFlag(false)}>
        <div className="mobile-drawer">
          <NavLink to="/">
            <p className="link">Dashboard</p>
          </NavLink>
          <NavLink to="/compare">
            <p className="link">Compare</p>
          </NavLink>
          <NavLink to="/watchlist">
            <p className="link">Watchlist</p>
          </NavLink>
          <div className="switch">
            <p className="link">{darkMode ? "Light Mode" : "Dark Mode"}</p>
            <Switch
              checked={darkMode}
              onClick={() => {
                changeMode();
              }}
            />
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default MobileDrawer;
