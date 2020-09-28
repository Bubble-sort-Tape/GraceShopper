import React, {useEffect} from 'react'
import CartItem from './CartItem'
import {fetchCartItems} from '../store/cart'
import {connect} from 'react-redux'
import history from '../history'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export const Cart = (props) => {
  // useEffect(() => {
  //   props.fetchCart()
  // }, {})
  useEffect(() => {
    props.fetchCartItems()
  }, [])

  const {items} = props
  return (
    <Container className="my-3">
      <h3 className="text-center">Cart</h3>
      <Row>
        <Col>
          {items.map((item) => (
            <CartItem key={item.id} product={item} />
          ))}
        </Col>
        <Col md={{span: 4, offset: 4}}>
          <div>
            <h4>Total</h4>
            {items.reduce((acc, cur) => {
              acc = acc + cur.OrderItem.price * cur.OrderItem.quantity
              return acc
            }, 0)}
          </div>

          <Button
            variant="success"
            type="button"
            onClick={() => {
              history.push('/checkout')
            }}
          >
            Checkout
          </Button>
        </Col>
      </Row>
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
