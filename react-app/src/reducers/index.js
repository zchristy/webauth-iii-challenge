import { combineReducers } from 'redux'

import fetchUsersReducer from './fetchUsersReducer'
import loginReducer from './loginReducer'
import registerReducer from './registerReducer'

export default combineReducers({
  fetchUsersReducer,
  loginReducer,
  registerReducer
})
