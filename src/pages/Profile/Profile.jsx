<<<<<<< HEAD
import React, { useState } from "react";
import { Button } from "../../components/Forms";
import "./profile.scss";
import { ModalProfile } from "./Modal-profile/ModalProfile";
import { useDispatch, useSelector } from "react-redux";
import { CardPost } from "../../components/CardPost/CardPost";
=======
import React, { useState } from 'react';
import {Button} from '../../components/Forms'
import './profile.scss'
import {ModalProfile} from './Modal-profile/ModalProfile'
import { auth } from '../../firebase';
>>>>>>> upstream/main

export const Profile = () => {
  const posts = useSelector((state) => state.post.array);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false); // Состояние для модального окна

  // const posts = [
  //   'https://via.placeholder.com/150',
  //   'https://via.placeholder.com/150',
  //   'https://via.placeholder.com/150',
  //   'https://via.placeholder.com/150',
  //   'https://via.placeholder.com/150',
  //   'https://via.placeholder.com/150',
  //   'https://via.placeholder.com/150',
  //   'https://via.placeholder.com/150',
  //   'https://via.placeholder.com/150',
  // ];
  // Функция для открытия/закрытия модального окна
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="profile-picture"
        />
        <div className="profile-info">
          <div className="profile-info-top">
            <div className="profile-stats">
              <div className="stat">
                <strong>9</strong> posts
              </div>
              <div className="stat">
                <strong>455</strong> followers
              </div>
              <div className="stat">
                <strong>102</strong> following
              </div>
            </div>
            <Button
              variant="profileBtn"
              className="edit-profile-btn"
              onClick={toggleModal}
            >
              Edit Profile
            </Button>
          </div>
          <div className="profile-bio">
            <div>
<<<<<<< HEAD
              <h3>
                <strong>User01</strong>
              </h3>
              <a href="https://via.placeholder.com/150">@user</a>
=======
            <h3><strong>{auth.currentUser.email}</strong></h3>
            <a href="https://via.placeholder.com/150">@{auth.currentUser.email}</a>
>>>>>>> upstream/main
            </div>
            <div>
              <p>
                Давно выяснено, что при оценке дизайна и композиции читаемый
                текст мешает сосредоточиться. Lorem Ipsum используют
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="posts-grid">
        {posts.map((post) => (
          <CardPost isProfile={true} post={post}/>
        ))}
      </div>
      <ModalProfile isOpen={isOpen} toggleModal={toggleModal} />
    </div>
  );
};

export default Profile;
