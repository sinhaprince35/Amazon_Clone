import React from "react";
import "./maincomp.css";
import Banner from "./Banner";
import Slide from "./Slide";

const MainComp = () => {
  return (
    <div className="home_section">
      <div className="banner_part">
        <Banner />
      </div>
      <div className="slide_part">
        <div className="left_slide">
          <Slide title="Deal of the Day" />
        </div>
        <div className="right_slide">
          <h4>Great Freedom Sale</h4>
          <img src="./great.jpg" alt="side image" />
          <a href="#">See More</a>
        </div>
      </div>
      <Slide title="Today's Deal" />
      <div className="center_img">
        <img src="./sixer.jpg" alt="center image"/>
      </div>
      <Slide title="Upto 80% off" />
      <Slide title="Best Seller" />
    </div>
  );
};

export default MainComp;
