import React, { useState } from 'react';
import './Login.css';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, closeSignUpForm, updateProfile } from '../store';

function SignUp({ signIn, onUpdateProfile, handleCloseUpdateProfile }) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  
  const [email, setEmail] = useState(user?.email || '');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState(user?.fullName || '');
  const [confirmPassword, setConfirmPassword] = useState('');


  // REGISTER NEW USER
  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const newUser = {
      fullName,
      email,
      password,
    };

    dispatch(registerUser(newUser)).then(() => {
      dispatch(closeSignUpForm());
      // dispatch(signIn());
    });
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