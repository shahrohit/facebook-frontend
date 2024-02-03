import React from "react";
import LeftNavHome from "./LeftNavHome";
import HomeContent from "./HomeContent";
import RightContactHome from "./RightContactHome";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="leftNavHomesContainer">
        <LeftNavHome />
      </div>
      <div className="homeContentContainer">
        <HomeContent />
      </div>
      <div className="rightContactHomeContainer">
        <RightContactHome />
      </div>
    </div>
  );
};

export default Home;
