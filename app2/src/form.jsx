import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveUserInfo } from './actions';

const UserForm = ({ onSave }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleSave = () => {
    const userInfo = { name, email };
    dispatch(saveUserInfo(userInfo));
    setName('');
    setEmail('');
    onSave();
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default UserForm