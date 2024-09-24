import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input } from "../../components";

import likeImg from "../../assets/home/like.svg";
import message from "../../assets/home/message.svg";
import favorites from "../../assets/home/favorites.svg";

import './cardPost.scss'

export const CardPost = ({ item }) => {
  const posts = useSelector((state) => state.post.array);
  return (
    <div className="CardPost">
      <div className="CardPost-img">
        <img src={item.img} alt="" />
      </div>

      <div className="CardPost-lower">
        <div className="CardPost-lower-info">
          <div className="CardPost-lower-info-like">
            <div>
              <img src={likeImg} alt="" /> <span>24</span>
            </div>

            <div>
              <img src={message} alt="" /> <span>24</span>
            </div>
          </div>
          <div className="CardPost-lower-info-favorites">
            <img src={favorites} alt="" />
          </div>
        </div>
        <div className="CardPost-lower-descriptions">
          {posts.map((post) => (
            <li>
              <span>user1</span>
              {post.text}
            </li>
          ))}
        </div>
        <div className="CardPost-lower-hashtag">
          <span>#tamerlan,</span>
          <span>#tamerlan,</span>
          <span>#tamerlan,</span>
          <span>#tamerlan,</span>
          <span>#tamerlan,</span>
        </div>
        {/* <div className="CardPost-lower-comments">
                  <li className="CardPost-lower-comments-comment">
                    user2: Lorem Ipsum - это текст-"рыба", часто используемый
                  </li>
                  <li className="CardPost-lower-comments-comment">
                    user2: Lorem Ipsum - это текст-"рыба", часто используемый
                  </li>{" "}
                  <li className="CardPost-lower-comments-comment">
                    user2: Lorem Ipsum - это текст-"рыба"asddddddddddddddd
                    ddddddddd
                  </li>
                </div> */}
      </div>

      <form action="" className="CardPost-form">
        <Input
          className="CardPost-form-input"
          placeholder="Введите коммент"
          type="text"
        />
        <Button variant="CardPostBtn">Add</Button>
      </form>
    </div>
  );
};
