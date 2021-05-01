// Dep
import React from "react"
import { connect } from "react-redux"
// Core Files
import { createMockProducts } from "./helpers/demoData"
import { loadProducts } from "../../core/redux/actions/products"
// Components
import ProductsList from "./components/ProductsList"
import FilterProducts from "./components/FilterProducts"
import SearchProductsContainer from "./components/SearchProductsContainer"

function ProductsContainer({ loadProducts }) {
  const data = { productsById: createMockProducts() }
  loadProducts(data)

  return (
    <div>
      <SearchProductsContainer />
      <FilterProducts />
      <ProductsList />
    </div>
  )
}

export default connect(null, { loadProducts })(ProductsContainer)
