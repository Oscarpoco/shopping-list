// REDUX
// NB: some of the comments in this code I made them so I can understand better on what I am doing
// import { type } from '@testing-library/user-event/dist/type';
// import { createStore } from 'redux';

// // INITIAL STATE
// // So basically the are the states that I have accross my application
// // //Explanation in terms of useSate, is the intial state as const [state, setState] = useState(false)
// const initialState = {
//   isSignIn: false,
//   showDashboard: false,
//   showPopup: false,
//   confirmLogout: false,
//   signInForm: false,
//   signUpForm: false,
// };

// // ACTION TYPES
// ////Explanation in terms of useSate, these are type of actions that I have , which on my normal state are represented by useState hook
// const SIGN_IN = 'SIGN_IN';
// const SIGN_OUT = 'SIGN_OUT';
// const SHOW_DASHBOARD = 'SHOW_DASHBOARD';
// const HIDE_DASHBOARD = 'HIDE_DASHBOARD';
// const SHOW_POPUP = 'SHOW_POPUP';
// const HIDE_POPUP = 'HIDE_POPUP';
// const OPEN_LOGOUT_TRAY = 'OPEN_LOGOUT_TRAY';
// const CLOSE_LOGOUT_TRAY = 'CLOSE_LOGOUT_TRAY';
// const OPEN_SIGN_IN_FORM = 'OPEN_SIGN_IN_FORM';
// const CLOSE_SIGN_IN_FORM = 'CLOSE_SIGN_IN_FORM';
// const OPEN_SIGN_UP_FORM = 'OPEN_SIGN_UP_FORM';
// const CLOSE_SIGN_UP_FORM = 'CLOSE_SIGN_UP_FORM';


// // ACTION CREATOR
// //Explanation in terms of useSate,  I call these functions, which set the state of the functions created in a useState 
// export const signIn = () => ({ type: SIGN_IN });
// export const signOut = () => ({ type: SIGN_OUT });
// export const showDashboard = () => ({ type: SHOW_DASHBOARD });
// export const hideDashboard = () => ({ type: HIDE_DASHBOARD });
// export const showPopup = () => ({ type: SHOW_POPUP });
// export const hidePopup = () => ({ type: HIDE_POPUP });
// export const openLogoutTray = () => ({ type: OPEN_LOGOUT_TRAY });
// export const closeLogoutTray = () => ({ type: CLOSE_LOGOUT_TRAY });
// export const openSignInForm = () => ({ type: OPEN_SIGN_IN_FORM });
// export const closeSignInForm = () => ({ type: CLOSE_SIGN_IN_FORM });
// export const OpenSignUpForm = () => ({ type: OPEN_SIGN_UP_FORM });
// export const closeSignUpForm = () => ({type: CLOSE_SIGN_UP_FORM})

// // REDUCER
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SIGN_IN:
//       return { ...state, isSignIn: true };
//     case SIGN_OUT:
//       return { ...state, isSignIn: false };
//     case SHOW_DASHBOARD:
//       return { ...state, showDashboard: true };
//     case HIDE_DASHBOARD:
//       return { ...state, showDashboard: false };
//     case SHOW_POPUP:
//       return { ...state, showPopup: true };
//     case HIDE_POPUP:
//       return { ...state, showPopup: false };
//     case OPEN_LOGOUT_TRAY:
//       return { ...state, confirmLogout: true };
//     case CLOSE_LOGOUT_TRAY:
//       return { ...state, confirmLogout: false };
//     case OPEN_SIGN_IN_FORM:
//       return { ...state, signInForm: true };
//     case CLOSE_SIGN_IN_FORM:
//       return { ...state, signInForm: false };
//     case OPEN_SIGN_UP_FORM:
//       return{...state, signUpForm: true}
//     case CLOSE_SIGN_UP_FORM:
//       return{...state, signUpForm:false}
//     default:
//       return state;
//   }
// };

// // CREATE STORE
// const store = createStore(reducer);

// export default store;


// import { createStore, applyMiddleware } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { thunk } from 'redux-thunk';

// // INITIAL STATE
// const initialState = {
//   isSignIn: false,
//   showDashboard: false,
//   showPopup: false,
//   confirmLogout: false,
//   signInForm: false,
//   signUpForm: false,
//   users: [], // Add users state to manage registered users
// };

// // ACTION TYPES
// const SIGN_IN = 'SIGN_IN';
// const SIGN_OUT = 'SIGN_OUT';
// const SHOW_DASHBOARD = 'SHOW_DASHBOARD';
// const HIDE_DASHBOARD = 'HIDE_DASHBOARD';
// const SHOW_POPUP = 'SHOW_POPUP';
// const HIDE_POPUP = 'HIDE_POPUP';
// const OPEN_LOGOUT_TRAY = 'OPEN_LOGOUT_TRAY';
// const CLOSE_LOGOUT_TRAY = 'CLOSE_LOGOUT_TRAY';
// const OPEN_SIGN_IN_FORM = 'OPEN_SIGN_IN_FORM';
// const CLOSE_SIGN_IN_FORM = 'CLOSE_SIGN_IN_FORM';
// const OPEN_SIGN_UP_FORM = 'OPEN_SIGN_UP_FORM';
// const CLOSE_SIGN_UP_FORM = 'CLOSE_SIGN_UP_FORM';
// const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
// const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';
// const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
// const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

// // ACTION CREATORS
// export const signIn = () => ({ type: SIGN_IN });
// export const signOut = () => ({ type: SIGN_OUT });
// export const showDashboard = () => ({ type: SHOW_DASHBOARD });
// export const hideDashboard = () => ({ type: HIDE_DASHBOARD });
// export const showPopup = () => ({ type: SHOW_POPUP });
// export const hidePopup = () => ({ type: HIDE_POPUP });
// export const openLogoutTray = () => ({ type: OPEN_LOGOUT_TRAY });
// export const closeLogoutTray = () => ({ type: CLOSE_LOGOUT_TRAY });
// export const openSignInForm = () => ({ type: OPEN_SIGN_IN_FORM });
// export const closeSignInForm = () => ({ type: CLOSE_SIGN_IN_FORM });
// export const OpenSignUpForm = () => ({ type: OPEN_SIGN_UP_FORM });
// export const closeSignUpForm = () => ({ type: CLOSE_SIGN_UP_FORM });
// export const LOGIN_USER = 'LOGIN_USER';
// export const UPDATE_PROFILE = 'UPDATE_PROFILE';

// // UPDATE
// export const loginUser = (email, password) => ({
//   type: LOGIN_USER,
//   payload: { email, password },
// });

// export const updateProfile = (userData) => ({
//   type: UPDATE_PROFILE,
//   payload: userData,
// });


// // SIGN UP
// export const registerUserSuccess = (user) => ({
//   type: REGISTER_USER_SUCCESS,
//   payload: user,
// });

// export const registerUserFailure = (error) => ({
//   type: REGISTER_USER_FAILURE,
//   payload: error,
// });

// // ASYNC ACTION CREATOR
// export const registerUser = (userData) => {
//   return async (dispatch) => {
//     try {
//       const response = await fetch('http://localhost:3003/users', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(userData),
//       });
//       const data = await response.json();
//       dispatch(registerUserSuccess(data));
//     } catch (error) {
//       dispatch(registerUserFailure(error.message));
//     }
//   };
// };
// // ENDS

// // SIGN IN
// export const loginUserSuccess = (user) => ({
//   type: LOGIN_USER_SUCCESS,
//   payload: user,
// });

// export const loginUserFailure = (error) => ({
//   type: LOGIN_USER_FAILURE,
//   payload: error,
// });

// export const loginUser = (email, password) => {
//   return async (dispatch) => {
//     try {
//       const response = await fetch('http://localhost:3003/users');
//       const users = await response.json();

//       const user = users.find(user => user.email === email && user.password === password);

//       if (user) {
//         dispatch(loginUserSuccess(user));
//         dispatch(signIn());
//       } else {
//         dispatch(loginUserFailure('Invalid credentials'));
//         alert('Invalid credentials');
//       }
//     } catch (error) {
//       dispatch(loginUserFailure(error.message));
//       alert('Error logging in');
//     }
//   };
// };
// // ENDS

// // REDUCER
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SIGN_IN:
//       return { ...state, isSignIn: true };
//     case SIGN_OUT:
//       return { ...state, isSignIn: false };
//     case SHOW_DASHBOARD:
//       return { ...state, showDashboard: true };
//     case HIDE_DASHBOARD:
//       return { ...state, showDashboard: false };
//     case SHOW_POPUP:
//       return { ...state, showPopup: true };
//     case HIDE_POPUP:
//       return { ...state, showPopup: false };
//     case OPEN_LOGOUT_TRAY:
//       return { ...state, confirmLogout: true };
//     case CLOSE_LOGOUT_TRAY:
//       return { ...state, confirmLogout: false };
//     case OPEN_SIGN_IN_FORM:
//       return { ...state, signInForm: true };
//     case CLOSE_SIGN_IN_FORM:
//       return { ...state, signInForm: false };
//     case OPEN_SIGN_UP_FORM:
//       return { ...state, signUpForm: true };
//     case CLOSE_SIGN_UP_FORM:
//       return { ...state, signUpForm: false };
//     case REGISTER_USER_SUCCESS:
//       return { ...state, users: [...state.users, action.payload] };
//     case REGISTER_USER_FAILURE:
//       return { ...state, error: action.payload };
//     case LOGIN_USER_SUCCESS:
//       return { ...state, user: action.payload };
//     case LOGIN_USER_FAILURE:
//       return { ...state, error: action.payload };
//     default:
//       return state;
//   }
// };

// // PERSIST CONFIGURATION
// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, reducer);

// // CREATE STORE WITH PERSISTED REDUCER
// const store = createStore(persistedReducer, applyMiddleware(thunk));

// const persistor = persistStore(store);

// export { store, persistor };




// DRAFT
// import { createStore, applyMiddleware } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import {thunk} from 'redux-thunk';

// // INITIAL STATE
// const initialState = {
//   isSignIn: false,
//   showDashboard: false,
//   showPopup: false,
//   confirmLogout: false,
//   signInForm: false,
//   signUpForm: false,
//   users: [],
//   user: null,
//   error: null,
//   items: [],  // Add items to the state
// };

// // ACTION TYPES
// const SIGN_IN = 'SIGN_IN';
// const SIGN_OUT = 'SIGN_OUT';
// const SHOW_DASHBOARD = 'SHOW_DASHBOARD';
// const HIDE_DASHBOARD = 'HIDE_DASHBOARD';
// const SHOW_POPUP = 'SHOW_POPUP';
// const HIDE_POPUP = 'HIDE_POPUP';
// const OPEN_LOGOUT_TRAY = 'OPEN_LOGOUT_TRAY';
// const CLOSE_LOGOUT_TRAY = 'CLOSE_LOGOUT_TRAY';
// const OPEN_SIGN_IN_FORM = 'OPEN_SIGN_IN_FORM';
// const CLOSE_SIGN_IN_FORM = 'CLOSE_SIGN_IN_FORM';
// const OPEN_SIGN_UP_FORM = 'OPEN_SIGN_UP_FORM';
// const CLOSE_SIGN_UP_FORM = 'CLOSE_SIGN_UP_FORM';
// const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
// const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';
// const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
// const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';
// const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS';
// const UPDATE_PROFILE_FAILURE = 'UPDATE_PROFILE_FAILURE';
// const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
// const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';

// // ACTION CREATORS
// export const signIn = () => ({ type: SIGN_IN });
// export const signOut = () => ({ type: SIGN_OUT });
// export const showDashboard = () => ({ type: SHOW_DASHBOARD });
// export const hideDashboard = () => ({ type: HIDE_DASHBOARD });
// export const showPopup = () => ({ type: SHOW_POPUP });
// export const hidePopup = () => ({ type: HIDE_POPUP });
// export const openLogoutTray = () => ({ type: OPEN_LOGOUT_TRAY });
// export const closeLogoutTray = () => ({ type: CLOSE_LOGOUT_TRAY });
// export const openSignInForm = () => ({ type: OPEN_SIGN_IN_FORM });
// export const closeSignInForm = () => ({ type: CLOSE_SIGN_IN_FORM });
// export const OpenSignUpForm = () => ({ type: OPEN_SIGN_UP_FORM });
// export const closeSignUpForm = () => ({ type: CLOSE_SIGN_UP_FORM });

// export const registerUserSuccess = (user) => ({
//   type: REGISTER_USER_SUCCESS,
//   payload: user,
// });

// export const registerUserFailure = (error) => ({
//   type: REGISTER_USER_FAILURE,
//   payload: error,
// });

// export const loginUserSuccess = (user) => ({
//   type: LOGIN_USER_SUCCESS,
//   payload: user,
// });

// export const loginUserFailure = (error) => ({
//   type: LOGIN_USER_FAILURE,
//   payload: error,
// });

// export const updateProfileSuccess = (user) => ({
//   type: UPDATE_PROFILE_SUCCESS,
//   payload: user,
// });

// export const updateProfileFailure = (error) => ({
//   type: UPDATE_PROFILE_FAILURE,
//   payload: error,
// });

// export const fetchItemsSuccess = (items) => ({
//   type: FETCH_ITEMS_SUCCESS,
//   payload: items,
// });

// export const addItemSuccess = (item) => ({
//   type: ADD_ITEM_SUCCESS,
//   payload: item,
// });

// // ASYNC ACTION CREATORS
// export const registerUser = (userData) => {
//   return async (dispatch) => {
//     try {
//       const response = await fetch('http://localhost:3003/users', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(userData),
//       });
//       const data = await response.json();
//       dispatch(registerUserSuccess(data));
//     } catch (error) {
//       dispatch(registerUserFailure(error.message));
//     }
//   };
// };

// export const loginUser = (email, password) => {
//   return async (dispatch) => {
//     try {
//       const response = await fetch('http://localhost:3003/users');
//       const users = await response.json();

//       const user = users.find(user => user.email === email && user.password === password);

//       if (user) {
//         dispatch(loginUserSuccess(user));
//         dispatch(signIn());
//         dispatch(fetchItems(user.id)); // Fetch items for the logged-in user
//       } else {
//         dispatch(loginUserFailure('Invalid credentials'));
//         alert('Invalid credentials');
//       }
//     } catch (error) {
//       dispatch(loginUserFailure(error.message));
//       alert('Error logging in');
//     }
//   };
// };

// export const updateProfile = (id, profileData) => {
//   return async (dispatch) => {
//     try {
//       const response = await fetch(`http://localhost:3003/users/${id}`, {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(profileData),
//       });
//       const data = await response.json();
//       dispatch(updateProfileSuccess(data));
//     } catch (error) {
//       dispatch(updateProfileFailure(error.message));
//     }
//   };
// };

// // Fetch items for the logged-in user
// export const fetchItems = (userId) => {
//   return async (dispatch) => {
//     try {
//       const response = await fetch(`http://localhost:3003/items?userId=${userId}`);
//       const items = await response.json();
//       dispatch(fetchItemsSuccess(items));
//     } catch (error) {
//       console.error('Failed to fetch items:', error);
//     }
//   };
// };

// // Add a new item for the logged-in user
// export const addItem = (userId, itemData) => {
//   return async (dispatch) => {
//     try {
//       const response = await fetch('http://localhost:3003/items', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ ...itemData, userId }),
//       });
//       const item = await response.json();
//       dispatch(addItemSuccess(item));
//     } catch (error) {
//       console.error('Failed to add item:', error);
//     }
//   };
// };

// // REDUCER
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SIGN_IN:
//       return { ...state, isSignIn: true };
//     case SIGN_OUT:
//       return { ...state, isSignIn: false, user: null };
//     case SHOW_DASHBOARD:
//       return { ...state, showDashboard: true };
//     case HIDE_DASHBOARD:
//       return { ...state, showDashboard: false };
//     case SHOW_POPUP:
//       return { ...state, showPopup: true };
//     case HIDE_POPUP:
//       return { ...state, showPopup: false };
//     case OPEN_LOGOUT_TRAY:
//       return { ...state, confirmLogout: true };
//     case CLOSE_LOGOUT_TRAY:
//       return { ...state, confirmLogout: false };
//     case OPEN_SIGN_IN_FORM:
//       return { ...state, signInForm: true };
//     case CLOSE_SIGN_IN_FORM:
//       return { ...state, signInForm: false };
//     case OPEN_SIGN_UP_FORM:
//       return { ...state, signUpForm: true };
//     case CLOSE_SIGN_UP_FORM:
//       return { ...state, signUpForm: false };
//     case REGISTER_USER_SUCCESS:
//       return { ...state, users: [...state.users, action.payload] };
//     case REGISTER_USER_FAILURE:
//       return { ...state, error: action.payload };
//     case LOGIN_USER_SUCCESS:
//       return { ...state, user: action.payload };
//     case LOGIN_USER_FAILURE:
//       return { ...state, error: action.payload };
//     case UPDATE_PROFILE_SUCCESS:
//       return { ...state, user: { ...state.user, ...action.payload } };
//     case UPDATE_PROFILE_FAILURE:
//       return { ...state, error: action.payload };
//     case FETCH_ITEMS_SUCCESS:
//       return { ...state, items: action.payload };
//     case ADD_ITEM_SUCCESS:
//       return { ...state, items: [...state.items, action.payload] };
//     default:
//       return state;
//   }
// };

// // PERSIST CONFIGURATION
// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, reducer);

// // CREATE STORE WITH PERSISTED REDUCER
// const store = createStore(persistedReducer, applyMiddleware(thunk));

// const persistor = persistStore(store);

// export { store, persistor };

// FINAL PROJECT CODE
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {thunk} from 'redux-thunk';

// INITIAL STATE
const initialState = {
  isSignIn: false,
  showDashboard: false,
  showPopup: false,
  confirmLogout: false,
  signInForm: false,
  signUpForm: false,
  userProfile: {},
  users: [],
  user: null,
  error: null,
  items: [], 
};
// ENDS

// ACTION TYPES
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
const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';
const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';
const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS';
const UPDATE_PROFILE_FAILURE = 'UPDATE_PROFILE_FAILURE';
const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
const DELETE_ITEM_SUCCESS = 'DELETE_ITEM_SUCCESS';
const UPDATE_ITEM_SUCCESS = 'UPDATE_ITEM_SUCCESS';

// ACTION CREATORS
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
export const closeSignUpForm = () => ({ type: CLOSE_SIGN_UP_FORM });

// NOTIFICATIONS
export const registerUserSuccess = (user) => ({
  type: REGISTER_USER_SUCCESS,
  payload: user,
});

export const registerUserFailure = (error) => ({
  type: REGISTER_USER_FAILURE,
  payload: error,
});

export const loginUserSuccess = (user) => ({
  type: LOGIN_USER_SUCCESS,
  payload: user,
});

export const loginUserFailure = (error) => ({
  type: LOGIN_USER_FAILURE,
  payload: error,
});

export const updateProfileSuccess  = (user) => ({
  type: UPDATE_PROFILE_SUCCESS,
  payload: user,
});

export const updateProfileFailure  = (error) => ({
  type: UPDATE_PROFILE_FAILURE,
  payload: error,
});

export const fetchItemsSuccess = (items) => ({
  type: FETCH_ITEMS_SUCCESS,
  payload: items,
});

export const addItemSuccess = (item) => ({
  type: ADD_ITEM_SUCCESS,
  payload: item,
});

export const deleteItemSuccess = (itemId) => ({
  type: DELETE_ITEM_SUCCESS,
  payload: itemId,
});
// NOTIFICATIONS ENDS

// ACTION CREATOR FOR EDIT
export const updateItemSuccess = (item) => ({
  type: UPDATE_ITEM_SUCCESS,
  payload: item,
});

// ACTION ENDS

// ASYNC ACTION CREATORS FOR NEW USERS
export const registerUser = (userData) => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3003/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      dispatch(registerUserSuccess(data));
    } catch (error) {
      dispatch(registerUserFailure(error.message));
    }
  };
};
// ENDS

// EDIT
export const updateItem = (itemId, itemData, userId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:3003/items/${itemId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...itemData, userId }),
      });
      const item = await response.json();
      dispatch(updateItemSuccess(item));
    } catch (error) {
      console.error('Failed to update item:', error);
    }
  };
};


// ENDS

// LOGIN FUNCTION
export const loginUser = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3003/users');
      const users = await response.json();

      const user = users.find(user => user.email === email && user.password === password);

      if (user) {
        dispatch(loginUserSuccess(user));
        dispatch(signIn());
        dispatch(fetchItems(user.id)); // Fetch items for the logged-in user
      } else {
        dispatch(loginUserFailure('Invalid credentials'));
        alert('Invalid credentials');
      }
    } catch (error) {
      dispatch(loginUserFailure(error.message));
      alert('Error logging in');
    }
  };
};
// ENDS

// UPDATE USER DETAIL
export const updateProfile = (id, profileData) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:3003/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profileData),
      });
      const data = await response.json();
      dispatch(updateProfileSuccess(data));
    } catch (error) {
      dispatch(updateProfileFailure(error.message));
    }
  };
};
// ENDS

// FETCH ITEMS FOR THE LOGGED-IN USER
export const fetchItems = (userId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:3003/items?userId=${userId}`);
      const items = await response.json();
      dispatch(fetchItemsSuccess(items));
    } catch (error) {
      console.error('Failed to fetch items:', error);
    }
  };
};
// ENDS

// ADD A NEW ITEM FOR THE LOGGED-IN USER
export const addItem = (userId, itemData) => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3003/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...itemData, userId }),
      });
      const item = await response.json();
      dispatch(addItemSuccess(item));
    } catch (error) {
      console.error('Failed to add item:', error);
    }
  };
};
// ENDS

// DELETE AN ITEM
export const deleteItem = (itemId) => {
  return async (dispatch) => {
    try {
      await fetch(`http://localhost:3003/items/${itemId}`, {
        method: 'DELETE',
      });
      dispatch(deleteItemSuccess(itemId));
    } catch (error) {
      console.error('Failed to delete item:', error);
    }
  };
};
// ENDS

// REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignIn: true };
    case SIGN_OUT:
      return { ...state, isSignIn: false, user: null };
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
      return { ...state, signUpForm: true };
    case CLOSE_SIGN_UP_FORM:
      return { ...state, signUpForm: false };
    case REGISTER_USER_SUCCESS:
      return { ...state, users: [...state.users, action.payload] };
    case REGISTER_USER_FAILURE:
      return { ...state, error: action.payload };
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload };
    case LOGIN_USER_FAILURE:
      return { ...state, error: action.payload };
      case 'UPDATE_PROFILE_SUCCESS':
        return {
          ...state,
          userProfile: action.payload,
        };
        case 'UPDATE_PROFILE_FAILURE':
          return {
            ...state,
            error: action.payload,
          };
    case FETCH_ITEMS_SUCCESS:
      return { ...state, items: action.payload };
    case ADD_ITEM_SUCCESS:
      return { ...state, items: [...state.items, action.payload] };
    case DELETE_ITEM_SUCCESS:
      return { ...state, items: state.items.filter(item => item.id !== action.payload) };
    case UPDATE_ITEM_SUCCESS:
      return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id ? action.payload : item
          ),
        };

    default:
      return state;
  }
};
// ENDS

// PERSIST CONFIGURATION
const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

// CREATE STORE WITH PERSISTED REDUCER
const store = createStore(persistedReducer, applyMiddleware(thunk));

const persistor = persistStore(store);

export { store, persistor };

