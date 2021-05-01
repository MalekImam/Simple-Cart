// Dep
import React from "react"
import { connect } from "react-redux"
import ProductsList from "./components/ProductsList"
// Core Files
import { createMockProducts } from "./helpers/demoData"
import { loadProducts } from "../../core/redux/actions/products"

function ProductsContainer({ loadProducts }) {
  const data = { productsById: createMockProducts() }
  loadProducts(data)

  return (
    <div>
      {/* <FilterProducts /> */}
      <ProductsList />
    </div>
  )
}

export default connect(null, { loadProducts })(ProductsContainer)