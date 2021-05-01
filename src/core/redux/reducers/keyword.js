import { SET_KEYWORD } from "../constants/actionTypes"

const initialState = ""

const keywordReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_KEYWORD:
      return action.payload
    default:
      return state
  }
}

export default keywordReducer
