import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {getCheckout} from '../store/checkoutCart'
import {fetchCartItems} from '../store/cart'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export class CheckoutCart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      addressShip1: '4 Privet Dr',
      cityShip: 'Little Whinging',
      zipShip: '8675309',
      countryShip: 'England',
      addressBill1: '4 Privet Dr',
      cityBill: 'Little Whinging',
      zipBill: '8675309',
      countryBill: 'England',
      creditCard: '1234 5678 9123 4567',
      expire: '1/1/1970',
      cvv: '321',
      redirectConfirmation: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.props.fetchCartItems()
    this.setState({})
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    const checkout = this.state
    this.props.submitCheckout(checkout)
    this.setState({
      redirectConfirmation: true,
    })
  }

  render() {
    const redirectConfirmation = this.state.redirectConfirmation
    if (redirectConfirmation === true) {
      return <Redirect to="/confirmation" />
    }
    const {items} = this.props

    return (
      <Container className="checkout">
        <h3 className="text-center">Checkout</h3>
        <Form onSubmit={this.handleSubmit}>
          <Row className="justify-content-md-center">
            <Form.Group controlId="formShippingAddress">
              <span>Shipping Address</span>
              <Form.Control
                onChange={this.handleChange}
                name="addressShip1"
                value={this.state.addressShip1}
                placeholder="Street Address"
                type="text"
              />
              <Form.Control
                onChange={this.handleChange}
                name="addressShip2"
                placeholder="Alley, Dormitory, etc."
                type="text"
              />
              <Form.Control
                onChange={this.handleChange}
                name="cityShip"
                value={this.state.cityShip}
                placeholder="City"
                type="text"
              />
              <Form.Control
                onChange={this.handleChange}
                name="zipShip"
                value={this.state.zipShip}
                placeholder="Zip Code"
                type="text"
              />
              <Form.Control
                onChange={this.handleChange}
                name="countryShip"
                value={this.state.countryShip}
                placeholder="Country"
                type="text"
              />
            </Form.Group>
            <Form.Group>
              <span>Billing Address</span>
              <Form.Control
                onChange={this.handleChange}
                name="addressBill1"
                value={this.state.addressBill1}
                placeholder="Street Address"
                type="text"
              />
              <Form.Control
                onChange={this.handleChange}
                name="addressBill2"
                placeholder="Alley, Dormitory, etc."
                type="text"
              />
              <Form.Control
                onChange={this.handleChange}
                name="cityBill"
                value={this.state.cityBill}
                placeholder="City"
                type="text"
              />
              <Form.Control
                onChange={this.handleChange}
                name="zipBill"
                value={this.state.zipBill}
                placeholder="Zip Code"
                type="text"
              />
              <Form.Control
                onChange={this.handleChange}
                name="countryBill"
                value={this.state.countryBill}
                placeholder="Country"
                type="text"
              />
            </Form.Group>
            <Form.Group>
              <span>Credit Information</span>
              <Form.Control
                onChange={this.handleChange}
                name="creditCard"
                value={this.state.creditCard}
                placeholder="Card Number"
                type="text"
              />
              <Form.Control
                onChange={this.handleChange}
                name="expire"
                value={this.state.expire}
                placeholder="Expiration (MM/YYYY)"
                type="text"
              />
              <Form.Control
                onChange={this.handleChange}
                name="cvv"
                value={this.state.cvv}
                placeholder="CVV"
                type="text"
              />
            </Form.Group>
          </Row>
          <Row className="justify-content-md-center">
            <h4>
              {items.reduce((acc, cur) => {
                acc = acc + cur.OrderItem.price * cur.OrderItem.quantity
                return acc
              }, 0)}{' '}
              Sickles
            </h4>
          </Row>
          <Row className="justify-content-md-center">
            <Button type="submit" variant="success">
              Order Now!
            </Button>
          </Row>
        </Form>
        {/* </Row> */}
      </Container>
    )
  }
}

const mapState = (state) => ({
  items: state.cart,
})

const mapDispatch = (dispatch) => ({
  fetchCartItems: () => dispatch(fetchCartItems()),
  submitCheckout: (checkout) => dispatch(getCheckout(checkout)),
})

export default connect(mapState, mapDispatch)(CheckoutCart)
