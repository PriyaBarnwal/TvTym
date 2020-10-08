import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import RootReducer from './reducers/RootReducer'

let initialState = {},
  middlewares = [thunk]

const store = createStore(RootReducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)))

let currentState = store.getState()

store.subscribe(() => {
  let prevState = currentState
  currentState = store.getState()
  if (prevState.favorites.favs.length !== currentState.favorites.favs.length)
    localStorage.setItem('favs', JSON.stringify(store.getState().favorites.favs))
})
export default store