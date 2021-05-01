// Dep
import { combineReducers } from "redux"
// Core
import cartReducer from "./cart"
import keywordReducer from "./keyword"
import productsReducer from "./products"
import visibilityFilterReducer from "./visibilityFilter"

const rootReducers = combineReducers({
  cart: cartReducer,
  keyword: keywordReducer,
  products: productsReducer,
  visibilityFilter: visibilityFilterReducer,
})

export default rootReducers
