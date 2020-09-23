import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {AllProductsCard} from './all-products-card'

/**
 * COMPONENT
 */
export const AllProducts = (props) => {
  const {products} = props

  return (
    <div>
      <div>Generic Welcome Message!</div>
      <div className="all-products-list">
        {products.map((product) => (
          <AllProductsCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

/**
 * REDUX CONTAINER
 */
export default AllProducts

/**
 * PROP TYPES
 */
AllProducts.propTypes = {
  products: PropTypes.array,
}
