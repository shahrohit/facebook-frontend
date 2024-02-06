import React from "react";

const LeftNavHomeMenu = ({ iconSrc, title }) => {
  return (
    <div className="leftNavHomeMenu">
      <div>
        <img src={iconSrc} alt="" height={35} width={35} />
      </div>
      <p>{title}</p>
    </div>
  );
};

export default LeftNavHomeMenu;
