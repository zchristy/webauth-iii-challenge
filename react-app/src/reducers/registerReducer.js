import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from '../actions';

const initialState = {
  registerdUser: null,
  registering: false,
  isRegistered: false,
  error: null
};

const registerReducer = (state = initialState, action) => {
  switch(action.type) {
    case REGISTER_START:
      return {
        ...state,
        registering: true,
        error: ''
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        registerdUser: action.payload,
        registering: false,
        isRegistered: true,
        error: ''
      }
    case REGISTER_FAILURE:
      return {
        ...state,
        registering: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default registerReducer;
