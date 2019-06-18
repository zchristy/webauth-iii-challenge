import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../actions';

const initialState = {
  loggingIn: false,
  isLoggedIn: false,
  error: null
};

const loginReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true,
        error: ''
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        isLoggedIn: true,
        error: ''
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default loginReducer;
