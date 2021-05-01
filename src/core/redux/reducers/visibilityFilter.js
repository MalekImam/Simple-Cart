import { SET_VISIBILITY_FILTER } from "../constants/actionTypes"

const initialState = "SHOW_ALL" // ["SHOW_ALL", "SHOW_SELECTED", "SHOW_UNSELECTED"]

const visibilityFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.payload
    default:
      return state
  }
}

export default visibilityFilterReducer
