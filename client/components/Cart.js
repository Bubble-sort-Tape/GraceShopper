import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {CartItem} from './CartItem'
import {fetchCart, fetchCartItems} from '../store/cart'
import {fetchAllProducts} from '../store/allProducts'

export const Cart = (props) => {
  useEffect(() => {
    props.fetchCart()
  }, {})
  useEffect(() => {
    props.fetchCartItems()
  }, [])
  useEffect(() => {
    props.fetchAllProducts()
  }, [])
  const {items, products} = props
  return (
    <div>
      <h3>Cart</h3>
      {items.map((item) => (
        <CartItem
          key={item.productId}
          product={products.find((product) => product.id === item.productId)}
          item={item}
        />
      ))}
      <div>$$$Cart Total$$$</div>
      <button type="submit">Checkout</button>
    </div>
  )
}

const mapState = (state) => {
  return {
    info: state.cart.info,
    items: state.cart.items,
    products: state.allProducts,
  }
}

const mapDispatch = (dispatch) => ({
  fetchCart: () => dispatch(fetchCart()),
  fetchCartItems: () => dispatch(fetchCartItems()),
  fetchAllProducts: () => dispatch(fetchAllProducts()),
})

export default connect(mapState, mapDispatch)(Cart)
