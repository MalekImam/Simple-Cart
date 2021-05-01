// Dependencies
import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
// Core
import {
  SHOW_ALL,
  SHOW_SELECTED,
  SHOW_UNSELECTED,
} from "../../../core/redux/constants/visibilityFilter"
import { setVisibilityFilter } from "../../../core/redux/actions/visibilityFilter"
import { getVisiblityFilter } from "../../../core/redux/selectors/visibilityFilter"
// Components
import Link from "./Link"

const FilterProducts = ({ active, setVisibilityFilter }) => {
  const toggelVisibility = (type) => setVisibilityFilter(type)

  return (
    <div>
      <Link
        active={active === SHOW_ALL}
        onClick={() => toggelVisibility(SHOW_ALL)}
      >
        All
      </Link>
      <Link
        active={active === SHOW_SELECTED}
        onClick={() => toggelVisibility(SHOW_SELECTED)}
      >
        Selected
      </Link>
      <Link
        active={active === SHOW_UNSELECTED}
        onClick={() => toggelVisibility(SHOW_UNSELECTED)}
      >
        UnSelected
      </Link>
    </div>
  )
}

FilterProducts.propTypes = {
  setVisibilityFilter: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  return {
    active: getVisiblityFilter(state),
  }
}

export default connect(mapStateToProps, { setVisibilityFilter })(FilterProducts)
