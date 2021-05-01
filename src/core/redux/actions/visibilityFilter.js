import { SET_VISIBILITY_FILTER } from "../constants/actionTypes"

export const setVisibilityFilter = (type) => ({
  type: SET_VISIBILITY_FILTER,
  payload: type,
})
