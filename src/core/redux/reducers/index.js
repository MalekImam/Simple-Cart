// Dep
import { combineReducers } from "redux"
// Core
import cartReducer from "./cart"
import productsReducer from "./products"
import visibilityFilterReducer from "./visibilityFilter"

const rootReducers = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  visibilityFilter: visibilityFilterReducer,
})

export default rootReducers
