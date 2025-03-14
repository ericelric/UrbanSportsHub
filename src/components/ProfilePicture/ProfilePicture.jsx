import { useContext } from 'react';
import ProfileContext from '../../context/ProfileContext';
import { LuImage } from 'react-icons/lu';
import './ProfilePicture.css';

const ProfilePicture = ({ uploaderImage }) => {
  const { memberProfilePicture } = useContext(ProfileContext);

  // Use uploaded image first, fallback to memberProfilePicture
  const displayedImage = uploaderImage || memberProfilePicture;

  return (
    <>
      {displayedImage ? (
        <img
          className="profile-picture__image"
          src={displayedImage}
          alt="Member profile"
        />
      ) : (
        <div className="profile-picture__placeholder">
          <LuImage size={40} />
        </div>
      )}
    </>
  );
};

export default ProfilePicture;
