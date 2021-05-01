import {
  SET_PRODUCTS,
  LOAD_PRODUCTS,
  TOGGLE_PRODUCT,
  SELECT_PRODUCT,
  UNSELECT_PRODUCT,
  BUY_PRODUCT,
  CANCEL_PRODUCT,
} from "../constants/actionTypes"

export const loadProducts = (data) => ({
  type: LOAD_PRODUCTS,
  payload: data,
  meta: { byIdKey: "productsById" },
  // meta: { enrich: { selected: false }, enrichKey: "productsById" },
})

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
})

export const buyProduct = (product) => ({
  type: BUY_PRODUCT,
  payload: product,
})

export const cancelProduct = (productId) => ({
  type: CANCEL_PRODUCT,
  payload: productId,
})

export const toggleProduct = (productId, isSelected) => ({
  type: TOGGLE_PRODUCT,
  payload: { id: productId, isSelected },
})

export const selectProduct = (productId) => ({
  type: SELECT_PRODUCT,
  payload: productId,
})

export const unselectProduct = (productId) => ({
  type: UNSELECT_PRODUCT,
  payload: productId,
})
