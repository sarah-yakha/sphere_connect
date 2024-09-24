import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navList.scss";

import Home from "../../../assets/Navbar/Vector.svg";
import direct from "../../../assets/Navbar/direct.svg";
import explore from "../../../assets/Navbar/explore.svg";
import addPost from "../../../assets/Navbar/AddPost.svg";
import faworites from "../../../assets/Navbar/favorite.svg";
import profile from "../../../assets/Navbar/Profil.svg";
import { Button } from "../../Forms";
import { Modal } from "../../Modal/Modal";

const NavUser = () => {
  const [modal, setModal] = useState(false);

  const handleClick = () => {
    setModal(true);
  };
  return (
    <div className="navUser">
      <ul className="navUser-list">
        <li className="navUser-list-li">
          <Link to="/">
            <img src={Home} alt="" />
          </Link>
        </li>
        <li className="navUser-list-li">
          <Link to="/Direct">
            <img src={direct} alt="" />
          </Link>
        </li>
        <li className="navUser-list-li">
          <Link to="/Explore">
            <img src={explore} alt="" />
          </Link>
        </li>
        <li className="navUser-list-li">
          <Link to="/addPost">
            <img src={addPost} alt="" />
          </Link>
        </li>
        <li className="navUser-list-li">
          <Link to="/Favorites">
            <img src={faworites} alt="" />
          </Link>
        </li>
        <li className="navUser-list-li">
          <Link to="/Profile">
            <img src={profile} alt="" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavUser;
