import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {AllProductsCard} from './all-products-card'
import {fetchAllProducts} from '../store/allProducts'
import CardDeck from 'react-bootstrap/CardDeck'
import CardColumns from 'react-bootstrap/CardColumns'

/**
 * COMPONENT
 */
export const AllProducts = (props) => {
  useEffect(() => {
    props.fetchAllProducts()
  }, [])

  const {products} = props
  console.log(products)
  return (
    <div>
      <div
        className="welcome-message"
        style={{color: '#81121C', fontSize: '25px', padding: '15px'}}
      >
        {props.user && props.user.id ? (
          <>Hello there, {props.user.firstName}!</>
        ) : (
          <>Hello there, Wizard guest!</>
        )}
      </div>
      <div style={{margin: 'auto', width: '55%'}}>
        <CardColumns
          className="all-products-list"
          // style={{width: '55%'}}
        >
          {products.map((product) => (
            <AllProductsCard key={product.id} product={product} />
          ))}
        </CardColumns>
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
