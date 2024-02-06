import React from "react";
import CreateStory from "../Story/CreateStory";
import Story from "../Story/Story";
import WhatOnMind from "../Post/WhatOnMind";
import Post from "../Post/Post";

import "./feed.css";
const stories = [
  {
    id: "0",
    src: "https://i.ibb.co/pLCs2xc/256450.jpg",
    name: "Abc Def",
  },
  {
    id: "1",
    src: "https://i.ibb.co/mRDWrXD/19182643.jpg",
    name: "Abcd Def",
  },
  {
    id: "2",
    src: "https://i.ibb.co/pfj4r9G/19231000.jpg",
    name: "Abcd Def",
  },
  {
    id: "3",
    src: "https://i.ibb.co/TckNBXC/17479670.jpg",
    name: "Abcd Def",
  },
  {
    id: "4",
    src: "https://i.ibb.co/Tq1ktf7/15471694.jpg",
    name: "Abcd Def",
  },
  {
    id: "5",
    src: "https://i.ibb.co/gyrdXkf/6140201.jpg",
    name: "Abc Def",
  },
];

const Feed = () => {
  return (
    <>
      {/* Story */}
      <section className="feedStorySection">
        <CreateStory />

        {/* <Story /> */}
        {stories.map((items) => {
          return <Story key={items.id} src={items.src} name={items.name} />;
        })}
      </section>
      {/* Whats on mind section */}

      {/* Post */}
      <section>
        <WhatOnMind />
      </section>

      <section className="feedPostSection">
        <Post />
        <Post />
      </section>
    </>
  );
};

export default Feed;
