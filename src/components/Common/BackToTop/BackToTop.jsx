import React from "react";
import { NorthRounded } from "@mui/icons-material";

import "./style.css";

const BackToTop = () => {
  let button = document.getElementById("btn");

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      button.style.display = "flex";
    } else {
      button.style.display = "none";
    }
  }

  const BackToTopFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div className="top-btn" id="btn" onClick={() => BackToTopFunction()}>
      <NorthRounded className="top-icon" sx={{ fontSize: "2rem" }} />
    </div>
  );
};

export default BackToTop;
