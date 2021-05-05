import * as actionTypes from "../actions/actionTypes.js";

const initialState = {
    token: null,
    userId: null,
    error: null,
    isLoggedIn: false,
    loading: false,
    authRedirectPath: "/",
  };

const reducer = (state = initialState, action) => {
    switch (action.type) {
      
      case actionTypes.LOGOUT_SUCCESS:
        return {...state, token: action.token, isLoggedIn: action.isLoggedIn, error: action.error}

      case actionTypes.LOGIN_SUCCESS:
        return{...state, token: action.token, isLoggedIn: action.isLoggedIn}

      case actionTypes.SET_REDIRECT_PATH:
        return {...state, authRedirectPath: '/' + action.path}

      case actionTypes.AUTH_LOGIN:
        return {...state, token: action.token}
      case actionTypes.LOGIN_FAIL:
        return{...state, error: action.error}
      default:
        return state;
    }
  };
  
  export default reducer;