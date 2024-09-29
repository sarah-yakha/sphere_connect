



import { Input } from "../../../components";
import { auth } from "../../../firebase";
import "./ModalProfile.scss";
export const ModalProfile = ({ isOpen, toggleModal }) => {
  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="profile-picture-modal"
            />
            <div className="profile-foto">
              <div className="profile-user">
                <h3>
                  <strong>{auth.currentUser.email}</strong>
                </h3>
              </div>
              <div className="profile-a">
                <a href="https://via.placeholder.com/150">@user</a>
              </div>
            </div>
            <form className="modal-form">
              <label className="modal-form-label">
                <Input type="text" name="fullName" placeholder="Full Name" />
                <Input type="text" name="mobile" placeholder="Mobile" />
                <Input type="text" name="address" placeholder="Address" />
                <Input type="text" name="website" placeholder="Website" />
                <textarea
                  className="modal-form-label-textarea"
                  name="story"
                  placeholder="Story"
                ></textarea>
                <Input type="text" name="gender" placeholder="gender" />
                <label>
                  <input
                    type="checkbox"
                    name="hideAccount"
                    className="checkbox"
                  />
                  Hide accoun
                </label>
              </label>
              <button type="submit">Save</button>
              <button onClick={toggleModal} className="close-modal-btn">
                Close
              </button>

            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalProfile;
