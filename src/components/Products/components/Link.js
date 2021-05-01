// Dep
import React from "react"
import PropTypes from "prop-types"

function Link({ active, children, onClick }) {
  return (
    <button disabled={active} onClick={onClick} style={{ margin: 10 }}>
      {children}
    </button>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

export default Link
