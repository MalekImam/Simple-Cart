import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/actionTypes"

const initialState = { itemsById: {} }

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        itemsById: { ...state.itemsById, [action.payload.id]: action.payload },
      }
    case REMOVE_FROM_CART:
      const itemsById = state.itemsById
      delete itemsById[action.payload]
      return { ...state, itemsById }
    default:
      return state
  }
}

export default cartReducer
