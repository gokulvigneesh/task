import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ImageField from './image';
import './form.css';

const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [company, setCompany] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [gender, setGender] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};

    if (firstName.trim() === '') {
      validationErrors.firstName = 'First name is required';
    }

    if (lastName.trim() === '') {
      validationErrors.lastName = 'Last name is required';
    }

    if (age.trim() === '') {
      validationErrors.age = 'Age is required';
    }

    if (company.trim() === '') {
      validationErrors.company = 'Company is required';
    }

    if (!selectedDate) {
      validationErrors.date = 'Date is required';
    }

    if (gender.trim() === '') {
      validationErrors.gender = 'Gender is required';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Submit form data
    const formData = {
      firstName,
      lastName,
      age,
      company,
      date: selectedDate.toISOString(),
      gender,
    };
    console.log(formData);

    // Reset form fields
    setFirstName('');
    setLastName('');
    setAge('');
    setCompany('');
    setSelectedDate(null);
    setGender('');
    setErrors({});
  };

  const handleInputChange = (field, value) => {
    setErrors((prevErrors) => {
      return { ...prevErrors, [field]: '' };
    });

    switch (field) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'age':
        setAge(value);
        break;
      case 'company':
        setCompany(value);
        break;
      case 'date':
        setSelectedDate(value);
        break;
      case 'gender':
        setGender(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="container1">
      <form className="form" onSubmit={handleSubmit}>
        <ImageField />

        <div className="form-group1">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
          />
          {errors.firstName && <p className="error">{errors.firstName}</p>}
        </div>

        <div className="form-group2">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
          />
          {errors.lastName && <p className="error">{errors.lastName}</p>}
        </div>

        <div className="form-group3">
          <label htmlFor="age">Age:</label>
          <input
            type="text"
            id="age"
            value={age}
            onChange={(e) => handleInputChange('age', e.target.value)}
          />
          {errors.age && <p className="error">{errors.age}</p>}
        </div>

        <div className="form-group4">
          <label htmlFor="company">Company:</label>
          <input
            type="text"
            id="company"
            value={company}
            onChange={(e) => handleInputChange('company', e.target.value)}
          />
          {errors.company && <p className="error">{errors.company}</p>}
        </div>

        <div className="form-group5">
          <label htmlFor="date">Date:</label>
          <DatePicker
            id="date"
            selected={selectedDate}
            onChange={(date) => handleInputChange('date', date)}
            dateFormat="MM/dd/yyyy"
          />
          {errors.date && <p className="error">{errors.date}</p>}
        </div>

        <div className="form-group6">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => handleInputChange('gender', e.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.gender && <p className="error">{errors.gender}</p>}
        </div>

        <button className='submit' type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
