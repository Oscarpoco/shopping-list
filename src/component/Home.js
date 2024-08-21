// import React from "react";
// import './Home.css';
// import { useState } from "react";
// import Login from "./Login";
// import { FaLongArrowAltRight } from "react-icons/fa";
// import { FaFacebookF } from "react-icons/fa6";
// import { FaXTwitter } from "react-icons/fa6";
// import { IoLogoInstagram } from "react-icons/io";
// import { FaWhatsapp } from "react-icons/fa";
// import { SlSocialLinkedin } from "react-icons/sl";
// import { MdTrolley } from "react-icons/md";
// import { FaAngleDown } from "react-icons/fa6";


// function Home({handleSignIn, isSignIn, handleShowDashboard, handleLogout}){

//     const [confirmLogout, setConfirmLogout] = useState(false);
//     const [signInForm, setSignInForm] = useState(false);


//     // HANDLE THE CONFIRM TRAY
//     const OpenLogoutTray = ()=>{
//         setConfirmLogout(true)
//     }
//     // ENDS

//     // HANDLE DECLINING LOGOUT
//     const DeclineClose = ()=>{
//         setConfirmLogout(false)
//     }
//     // ENDS

//     // HANDLE LOGOUT
//     const Logout = ()=>{
//         handleLogout();
//         setConfirmLogout(false)
//     }
//     // ENDS

//     // HANDLE SIGN IN FORM
//     const HandleSignInForm = ()=>{
//         setSignInForm(true);
//     }

//     const HandleCloseSignInForm = ()=>{
//         setSignInForm(false);
//     }

//     return(

//         <div className="">

//             {/* HEADER */}
//             <header>

//                 {/* NAVIGATION */}
//                 <nav>
//                     <div className='logo'>
//                         <h3>PLANS</h3>
//                         <MdTrolley className='trolley'/>
//                     </div>

//                 {isSignIn ? <button onClick={OpenLogoutTray}>Logout</button>: <button onClick={HandleSignInForm}> Sign In</button>}
//                 </nav>
//                 {/* NAVIGATION ENDS*/}

//                 {/* COVER */}
//                 <div className='cover'>
//                     <div className='left'>
//                         <h1>Organize, Manage, Shop <br></br>Simplify Your Life!</h1>
//                         <div className='social'>
//                         <div className='box'>
//                             <FaFacebookF className='social-icon'/>
//                         </div>

//                         <div className='box'>
//                             <FaXTwitter className='social-icon'/>
//                         </div>

//                         <div className='box'>
//                             <IoLogoInstagram className='social-icon'/>
//                         </div>

//                         <div className='box'>
//                             <FaWhatsapp className='social-icon'/>
//                         </div>

//                         <div className='box'>
//                             <SlSocialLinkedin className='social-icon'/>
//                         </div>

//                         </div>
//                         {isSignIn ? <button>My Profile <FaLongArrowAltRight className='arrow'/></button>:

//                                     <button>Sign Up <FaLongArrowAltRight className='arrow'/></button>
//                         }
//                     </div>
//                     <div className='right'>
//                         <img src="/logo.png" alt='trolley'></img>
//                     </div>
//                 </div>
//                 {/*COVER ENDS */}

//                 {/* FOOTER */}
//                 <footer>
//                     <div className=''>
//                         <p>&copy; 2024 Gamefusion (Pty) Ltd.</p>
//                     </div>

//                     {isSignIn && (
//                         <div className='shopping'>
//                             <button>
//                             Shopping List
//                             <div onClick={() => dispatch(showDashboard())} className='down-arrow'>
//                                 <FaAngleDown className='down'/>
//                             </div> 
//                             </button>
//                         </div>
//                     )}
                    
//                 </footer>
//                 {/*FOOTER ENDS */}

//             </header>
//             {/* HEADER ENDS */}






//             {/* POPUP */}
//             {confirmLogout && (
//                 <div className="confirm-layout">
//                     <div className="confirm">
//                         <h3>Are you sure you want to Logout ?</h3>

//                         <div className="logout-button">
//                             <button onClick={Logout} style={{background: 'green'}}>Yes</button>
//                             <button onClick={DeclineClose} style={{background: 'red'}}>No</button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//             {/* POPUP ENDS */}

//             {/* SIGN FORM */}
//             {signInForm && (
//                 <Login 
//                 handleSignIn={handleSignIn}
//                 HandleCloseSignInForm={HandleCloseSignInForm}
//                 />
//             )}



//         </div>
//     )
// }

// export default Home;


// CODE WITH REDUX
import React from 'react';
import { useState, useEffect } from 'react';
import './Home.css';
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { MdTrolley } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import {
  signOut,
  showDashboard,
  openLogoutTray,
  closeLogoutTray,
  openSignInForm,
  closeSignInForm,
  OpenSignUpForm,

} from '../store';
import Login from './Login';
import SignUp from './SignUp';
import UpdateProfile from './UpdateProfile';
import Loader from './Loader';

function Home() {
  const dispatch = useDispatch();
  const isSignIn = useSelector((state) => state.isSignIn);
  const confirmLogout = useSelector((state) => state.confirmLogout);
  const signInForm = useSelector((state) => state.signInForm);
  const signUpForm = useSelector((state) => state.signUpForm);

  // LOADER
  const [loading, setLoading] = useState(true);
  // ENDS

  // HANDLES OPENING EDIT FORM
  const [update, setUpdate] = useState(false);
  // ENDS

  // HANDLES UPDATE FORM
  const onOpenUpdate = () => {
    setLoading(true);
    setTimeout(() => {
      setUpdate(true);
      setLoading(false);
    }, 2000);
  };

  const onCloseUpdate = () => {
    setUpdate(false);
  };

  // ENDS

  // Effect to simulate initial loading
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate loading for 2 seconds
  }, []);
  
  // ENDS

  // LOADER
  if(loading){
    return <Loader />
  }
  // ENDS


  return (
    <div className="">
      {/* HEADER */}
      <header>
        {/* NAVIGATION */}
        <nav>
          <div className="logo">
            <h3>PLANS</h3>
            <MdTrolley className="trolley" />
          </div>

          {isSignIn ? (
            <button onClick={() => dispatch(openLogoutTray())}>Logout</button>
          ) : (
            <button onClick={() => dispatch(openSignInForm())}>Sign In</button>
          )}
        </nav>
        {/* NAVIGATION ENDS*/}

        {/* COVER */}
        <div className="cover">
          <div className="left">
            <h1>Organize, Manage, Shop <br />Simplify Your Life!</h1>
            <div className="social">
              <div className="box">
                <a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF className="social-icon" />
                </a>
              </div>
              <div className="box">
                <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
                  <FaXTwitter className="social-icon" />
                </a>
              </div>
              <div className="box">
                <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
                  <IoLogoInstagram className="social-icon" />
                </a>
              </div>
              <div className="box">
                <a href="https://wa.me/your-whatsapp-number" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="social-icon" />
                </a>
              </div>
              <div className="box">
                <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                  <SlSocialLinkedin className="social-icon" />
                </a>
              </div>

            </div>
            {isSignIn ? (
              <button onClick={onOpenUpdate}>
                My Profile <FaLongArrowAltRight className="arrow" />
              </button>
            ) : (
              <button onClick={()=> dispatch(OpenSignUpForm())}>
                Sign Up <FaLongArrowAltRight className="arrow" />
              </button>
            )}
          </div>
          <div className="right">
            <img src="/trolley.jpeg" alt="trolley" />
          </div>
        </div>
        {/* COVER ENDS */}

        {/* FOOTER */}
        <footer>
        <div className='company'>
          <p>&copy; 2024 Gamefusion (Pty) Ltd.</p>
        </div>

        {isSignIn && (
          <div className='shopping'> 
            <button>
              <h3>Plan Your Next Shopping</h3>
              <div onClick={() => dispatch(showDashboard())} className='down-arrow'>
                <FaAngleDown className='down'/>
              </div> 
            </button>
          </div>
        )}
          
        </footer>
        {/* FOOTER ENDS */}
        
      </header>
      {/* HEADER ENDS */}

      {/* LOGOUT CONFIRMATION TRAY */}
      {confirmLogout && (
          <div className="confirm-layout">
            <div className="confirm">
              <h3>Are you sure you want to Logout ?</h3>

              <div className="logout-button">
                  <button onClick={() => {
                          dispatch(signOut());
                          dispatch(closeLogoutTray());
                          }}
                  
                  
                  style={{background: 'green'}}>Yes</button>
                  <button 
                          onClick={() => dispatch(closeLogoutTray())}
                  
                  style={{background: 'red'}}>No</button>
              </div>
            </div>
          </div>
      )}
        
      {/* LOGOUT CONFIRMATION TRAY ENDS */}


      {/* SIGN IN FORM POPUP */}
      {signInForm && <Login onClose={() => dispatch(closeSignInForm())} />}
      {/* SIGN IN FORM POPUP ENDS */}

      {/* SIGN UP FORM POPUP */}
      {signUpForm && <SignUp onClose={() => dispatch(closeSignInForm())}/>}
      {/* SIGN UP FORM POPUP ENDS */}

      {/* UPDATE PROFILE */}
      {update && (<UpdateProfile onCloseUpdate={onCloseUpdate}/>)}
      {/* UPDATE PROFILE ENDS */}

    </div>
  );
}

export default Home;

