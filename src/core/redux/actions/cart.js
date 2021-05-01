import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/actionTypes"

export const addItemToCart = (itemInfo) => ({
  type: ADD_TO_CART,
  payload: itemInfo,
})

export const removeItemFromCart = (itemId) => ({
  type: REMOVE_FROM_CART,
  payload: itemId,
})
