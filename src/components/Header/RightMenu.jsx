import React from "react";
import MenuIcon from "../Icons/MenuIcon";
import MessengerIcon from "../Icons/MessengerIcon";
import NotificationIcon from "../Icons/NotificationIcon";
import UserIcon from "../Icons/UserIcon";

const RightMenu = () => {
  return (
    <div className="rightMenu">
      <div className="rightMenuChild">
        <span id="menuIcon">
          <MenuIcon />
        </span>

        <span>
          <MessengerIcon />
        </span>

        <span>
          <NotificationIcon />
        </span>
        <span>
          <UserIcon />
        </span>
      </div>
    </div>
  );
};

export default RightMenu;
