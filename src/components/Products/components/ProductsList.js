// Dep
import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
// Core Files
import Product from "./Product"
import { getVisibleProducts } from "../../../core/redux/selectors/products"

const ProductsList = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <Product key={product.id} data={product} />
      ))}
    </div>
  )
}

ProductsList.propTypes = {
  products: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => {
  return {
    products: getVisibleProducts(state),
  }
}

export default connect(mapStateToProps)(ProductsList)
