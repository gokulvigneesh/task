import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import './image.css'

const ImageField = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  return (
    <div className="image-field">
      <label htmlFor="image-upload" className="image-label">
        <div className="avatar-icon">
          {selectedImage ? (
            <img src={selectedImage} alt="Selected" className="uploaded-image" />
          ) : (
            <FaUserCircle className="icon" />
          )}
        </div>
        <input
          type="file"
          id="image-upload"
          className="image-input"
          accept="image/*"
          onChange={handleImageUpload}
        />
      </label>
    </div>
  );
};

export default ImageField;
