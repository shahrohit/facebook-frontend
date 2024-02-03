import React from "react";
import "../Story/story.css";
import PlusIcon from "../Icons/PlusIcon";
const CreateStory = () => {
  return (
    <div className="createStory">
      <div className="createStoryImgContainer">
        <img src="/pp.jpg" alt="" />
      </div>
      <p>Create Story</p>
      <div className="createStoryPlus">
        <PlusIcon />
      </div>
    </div>
  );
};

export default CreateStory;
