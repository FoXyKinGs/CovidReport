import { combineReducers } from 'redux'
import basicReducer from './basic'
import usersReducers from './users'
import coronaReducers from './corona'

const rootReducers = combineReducers({
  basic: basicReducer,
  users: usersReducers,
  corona: coronaReducers
})

export default rootReducers