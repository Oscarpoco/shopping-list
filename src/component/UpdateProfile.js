import React, { useState, useEffect } from 'react';
import './Login.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../store'; // Import the updateProfile action

function UpdateProfile({ onCloseUpdate }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user); // Assuming user data is stored in the Redux state

  // Local state for form fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState(''); // State for old password
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Populate form fields with existing user data on component mount
  useEffect(() => {
    if (user) {
      setFullName(user.fullName || '');
      setEmail(user.email || '');
      setPassword('');
      setConfirmPassword('');
    }
  }, [user]);

  // Handle form submission
  const handleUpdateProfile = (e) => {
    e.preventDefault();

    // Check if old password matches the current user's password
    if (oldPassword !== user.password) {
      alert('Old password is incorrect');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const updatedUserData = {
      fullName,
      email,
      password: password || undefined, // Only update password if provided
    };

    dispatch(updateProfile(user.id, updatedUserData))
      .then(() => {
        alert('Profile updated successfully');
        onCloseUpdate(); // Close the update form after successful update
      })
      .catch((error) => {
        console.error('Error updating profile:', error);
        alert('Failed to update profile');
      });
  };

  return (
    <div className="login">
      <div className="login-form" style={{padding: '0'}}>
        <h2>Update Profile</h2>

        {/* FORM */}
        <form onSubmit={handleUpdateProfile} style={{padding: '1em 2em'}}>
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

          {/* OLD PASSWORD */}
          <div className="password">
            <label>Old Password</label>
            <input
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              required
            />
          </div>

          <div className="password">
            <label>New Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="password">
            <label>Confirm New Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button type="submit">Update</button>
        </form>
        {/* ENDS */}
        <button onClick={onCloseUpdate} className="close" style={{top: '20px'}}>
          +
        </button>
      </div>
    </div>
  );
}

export default UpdateProfile;
