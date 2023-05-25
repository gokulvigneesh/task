import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import UserForm from './form';

const UserInfoPopup = ({ onClose }) => {
  const userInfo = useSelector((state) => state.userInfo);
  const [showForm, setShowForm] = useState(false);

  const handleClose = () => {
    setShowForm(true);
  };

  if (showForm) {
    return <UserForm />;
  }

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 999 }}>
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '5px' }}>
        <p>Name: {userInfo.name}</p>
        <p>Email: {userInfo.email}</p>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};

export default UserInfoPopup;