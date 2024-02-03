import React from "react";

const Contacts = ({ name, src }) => {
  return (
    <div className="homeContactBox">
      <div className="homeContactProfile">
        <img src={src} height={35} width={35} alt="" />
        <div className="online"></div>
      </div>
      <div className="homeContactName">{name}</div>
    </div>
  );
};

export default Contacts;
