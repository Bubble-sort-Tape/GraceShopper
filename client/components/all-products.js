import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {AllProductsCard} from './all-products-card'

const dummyData = [
  {
    id: 1,
    name: 'beans',
    price: '$1',
    imageUrl: 'https://i.imgur.com/DLrwUP7.png',
  },
  {
    id: 2,
    name: 'a wand',
    price: '$10',
    imageUrl: 'https://i.imgur.com/jim3MSJ.png',
  },
]

/**
 * COMPONENT
 */
export const AllProducts = (props) => {
  //const {products} = props
  const products = props.products || dummyData

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
