// REDUX
// NB: some of the comments in this code I made them so I can understand better on what I am doing
import { type } from '@testing-library/user-event/dist/type';
import { createStore } from 'redux';

// INITIAL STATE
// So basically the are the states that I have accross my application
// //Explanation in terms of useSate, is the intial state as const [state, setState] = useState(false)
const initialState = {
  isSignIn: false,
  showDashboard: false,
  showPopup: false,
  confirmLogout: false,
  signInForm: false,
  signUpForm: false,
};

// ACTION TYPES
////Explanation in terms of useSate, these are type of actions that I have , which on my normal state are represented by useState hook
const SIGN_IN = 'SIGN_IN';
const SIGN_OUT = 'SIGN_OUT';
const SHOW_DASHBOARD = 'SHOW_DASHBOARD';
const HIDE_DASHBOARD = 'HIDE_DASHBOARD';
const SHOW_POPUP = 'SHOW_POPUP';
const HIDE_POPUP = 'HIDE_POPUP';
const OPEN_LOGOUT_TRAY = 'OPEN_LOGOUT_TRAY';
const CLOSE_LOGOUT_TRAY = 'CLOSE_LOGOUT_TRAY';
const OPEN_SIGN_IN_FORM = 'OPEN_SIGN_IN_FORM';
const CLOSE_SIGN_IN_FORM = 'CLOSE_SIGN_IN_FORM';
const OPEN_SIGN_UP_FORM = 'OPEN_SIGN_UP_FORM';
const CLOSE_SIGN_UP_FORM = 'CLOSE_SIGN_UP_FORM';


// ACTION CREATOR
//Explanation in terms of useSate,  I call these functions, which set the state of the functions created in a useState 
export const signIn = () => ({ type: SIGN_IN });
export const signOut = () => ({ type: SIGN_OUT });
export const showDashboard = () => ({ type: SHOW_DASHBOARD });
export const hideDashboard = () => ({ type: HIDE_DASHBOARD });
export const showPopup = () => ({ type: SHOW_POPUP });
export const hidePopup = () => ({ type: HIDE_POPUP });
export const openLogoutTray = () => ({ type: OPEN_LOGOUT_TRAY });
export const closeLogoutTray = () => ({ type: CLOSE_LOGOUT_TRAY });
export const openSignInForm = () => ({ type: OPEN_SIGN_IN_FORM });
export const closeSignInForm = () => ({ type: CLOSE_SIGN_IN_FORM });
export const OpenSignUpForm = () => ({ type: OPEN_SIGN_UP_FORM });
export const closeSignUpForm = () => ({type: CLOSE_SIGN_UP_FORM})

// REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignIn: true };
    case SIGN_OUT:
      return { ...state, isSignIn: false };
    case SHOW_DASHBOARD:
      return { ...state, showDashboard: true };
    case HIDE_DASHBOARD:
      return { ...state, showDashboard: false };
    case SHOW_POPUP:
      return { ...state, showPopup: true };
    case HIDE_POPUP:
      return { ...state, showPopup: false };
    case OPEN_LOGOUT_TRAY:
      return { ...state, confirmLogout: true };
    case CLOSE_LOGOUT_TRAY:
      return { ...state, confirmLogout: false };
    case OPEN_SIGN_IN_FORM:
      return { ...state, signInForm: true };
    case CLOSE_SIGN_IN_FORM:
      return { ...state, signInForm: false };
    case OPEN_SIGN_UP_FORM:
      return{...state, signUpForm: true}
    case CLOSE_SIGN_UP_FORM:
      return{...state, signUpForm:false}
    default:
      return state;
  }
};

// CREATE STORE
const store = createStore(reducer);

export default store;
