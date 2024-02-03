import React from "react";
import HomeIcon from "../Icons/HomeIcon";
import VideoIcon from "../Icons/VideoIcon";
import GamingIcon from "../Icons/GamingIcon";
import MarketplaceIcon from "../Icons/MarketplaceIcon";
import GroupsIcon from "../Icons/GroupsIcon";

import "./header.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbarChild">
        <span className="active">
          <HomeIcon />
        </span>
        <span>
          <VideoIcon />
        </span>
        <span>
          <MarketplaceIcon />
        </span>
        <span>
          <GroupsIcon />
        </span>
        <span id="gamingIcon">
          <GamingIcon />
        </span>
      </div>
    </div>
  );
};

export default NavBar;
