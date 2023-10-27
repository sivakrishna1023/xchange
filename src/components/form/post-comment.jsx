import React from "react";

const PostComment = () => {
  return (
    <>
      <div className="postbox__comment-form">
        <h3 className="postbox__comment-form-title">Write a comment</h3>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="postbox__comment-input">
                <input type="text" placeholder="Your Name" />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="postbox__comment-input">
                <input type="email" placeholder="Your Email" />
              </div>
            </div>
            <div className="col-xxl-12">
              <div className="postbox__comment-input">
                <input type="text" placeholder="Website" />
              </div>
            </div>
            <div className="col-xxl-12">
              <div className="postbox__comment-input">
                <textarea placeholder="Enter your comment ..."></textarea>
              </div>
            </div>
            <div className="col-xxl-12">
              <div className="postbox__comment-btn">
                <button type="submit" className="tp-btn">
                  Post Comment
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default PostComment;
