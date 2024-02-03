import React from "react";
// import "./story.css";
const Story = ({ src, name }) => {
  return (
    <div className="story">
      <img src={src} alt="" className="storyImage" />

      <div className="storyProfile">
        <img src={src} alt="" height={30} width={30} className="" />
      </div>
      <p className="stroyName">{name}</p>
    </div>
  );
};

export default Story;
