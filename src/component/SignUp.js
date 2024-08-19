
// CODE WITH REDUX
import React, { useState } from 'react';
import './Login.css';
import { useDispatch } from 'react-redux';
import { signIn, closeSignUpForm } from '../store';

function SignUp() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // HANDLE LOGIN , STILL WITH DUMMY LOGIN UNTIL I UNDERSTAND ON HOW TO INCLUDE JSON-SERVER WITH REDUX
  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'test@example.com' && password === 'password') {
      dispatch(signIn());
      dispatch(closeSignUpForm());
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login">

      <div className="login-form">
        <h2>Register</h2>
        {/* FORM */}
        <form onSubmit={handleLogin}>

            <div className="username">
            <label>Full Names</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            </div>
          <button type="submit">Submit</button>
        </form>
        {/* FORM ENDS */}

        <button onClick={() => dispatch(closeSignUpForm())} className="close">
          +
        </button>
      </div>
    </div>
  );
}

export default SignUp;
