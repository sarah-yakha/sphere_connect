
import "./ModalProfile.scss";
export const ModalProfile = ({ isOpen, toggleModal }) => {

  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
          <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="profile-picture-modal"
          />
            <div className="profile-foto">
          
          <div className="profile-user">
         <h3><strong>User01</strong></h3>
         </div>
         <div className="profile-a">
         <a href="https://via.placeholder.com/150">@user</a>
         </div>
         </div>
            <form>
              <label>
                <input type="text" name="fullName" placeholder="Full Name" />
              </label>
              <label>
                <input type="text" name="mobile" placeholder="Mobile" />
              </label>
              <label>
                <input type="text" name="address" placeholder="Address" />
              </label>
              <label>
                <input type="text" name="website" placeholder="Website" />
              </label>
              <label>
                <textarea name="story" placeholder="Story"></textarea>
              </label>
              <label>
              <input type="text" name="gender" placeholder="gender" />
              </label>
              <label className="checkbox-container">
                <input type="checkbox" name="hideAccount" className="checkbox"/> Hide accoun
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
