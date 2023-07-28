import React from "react";
import "./maincomp.css";
import Banner from "./Banner";
import Slide from "./Slide";

const MainComp = () => {
  return (
    <div className="home_section">
      <div className="banner_part">
        <Banner />
        <Slide />
      </div>
    </div>
  );
};

export default MainComp;
