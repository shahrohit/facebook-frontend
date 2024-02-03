import React from "react";

const PostFooter = () => {
  return (
    <div className="postFooter">
      <div className="like">
        <img src="/like.png" alt="" />
        <p>Like</p>
      </div>
      <div className="comment">
        <img src="/comment.png" alt="" />
        <p>Comment</p>
      </div>
      <div className="share">
        <img src="/share.png" alt="" />
        <p>Share</p>
      </div>
    </div>
  );
};

export default PostFooter;
