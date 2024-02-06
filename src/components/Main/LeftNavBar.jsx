import React from "react";
import LeftNavHomeMenu from "./LeftNavBarMenu";

const menu = [
  { iconSrc: "/friends.png", title: "Friends" },
  { iconSrc: "/watch.png", title: "Watch" },
  { iconSrc: "/memories.png", title: "memories" },
  { iconSrc: "/saved.png", title: "Saved" },
  { iconSrc: "/groups.png", title: "Groups" },
  { iconSrc: "/market.png", title: "Marketplace" },
  { iconSrc: "/playgame.png", title: "Play Games" },
  { iconSrc: "/messenger.svg", title: "Messenger" },
  { iconSrc: "/pages.png", title: "Page" },
  { iconSrc: "/gaming.png", title: "Gaming Video" },
];

const LeftNavBar = () => {
  return (
    <div className="leftNavHome">
      {menu.map((items) => {
        return (
          <LeftNavHomeMenu
            key={items.title}
            iconSrc={items.iconSrc}
            title={items.title}
          />
        );
      })}
    </div>
  );
};

export default LeftNavBar;
