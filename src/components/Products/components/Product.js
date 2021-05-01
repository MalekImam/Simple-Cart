// Dep
import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
// Core
import { buyProduct, cancelProduct } from "../../../core/redux/actions/products"

function Product({ data, buyProduct, cancelProduct }) {
  return (
    <div
      style={{
        color: data.selected ? "green" : "red",
      }}
    >
      <span>{data.name}</span>
      <span> ........... </span>
      {!data.selected ? (
        <button onClick={() => buyProduct({ id: data.id, selected: true })}>
          ADD To Cart
        </button>
      ) : (
        <button onClick={() => cancelProduct(data.id)}>Remove From Cart</button>
      )}
    </div>
  )
}

Product.propTypes = {
  data: PropTypes.object.isRequired,
  buyProduct: PropTypes.func.isRequired,
  cancelProduct: PropTypes.func.isRequired,
}

export default connect(null, { buyProduct, cancelProduct })(Product)
