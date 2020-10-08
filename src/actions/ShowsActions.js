import {GET_SHOWS, SET_ERROR, SET_LOADING} from './constants'

export const getShows = (page=0) => async(dispatch) => {
  try {
    dispatch({
      type: SET_LOADING
    })
    
    let response = await fetch(`http://api.tvmaze.com/shows?page=${page}`)
    let shows = await response.json()

    dispatch({
      type: GET_SHOWS,
      payload: shows
    })
  } catch(err) {
    dispatch({
      type: SET_ERROR,
      payload: { msg: err.message }
    })
  }
}