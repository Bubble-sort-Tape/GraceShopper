import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {AllProductsCard} from './all-products-card'
import {fetchAllProducts} from '../store/allProducts'

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
  useEffect(() => {
    props.fetchAllProducts()
  }, [])

  const {products} = props || dummyData
  return (
    <div>
      <div className="welcome-message">
        {props.user.id ? (
          <>Hello there, {props.user.firstName}!</>
        ) : (
          <>Hello there, guest!</>
        )}
      </div>
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
const mapStatetoProps = (state) => ({
  products: state.allProducts,
  user: state.user,
})
const mapDispatchtoProps = (dispatch) => ({
  fetchAllProducts: () => {
    dispatch(fetchAllProducts())
  },
})

export default connect(mapStatetoProps, mapDispatchtoProps)(AllProducts)

/**
 * PROP TYPES
 */
AllProducts.propTypes = {
  products: PropTypes.array,
}
