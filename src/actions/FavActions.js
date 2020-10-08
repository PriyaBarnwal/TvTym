import {ADD_TO_FAVS, REMOVE_FROM_FAVS} from './constants'

export const removeItem = (id) => (
  {
    type: REMOVE_FROM_FAVS,
    payload: id
  }
)

export const addItem = (item) => ({
  type: ADD_TO_FAVS,
  payload: item
})