import ProfilePicture from '../ProfilePicture/ProfilePicture';
import './ModalProfilePicture.css';

const ModalProfilePicture = () => {
  return (
    <div className="modal-profile-picture__wrapper">
      <div className="modal-profile-picture__border-circle"></div>
      <div className="modal-profile-picture">
        <ProfilePicture />
      </div>
      <div className="modal-profile-picture__circle-dashed">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
          <circle
            cx="249.79"
            cy="249.79"
            r="244.36"
            fill="none"
            stroke="#fff"
            strokeWidth="7"
            strokeLinecap="round"
            strokeDasharray="44.6641,73.4476"
          />
        </svg>
      </div>
      <div className="modal-profile-picture__circle-animated">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
          <circle
            cx="249.79"
            cy="249.79"
            r="244.36"
            fill="none"
            stroke="#fff"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray="0.9906,29.7184"
          />
        </svg>
      </div>
    </div>
  );
};

export default ModalProfilePicture;
