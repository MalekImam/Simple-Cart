import {
  selectProduct,
  setProducts,
  toggleProduct,
  unselectProduct,
} from "../../actions/products"
import {
  BUY_PRODUCT,
  CANCEL_PRODUCT,
  LOAD_PRODUCTS,
  SELECT_PRODUCT,
  UNSELECT_PRODUCT,
} from "../../constants/actionTypes"
// Core Files
import { addItemToCart, removeItemFromCart } from "../../actions/cart"

// Map Middleware
const fillProductsMdl = ({ dispatch }) => (next) => (action) => {
  next(action)

  if (action.type === LOAD_PRODUCTS) {
    // Add AllIds Property into the state
    const byIdKey = (action.meta && action.meta.byIdKey) || "byId"
    action.payload.allIds = Object.keys(action.payload[byIdKey])
    dispatch(setProducts(action.payload))
  }
}

// Translate Middleware
const toggleProductsMdl = () => (next) => (action) => {
  if (action.type === SELECT_PRODUCT) {
    next(toggleProduct(action.payload, true))
  } else if (action.type === UNSELECT_PRODUCT) {
    next(toggleProduct(action.payload, false))
  } else next(action)
}

// Split Middleware - Example (This is just an example to clarify what is the split Middleware)
// Middleware cares about buying or cancel product
const checkoutProductMdl = ({ dispatch }) => (next) => (action) => {
  next(action)

  // Split Action to another two actions
  if (action.type === BUY_PRODUCT) {
    dispatch(selectProduct(action.payload.id))
    dispatch(addItemToCart(action.payload))
  } else if (action.type === CANCEL_PRODUCT) {
    dispatch(unselectProduct(action.payload))
    dispatch(removeItemFromCart(action.payload))
  }
}

export const productsMiddlewares = [
  fillProductsMdl,
  toggleProductsMdl,
  checkoutProductMdl,
]
