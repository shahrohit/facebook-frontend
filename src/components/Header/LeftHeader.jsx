import React from "react";
import SearchIcon from "../Icons/SearchIcon";

const LeftHeader = () => {
  return (
    <div className="leftHeader">
      <div className="leftHeaderLogo">
        <img src="/logo.png" alt="" />
      </div>
      <div className="leftHeaderSearchBox">
        <SearchIcon />
        <input type="text" name="" id="" placeholder="Search Facebook" />
      </div>
    </div>
  );
};

export default LeftHeader;
