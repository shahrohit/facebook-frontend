import React from "react";
import { CrossIcon } from "../Icons/CrossIcon";
import OptionIcon from "../Icons/OptionIcon";

const PostHeader = () => {
  let date = new Date();
  let time = `${date.toDateString()} at ${date.toLocaleTimeString()}`;
  return (
    <div className="postHeader">
      <div className="postHeaderProfile">
        <img src="/pp.jpg" height={45} width={45} alt="" />
        <div className="postHeaderProfileInfo">
          <p className="postHeaderProfileName">Rohit Shah</p>
          <div className="postHeaderProfileTime">{time}</div>
        </div>
      </div>
      <div className="postHeaderIcons">
        <OptionIcon />
        <CrossIcon />
      </div>
    </div>
  );
};

export default PostHeader;
