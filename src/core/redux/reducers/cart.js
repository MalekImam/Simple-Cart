import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/actionTypes"

const initialState = { itemsById: {}, itemsId: [] }

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        itemsById: { ...state.itemsById, [action.payload.id]: action.payload },
        itemsId: [...state.itemsId, action.payload.id],
      }
    case REMOVE_FROM_CART:
      const itemsById = state.itemsById
      delete itemsById[action.payload]
      const itemsId = state.itemsId.filter((id) => id !== action.payload)
      return { ...state, itemsById, itemsId }
    default:
      return state
  }
}

export default cartReducer
