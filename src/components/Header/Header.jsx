import React from "react";
import LeftHeader from "./LeftHeader";
import NavBar from "./NavBar";
import RightMenu from "./RightMenu";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <LeftHeader />
      <NavBar />
      <RightMenu />
    </header>
  );
};

export default Header;
