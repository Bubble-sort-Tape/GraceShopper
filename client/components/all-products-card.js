import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

/**
 * COMPONENT
 */
export const AllProductsCard = (props) => {
  const {product} = props
  console.log(product)
  return (
    <div>
      <img src={product.imageURL} width="200" height="200"></img>
      <div>{product.name}</div>
      <div>{product.price}</div>
    </div>
  )
}

/**
 * REDUX CONTAINER
 */

/**
 * PROP TYPES
 */
AllProductsCard.propTypes = {
  product: PropTypes.object,
}
