import React from "react";
import "./post.css";
const WhatOnMind = () => {
  return (
    <div className="whatOnMind">
      <div className="whatOnMindTop">
        <img src="/pp.jpg" alt="" height={40} width={40} />
        <input type="text" placeholder="What's on your mind?" disabled />
      </div>
      <hr />
      <div className="whatOnMindBottom">
        <div>
          <img src="/live.png" height={30} width={30} alt="" />
          <p>Live Video</p>
        </div>
        <div>
          <img src="/photos.png" height={30} width={30} alt="" />
          <p>Photo</p>
        </div>
        <div>
          <img src="/feelings.png" height={30} width={30} alt="" />
          <p>Feelings</p>
        </div>
      </div>
    </div>
  );
};

export default WhatOnMind;
