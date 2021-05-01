// Dep
import { createSelector } from "reselect"
// Core
import {
  SHOW_ALL,
  SHOW_SELECTED,
  SHOW_UNSELECTED,
} from "../constants/visibilityFilter"
import { getVisiblityFilter } from "./visibilityFilter"

const selectProducts = (state) => state.products

export const getProducts = createSelector(
  selectProducts,
  ({ productsById }) =>
    productsById && Object.keys(productsById).map((id) => productsById[id])
)

export const getVisibleProducts = createSelector(
  [getProducts, getVisiblityFilter],
  (products, visibilityFilter) => {
    switch (visibilityFilter) {
      case SHOW_ALL:
        return products
      case SHOW_SELECTED:
        return products.filter((p) => p.selected)
      case SHOW_UNSELECTED:
        return products.filter((p) => !p.selected)
      default:
        return products
    }
  }
)

// export const getProducts = ({ productsById }) => {
//   return productsById && Object.keys(productsById).map((id) => productsById[id])
// }

// export const getSelectedProducts = ({ selectedProductIds, productsById }) => {
//   return selectedProductIds && selectedProductIds.map((id) => productsById[id])
// }
