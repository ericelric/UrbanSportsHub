import { useState } from 'react';
import imageCompression from 'browser-image-compression';

const useProfilePicture = () => {
  const [image, setImage] = useState(
    () => localStorage.getItem('memberProfilePicture') ?? null
  );
  const [error, setError] = useState('');

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const allowedTypes = ['image/jpeg', 'image/png'];
    if (!allowedTypes.includes(file.type)) {
      setError('Only JPG and PNG images are allowed.');
      return;
    }

    const maxSize = 10 * 1024 * 1024; // 10MB
    if (file.size > maxSize) {
      setError('File size must be under 10MB.');
      return;
    }

    setError('');

    // Compression settings
    const options = {
      maxSizeMB: 3,
      maxWidthOrHeight: 500,
      useWebWorker: true,
    };

    try {
      const compressedFile = await imageCompression(file, options);
      const compressedDataUrl = await imageCompression.getDataUrlFromFile(
        compressedFile
      );
      setImage(compressedDataUrl);
    } catch (error) {
      setError(`Failed to compress image. Error: ${error}`);
    }
  };

  const resetImage = () => {
    setImage(null);
  };

  return { image, handleImageUpload, resetImage, error };
};

export default useProfilePicture;
