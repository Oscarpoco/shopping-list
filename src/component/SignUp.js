import React, { useState } from 'react';
import './Login.css';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, closeSignUpForm, updateProfile , signIn} from '../store';

function SignUp({ onUpdateProfile, handleCloseUpdateProfile }) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  
  const [email, setEmail] = useState(user?.email || '');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState(user?.fullName || '');
  const [confirmPassword, setConfirmPassword] = useState('');


  // // REGISTER NEW USER
  // const handleRegister = (e) => {
  //   e.preventDefault();
  //   if (password !== confirmPassword) {
  //     alert('Passwords do not match');
  //     return;
  //   }

  //   const newUser = {
  //     fullName,
  //     email,
  //     password,
  //   };

  //   dispatch(registerUser(newUser)).then(() => {
  //     dispatch(closeSignUpForm());
  //     dispatch(signIn());
  //   });
  // };
  // // ENDS

  // REGISTER NEW USER
  const handleRegister = async (e) => {
    e.preventDefault();
  
    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address');
      return;
    }
  
    // Validate password
    if (password.length < 8) {
      alert('Password must be at least 8 characters long');
      return;
    }
  
    // Check if password and confirm password match
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
  
    // Check if password contains at least one uppercase letter, one number, and one special character
    const passwordStrengthPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordStrengthPattern.test(password)) {
      alert('Password must contain at least one uppercase letter, one number, and one special character');
      return;
    }
  
    // Check if email already exists
    try {
      const response = await fetch('http://localhost:3003/users');
      const users = await response.json();
      
      const emailExists = users.some(user => user.email === email);
      if (emailExists) {
        alert('Email is already registered. Please use a different email.');
        return;
      }
  
      // Proceed with registration if email is unique
      const newUser = {
        fullName,
        email,
        password,
      };
  
      dispatch(registerUser(newUser)).then(() => {
        dispatch(closeSignUpForm());
        dispatch(signIn());
      }).catch(error => {
        console.error('Registration error:', error);
        alert('Failed to register. Please try again.');
      });
  
    } catch (error) {
      console.error('Error fetching users:', error);
      alert('Failed to check email uniqueness. Please try again.');
    }
  };
// ENDS



  // HANDLES UPDATE FOR PROFILE
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const updatedUserData = {
      fullName,
      email,
      password,
    };
    dispatch(updateProfile(user.id, updatedUserData));
    handleCloseUpdateProfile();
  };
  // ENDS

  return (
    <div className="login">
      <div className="login-form">
        <h2>{onUpdateProfile ? 'Update Profile' : 'Register'}</h2>

        {/* FORM */}
        <form onSubmit={onUpdateProfile ? handleUpdateProfile : handleRegister}>
          <div className="username">
            <label>Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="username">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="password">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="password">
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">{onUpdateProfile ? 'Update' : 'Submit'}</button>
        </form>
        {/* ENDS */}
        <button onClick={() => dispatch(closeSignUpForm())} className="close">
          +
        </button>
      </div>
    </div>
  );
}

export default SignUp;