import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input } from "../../components";
import "./home.scss";

import logoImg from "../../assets/home/Rectangle 82.png";

import likeImg from "../../assets/home/like.svg";
import message from "../../assets/home/message.svg";
import favorites from "../../assets/home/favorites.svg";

export const Home = () => {
  const posts = useSelector((state) => state.post.array);

  return (
    <>
      <div className="container">
        <div className="home">
          <div className="home-img">
            <img src={logoImg} alt="" />
          </div>

          <div className="home-lower">
            <div className="home-lower-info">
              <div className="home-lower-info-like">
                <div>
                  <img src={likeImg} alt="" /> <span>24</span>
                </div>

                <div>
                  <img src={message} alt="" /> <span>24</span>
                </div>
              </div>
              <div className="home-lower-info-favorites">
                <img src={favorites} alt="" />
              </div>
            </div>
            <div className="home-lower-descriptions">
              {posts.map((post) => (
                <li>
                  <span>user1</span>
                  {post.text}
                </li>
              ))}
            </div>
            <div className="home-lower-hashtag">
              <span>#tamerlan,</span>
              <span>#tamerlan,</span>
              <span>#tamerlan,</span>
              <span>#tamerlan,</span>
              <span>#tamerlan,</span>
            </div>
            <div className="home-lower-comments">
              <li className="home-lower-comments-comment">
                user2: Lorem Ipsum - это текст-"рыба", часто используемый
              </li>
              <li className="home-lower-comments-comment">
                user2: Lorem Ipsum - это текст-"рыба", часто используемый
              </li>{" "}
              <li className="home-lower-comments-comment">
                user2: Lorem Ipsum - это текст-"рыба"asddddddddddddddd ddddddddd
              </li>
            </div>
          </div>

          <form action="" className="home-form">
            <Input
              className="home-form-input"
              placeholder="Введите коммент"
              type="text"
            />
            <Button variant="homeBtn">Add</Button>
          </form>
        </div>
      </div>
    </>
  );
};
