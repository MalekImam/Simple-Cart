// Dep
import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
// Core
import { setKeyword } from "../../../core/redux/actions/keyword"
import { getKeyword } from "../../../core/redux/selectors/keyword"

const SearchProductsContainer = ({ keyword, setKeyword }) => {
  const handlOnChange = (e) => setKeyword(e.target.value)
  return <input type="text" value={keyword} onChange={handlOnChange} />
}

SearchProductsContainer.propTypes = {
  keyword: PropTypes.string.isRequired,
  setKeyword: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  return { keyword: getKeyword(state) }
}

export default connect(mapStateToProps, { setKeyword })(SearchProductsContainer)
