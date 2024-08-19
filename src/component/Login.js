// import React from 'react';
// import './Login.css';

// function Login({HandleCloseSignInForm}) {

//   return (
//     <div className="login">
//         <div className='login-form'>
//             <h2>Login</h2>
//             <form>
//                 <div className='username'>
//                     <label>Username</label>
//                     <input type='email'
//                     placeholder='Email'
//                     ></input>  
//                 </div>

//                 <div className='password'>
//                     <label>Password</label>
//                     <input type='password'
//                     placeholder='Password'
//                     ></input>  
//                 </div>

//                 <button type='submit'>Submit</button>
//                 <p>Don't have an Account ? Register here.</p>              
//             </form>
//             <button onClick={HandleCloseSignInForm} className='close'>+</button>
//         </div>

//     </div>
//   );
// }

// export default Login;


// CODE WITH REDUX
import React, { useState } from 'react';
import './Login.css';
import { useDispatch } from 'react-redux';
import { loginUser, closeSignInForm } from '../store';

function Login() {

  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  // HANDLE LOGIN
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
    dispatch(closeSignInForm());
  };
  // ENDS

  return (
    <div className="login">
      <div className="login-form">
        <h2>Login</h2>
        
        {/* FORM */}
        <form onSubmit={handleLogin}>
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
          <button type="submit">Submit</button>
          <p>Don't have an Account? Register here.</p>
        </form>
        {/* FORM ENDS */}

        <button onClick={() => dispatch(closeSignInForm())} className="close">
          +
        </button>
      </div>
    </div>
  );
}

export default Login;

