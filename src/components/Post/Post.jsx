import React from "react";
import PostHeader from "./PostHeader";
import PostDescription from "./PostDescription";
import PostImages from "./PostImages";
import PostFooter from "./PostFooter";

const Post = () => {
  return (
    <div className="post">
      <PostHeader />
      <PostDescription />
      <PostImages />
      <PostFooter />
    </div>
  );
};

export default Post;
