import {
  FETCH_USERS_START,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from '../actions';

const initialState = {
  usersList: [],
  fetchingUsers: false,
  error: null
};

const fetchUsersReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_USERS_START:
      return {
        ...state,
        fetchingUsers: true,
        error: ''
      }
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        usersList: action.payload,
        fetchingUsers: false,
        error: ''
      }
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        fetchingUsers: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default fetchUsersReducer;
