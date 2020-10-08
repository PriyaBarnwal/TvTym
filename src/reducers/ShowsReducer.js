import {GET_SHOWS, SET_LOADING, SET_ERROR} from '../actions/constants'

let initialState = {
  items: [],
  loading: true,
  error: {}
}

const ShowsReducer = (state = initialState, action) => {
  let {type, payload} = action

  switch(type) {
    case GET_SHOWS:
      return {
        ...state,
        loading: false,
        items: [...state.items, ...payload]
      }
    case SET_ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}

export default ShowsReducer