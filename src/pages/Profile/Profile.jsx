import {Button} from '../../components/Forms'
import './profile.scss'

export const Profile = () => {
  const posts = [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
  ];

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
          <Button variant='profileBtn' className="edit-profile-btn">Edit Profile</Button>
          </div>
          <div className="profile-bio">
            <div>
            <h3><strong>User01</strong></h3>
            <a href="https://via.placeholder.com/150">@user</a>
            </div>
            <div>
            <p>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют</p>
          </div>
          </div>
        </div>
      </div>

      <div className="posts-grid">
        {posts.map((post, index) => (
          <img key={index} src={post} alt={`Post ${index}`} className="post-image" />
        ))}
      </div>
    </div>
  );
};

export default Profile;