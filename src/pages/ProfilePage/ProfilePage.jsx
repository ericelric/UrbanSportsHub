import { useContext, useState } from 'react';
import ProfileContext from '../../context/ProfileContext';
import CheckInContext from '../../context/CheckInContext';
import UploadProfilePicture from '../../components/UploadProfilePicture/UploadProfilePicture';
import FlashMessage from '../../components/FlashMessage/FlashMessage';
import Button from '../../components/Button/Button';
import useProfilePicture from '../../hooks/useProfilePicture';
import { generateMemberId } from '../../utils/generateMemberId';
import { formatDateAndTime } from '../../utils/timeUtils';
import { LuImageOff } from 'react-icons/lu';
import './ProfilePage.css';

const ProfilePage = () => {
  const {
    memberName,
    memberId,
    memberProfilePicture,
    handleSave,
    deleteImage,
  } = useContext(ProfileContext);
  const { checkInTime, checkInObject, resetCheckIn } =
    useContext(CheckInContext);

  const { image, handleImageUpload, resetImage, error } = useProfilePicture();
  const [localName, setLocalName] = useState(memberName);
  const [localMemberId, setLocalMemberId] = useState(memberId);

  const [flashMessage, setFlashMessage] = useState('');

  // Use uploaded image first, fallback to existing profile picture
  const profileImageToSave = image || memberProfilePicture;

  // Function to generate a random member ID
  const handleGenerateRandomId = () => {
    const newId = generateMemberId();
    setLocalMemberId(newId);
  };

  // Delete profile picture
  const handleDeleteImage = () => {
    deleteImage();
    resetImage();
  };

  // Handle save and show flash message
  const handleSaveChanges = (e) => {
    e.preventDefault();
    handleSave(localName, localMemberId, profileImageToSave);
    setFlashMessage('Changes saved successfully.');
  };

  // Handle reset check-in time and show flash message
  const handleResetCheckIn = () => {
    resetCheckIn();
    setFlashMessage('Check-in data successfully reset.');
  };

  return (
    <div className="profile-page">
      {flashMessage && (
        <FlashMessage
          message={flashMessage}
          onClose={() => setFlashMessage('')}
        />
      )}

      <div className="profile__container">
        <div className="profile__card profile__card--first">
          {profileImageToSave && (
            <button
              className="profile__delete-btn"
              onClick={handleDeleteImage}
              title="Delete profile image"
              aria-label="Delete profile image"
            >
              <LuImageOff />
            </button>
          )}
          <UploadProfilePicture
            uploaderImage={profileImageToSave}
            handleImageUpload={handleImageUpload}
            handleDeleteImage={handleDeleteImage}
            error={error}
          />

          <form onSubmit={(e) => handleSaveChanges(e)}>
            <div className="profile__input-group">
              <label htmlFor="name">Member Name:</label>
              <input
                id="name"
                type="text"
                placeholder="e.g., Yamada Taro"
                value={localName}
                onChange={(e) => setLocalName(e.target.value)}
                required
              />
            </div>

            <div className="profile__input-group">
              <label htmlFor="id">Member ID:</label>
              <input
                id="id"
                type="text"
                placeholder="e.g., 00000000"
                value={localMemberId}
                onChange={(e) => setLocalMemberId(e.target.value)}
                required
              />
            </div>

            <div className="profile__button-group">
              <Button onClick={handleGenerateRandomId}>
                Generate Random ID
              </Button>

              <Button type="submit" buttonType="primary">
                Save Changes
              </Button>
            </div>
          </form>
        </div>

        <div className="profile__card">
          <p className="profile__current-check-in">
            <strong>Selected Class:</strong>
            <span className="profile__current-check-in-value">
              {checkInObject
                ? `${checkInObject.course} - ${checkInObject.location}`
                : 'No class selected'}
            </span>
          </p>
          <p className="profile__current-check-in">
            <strong>Current Check-in Time:</strong>
            <span className="profile__current-check-in-value">
              {checkInTime ? formatDateAndTime(checkInTime) : 'Not checked in'}
            </span>
          </p>
          <Button onClick={handleResetCheckIn}>Reset Check-in Data</Button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
