import React, { useState } from "react";
import HomeIcon from "../Icons/HomeIcon";
import VideoIcon from "../Icons/VideoIcon";
import GamingIcon from "../Icons/GamingIcon";
import MarketplaceIcon from "../Icons/MarketplaceIcon";
import GroupsIcon from "../Icons/GroupsIcon";

import "./header.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [nav, setNav] = useState("home");
  return (
    <div className="navbar">
      <div className="navbarChild">
        <Link to={"/"} className="navlink">
          <span
            className={`${nav === "home" && "active"}`}
            onClick={() => setNav("home")}
          >
            <HomeIcon />
          </span>
        </Link>
        <Link to={"/watch"} className="navlink">
          <span
            className={`${nav === "watch" && "active"}`}
            onClick={() => setNav("watch")}
          >
            <VideoIcon />
          </span>
        </Link>

        <Link to={"/marketplace"} className="navlink">
          <span
            className={`${nav === "marketplace" && "active"}`}
            onClick={() => setNav("marketplace")}
          >
            <MarketplaceIcon />
          </span>
        </Link>

        <Link to={"/groups"} className="navlink">
          <span
            className={`${nav === "groups" && "active"}`}
            onClick={() => setNav("groups")}
          >
            <GroupsIcon />
          </span>
        </Link>

        <Link to={"/gaming"} className="navlink" id="gamingIcon">
          <span
            className={`${nav === "gaming" && "active"}`}
            onClick={() => setNav("gaming")}
          >
            <GamingIcon />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
