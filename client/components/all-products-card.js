import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

/**
 * COMPONENT
 */
export const AllProductsCard = (props) => {
  const {product} = props
  return (
    <div className="all-products-card">
      <img src={product.imageUrl} width="200" height="200"></img>
      <div>
        <Link to={`/products/${product.id}`}>{product.name}</Link>
      </div>
      <div>{product.price}</div>
    </div>
  )
}

/**
 * REDUX CONTAINER
 */
export default AllProductsCard

/**
 * PROP TYPES
 */
AllProductsCard.propTypes = {
  product: PropTypes.object,
}
