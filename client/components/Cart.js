import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {CartItem} from './CartItem'
import {fetchCartItems} from '../store/cart'

export const Cart = (props) => {
  // useEffect(() => {
  //   props.fetchCart()
  // }, {})
  useEffect(() => {
    props.fetchCartItems()
  }, [])

  const {items} = props
  return (
    <div>
      <h3>Cart</h3>
      {items.map((item) => (
        <CartItem key={item.id} product={item} />
      ))}
      <div>$$$Cart Total$$$</div>
      <button type="submit">Checkout</button>
    </div>
  )
}

const mapState = (state) => {
  return {
    // info: state.cart.info,
    items: state.cart.items,
  }
}

const mapDispatch = (dispatch) => ({
  // fetchCart: () => dispatch(fetchCart()),
  fetchCartItems: () => dispatch(fetchCartItems()),
})

export default connect(mapState, mapDispatch)(Cart)
