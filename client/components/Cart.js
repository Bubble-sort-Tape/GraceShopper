import React, {useEffect} from 'react'
import CartItem from './CartItem'
import {fetchCartItems} from '../store/cart'
import {connect} from 'react-redux'
import history from '../history'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import Badge from 'react-bootstrap/Badge'

export const Cart = (props) => {
  // useEffect(() => {
  //   props.fetchCart()
  // }, {})
  useEffect(() => {
    props.fetchCartItems()
  }, [])

  const {items} = props
  return items.length ? (
    <Container className="my-1">
      <h3 className="text-center">
        Cart
        <Badge className="mx-2" variant="light">
          {items.reduce((acc, cur) => {
            acc = acc + cur.OrderItem.quantity
            return acc
          }, 0)}
        </Badge>
      </h3>
      <Table style={{height: '100px'}}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <CartItem key={item.id} product={item} />
          ))}
        </tbody>
      </Table>
      <div className="float-right">
        <h4>Total</h4>
        <h5>
          {items.reduce((acc, cur) => {
            acc = acc + cur.OrderItem.price * cur.OrderItem.quantity
            return acc
          }, 0)}{' '}
          Sickles
        </h5>
        <div>
          <Button
            className="my-2"
            variant="success"
            type="button"
            onClick={() => {
              history.push('/checkout')
            }}
          >
            Checkout
          </Button>
        </div>
      </div>
    </Container>
  ) : (
    <Container>
      <h3 className="text-center">Cart is Empty</h3>
    </Container>
  )
}

const mapState = (state) => {
  return {
    items: state.cart,
  }
}

const mapDispatch = (dispatch) => ({
  fetchCartItems: () => dispatch(fetchCartItems()),
})

export default connect(mapState, mapDispatch)(Cart)
