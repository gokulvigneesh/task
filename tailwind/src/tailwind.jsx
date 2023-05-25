import React, { useState } from 'react';
import { XIcon } from '@heroicons/react/solid';

const Navbar = () => {
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
    <nav className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-500 to-purple-300 text-white">
      <div>
        <h1 className="text-xl font-bold"></h1>
      </div>
      <div>
        <button
          className="mr-4 py-2 px-4 bg-blue-500 hover:bg-blue-800 text-white rounded transform hover:scale-105 transition-all duration-200"
          onClick={handleLoginClick}
        >
          Login
        </button>
        <button
          className="py-2 px-4 bg-green-500 hover:bg-green-800 text-white rounded transform hover:scale-105 transition-all duration-200"
          onClick={handleRegisterClick}
        >
          Register
        </button>
      </div>

      {showLoginForm && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded relative">
            <div className="absolute top-3 right-4 ">
              <button className=" text-black rounded" onClick={handleCloseForm}>
                <XIcon className="h-4 w-4" />
              </button>
            </div>
            <h2 className="text-2xl mb-4">Login Form</h2>
            <form onSubmit={handleLoginSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2 text-black">Email</label>
                <input
                  className="w-full p-2 border rounded bg-gray-100 text-black"
                  type="email"
                  id="email"
                  name="email"
                  value={loginFormData.email}
                  onChange={handleLoginChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2 text-black">Password</label>
                <input
                  className="w-full p-2 border rounded bg-gray-100 text-black"
                  type="password"
                  id="password"
                  name="password"
                  value={loginFormData.password}
                  onChange={handleLoginChange}
                  required
                />
              </div>
              {loginError && <p className="text-red-500 mb-4">Invalid email or password</p>}
              <div className="flex justify-end">
                <button className="py-2 px-4 bg-green-500 hover:bg-green-600 text-white rounded" type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showRegisterForm && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded relative">
            <div className="absolute top-3 right-4">
              <button className=" text-black rounded" onClick={handleCloseForm}>
                <XIcon className="h-4 w-4" />
              </button>
            </div>
            <h2 className="text-2xl mb-4">Register Form</h2>
            <form onSubmit={handleRegisterSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2 text-black">Name</label>
                <input
                  className="w-full p-2 border rounded bg-gray-100 text-black"
                  type="text"
                  id="name"
                  name="name"
                  value={registerFormData.name}
                  onChange={handleRegisterChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2 text-black">Email</label>
                <input
                  className="w-full p-2 border rounded bg-gray-100 text-black"
                  type="email"
                  id="email"
                  name="email"
                  value={registerFormData.email}
                  onChange={handleRegisterChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2 text-black">Password</label>
                <input
                  className="w-full p-2 border rounded bg-gray-100 text-black"
                  type="password"
                  id="password"
                  name="password"
                  value={registerFormData.password}
                  onChange={handleRegisterChange}
                  required
                />
              </div>
              {emailExists && <p className="text-red-500 mb-4">Email already exists</p>}
              <div className="flex justify-end">
                <button className="py-2 px-4 bg-green-500 hover:bg-green-600 text-white rounded" type="submit">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {loginSuccess && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded relative">
            <h2 className="text-2xl mb-4 text-black">Login Successful!</h2>
            <button className="py-2 px-4 bg-green-500 hover:bg-green-600 text-white rounded" onClick={() => setLoginSuccess(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      {registrationSuccess && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded relative">
            <h2 className="text-2xl mb-4 text-black">Registration Successful!</h2>
            <button className="py-2 px-4 bg-green-500 hover:bg-green-600 text-white rounded" onClick={() => setRegistrationSuccess(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
