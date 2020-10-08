import {ADD_TO_FAVS, REMOVE_FROM_FAVS} from '../actions/constants'

let initialState = {
  favs: localStorage.getItem('favs') ? JSON.parse(localStorage.getItem('favs')): []
}

const FavReducer = (state = initialState, action) => {
  let {type, payload} = action

  switch(type) {
    case ADD_TO_FAVS:
      return {
        ...state,
        favs: [payload, ...state.favs]
      }
    case REMOVE_FROM_FAVS:
      return {
        ...state,
        favs: state.favs.filter(show => show.id!==payload)
      }
    default:
      return state
  }
}

export default FavReducer