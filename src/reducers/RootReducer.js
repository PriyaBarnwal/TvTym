import { combineReducers } from 'redux'
import FavReducer from './FavReducer'
import ShowsReducer from './ShowsReducer'

export default combineReducers({
  favorites: FavReducer,
  shows: ShowsReducer
})