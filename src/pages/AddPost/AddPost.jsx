import React from "react";
import { Button, Input } from "../../components";
import "./addPost.scss";

import regular from "../../assets/addPost/Vector.svg";
import video from "../../assets/addPost/mdi_video.svg";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addPost } from "../../store/slices/userAddSlice";

export const AddPost = () => {
  const post = useSelector((state) => state.post.array);
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleClick = (e) => {
    e.preventDefault()
    if (text.trim() === "") return; 
    const item = {
      text: text,
      id: post.length + 1,
    };

    dispatch(addPost(item));
    setText("");
  };

  return (
    <div className="container">
      <div className="addPost">
        <h1 className="addPost-title">Add Post</h1>
        <form className="addPost-form">
          <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            className="addPost-form-input"
            placeholder="user01, What`s new? "
          />
        </form>
        <div className="addPost-information">
          <div className="addPost-information-lenght">0/200</div>
          <div className="addPost-information-img">
            {/* <input type="file" /> */}
            <img src={regular} alt="" />
            <img src={video} alt="" />
          </div>
        </div>

        <div className="addPost-btn">
          <Button variant="addPost-btn" fullWidth onClick={handleClick}>
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};
