import { SET_PRODUCTS, TOGGLE_PRODUCT } from "../constants/actionTypes"

const initialState = { productsById: {} }

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.payload
    case TOGGLE_PRODUCT:
      const productsById = state.productsById
      const { id, isSelected } = action.payload
      return {
        ...state,
        productsById: {
          ...productsById,
          [id]: { ...productsById[id], selected: isSelected },
        },
      }
    default:
      return state
  }
}

export default productsReducer
