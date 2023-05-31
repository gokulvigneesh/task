import React, { useState } from 'react';
import { XIcon } from '@heroicons/react/solid';

import './Navbar1.css'; // Import the regular CSS file for Navbar1

const Navbar1 = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: ''
  });
  const [registerFormData, setRegisterFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [loginError, setLoginError] = useState(false);
  const [emailExists, setEmailExists] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleLoginClick = () => {
    setShowLoginForm(true);
  };

  const handleRegisterClick = () => {
    setShowRegisterForm(true);
  };

  const handleCloseForm = () => {
    setShowLoginForm(false);
    setShowRegisterForm(false);
  };

  const handleLoginChange = (e) => {
    setLoginFormData({
      ...loginFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegisterChange = (e) => {
    setRegisterFormData({
      ...registerFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`https://646e3a8c9c677e23218b54de.mockapi.io/user?email=${loginFormData.email}`);
    const userData = await response.json();

    const matchedUser = userData.find(user => user.email === loginFormData.email);


    if (matchedUser && matchedUser.password === loginFormData.password)  {
      setLoginError(false);
      setLoginSuccess(true);
      setLoginFormData({ email: '', password: '' });
      handleCloseForm();
    } else {
      console.log('Invalid email or password');
      setLoginError(true);
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    fetch(`https://646e3a8c9c677e23218b54de.mockapi.io/user?email=${registerFormData.email}`)
      .then((response) => response.json())
      .then((data) => {
        const emailExists = data.some((user) => user.email === registerFormData.email);

      if (emailExists) {
        console.log('Email already exists');
        setEmailExists(true);
        } else {
          console.log('Registering user:', registerFormData);

          fetch('https://646e3a8c9c677e23218b54de.mockapi.io/user', {
            method: 'POST',
            body: JSON.stringify(registerFormData),
            headers: {
              'Content-Type': 'application/json'
            }
          })
            .then((response) => response.json())
            .then((data) => {
              console.log('Registration successful');
              setRegisterFormData({ name: '', email: '', password: '' });
              setRegistrationSuccess(true);
              setEmailExists(false);
              handleCloseForm();
            })
            .catch((error) => {
              console.error('Error registering user:', error);
            });
        }
      })
      .catch((error) => {
        console.error('Error checking email existence:', error);
      });
  };

  return (
    <nav className="navbar">
      <div>
        <h1 className="navbar__title">Title</h1>
      </div>
      <div>
        <button
          className="navbar__button navbar__button--login"
          onClick={handleLoginClick}
        >
          Login
        </button>
        <button
          className="navbar__button navbar__button--register"
          onClick={handleRegisterClick}
        >
          Register
        </button>
      </div>

      {showLoginForm && (
        <div className="modal">
          <div className="modal__content">
            <div className="modal__header">
              <h2>Login</h2>
              <button className="modal__close-button" onClick={handleCloseForm}>
                <XIcon className="modal__close-icon" />
              </button>
            </div>
            <form className="modal__form" onSubmit={handleLoginSubmit}>
              <div className="modal__form-group">
                <label htmlFor="loginEmail">Email</label>
                <input
                  type="email"
                  id="loginEmail"
                  name="email"
                  value={loginFormData.email}
                  onChange={handleLoginChange}
                />
              </div>
              <div className="modal__form-group">
                <label htmlFor="loginPassword">Password</label>
                <input
                  type="password"
                  id="loginPassword"
                  name="password"
                  value={loginFormData.password}
                  onChange={handleLoginChange}
                />
              </div>
              <button type="submit" className="modal__form-submit-button">
                Login
              </button>
              {loginError && <p className="modal__form-error">Invalid email or password</p>}
            </form>
            {loginSuccess && (
              <div className="modal__success-container">
                <h3>Login Successful!</h3>
                <button className="modal__close-button" onClick={() => setLoginSuccess(false)}>
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {showRegisterForm && (
        <div className="modal">
          <div className="modal__content">
            <div className="modal__header">
              <h2>Register</h2>
              <button className="modal__close-button" onClick={handleCloseForm}>
                <XIcon className="modal__close-icon" />
              </button>
            </div>
            <form className="modal__form" onSubmit={handleRegisterSubmit}>
              <div className="modal__form-group">
                <label htmlFor="registerName">Name</label>
                <input
                  type="text"
                  id="registerName"
                  name="name"
                  value={registerFormData.name}
                  onChange={handleRegisterChange}
                />
              </div>
              <div className="modal__form-group">
                <label htmlFor="registerEmail">Email</label>
                <input
                  type="email"
                  id="registerEmail"
                  name="email"
                  value={registerFormData.email}
                  onChange={handleRegisterChange}
                />
              </div>
              <div className="modal__form-group">
                <label htmlFor="registerPassword">Password</label>
                <input
                  type="password"
                  id="registerPassword"
                  name="password"
                  value={registerFormData.password}
                  onChange={handleRegisterChange}
                />
              </div>
              <button type="submit" className="modal__form-submit-button">
                Register
              </button>
              {emailExists && <p className="modal__form-error">Email already exists</p>}
            </form>
            {registrationSuccess && (
              <div className="modal__success-container">
                <h3>Registration Successful!</h3>
                <button
                  className="modal__close-button"
                  onClick={() => setRegistrationSuccess(false)}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar1;
