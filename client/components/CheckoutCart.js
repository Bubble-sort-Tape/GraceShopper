import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {getCheckout} from '../store/checkoutCart'
import {fetchCartItems} from '../store/cart'

export class CheckoutCart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      addressShip1: '',
      addressShip2: '',
      cityShip: '',
      zipShip: '',
      countryShip: '',
      addressBill1: '',
      addressBill2: '',
      cityBill: '',
      zipBill: '',
      countryBill: '',
      creditCard: '',
      expire: '',
      cvv: '',
      redirectConfirmation: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.props.fetchCartItems()
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
      // addressShip1: '',
      // addressShip2: '',
      // cityShip: '',
      // zipShip: '',
      // countryShip: '',
      // addressBill1: '',
      // addressBill2: '',
      // cityBill: '',
      // zipBill: '',
      // countryBill: '',
      // creditCard: '',
      // expire: '',
      // cvv: '',
      redirectConfirmation: true,
    })
  }

  render() {
    const redirectConfirmation = this.state.redirectConfirmation
    if (redirectConfirmation === true) {
      return <Redirect to="/confirmation" />
    }
    const {items} = this.props
    console.log(this.props)
    return (
      <div className="checkout">
        <div>
          {items.reduce((acc, cur) => {
            acc = acc + cur.OrderItem.price * cur.OrderItem.quantity
            return acc
          }, 0)}
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="checkout-left">
            <span> Shipping Address</span>
            <label htmlFor="addressShip1">Address 1: </label>
            <input
              onChange={this.handleChange}
              name="addressShip1"
              type="text"
            />
            <label htmlFor="addressShip2">Address 2: </label>
            <input
              onChange={this.handleChange}
              name="addressShip2"
              type="text"
            />
            <label htmlFor="cityShip">City: </label>
            <input onChange={this.handleChange} name="cityShip" type="text" />
            <label htmlFor="zipShip">Zip Code: </label>
            <input onChange={this.handleChange} name="zipShip" type="text" />
            <label htmlFor="countryShip">Country: </label>
            <input
              onChange={this.handleChange}
              name="countryShip"
              type="text"
            />
          </div>
          <div className="checkout-mid">
            <div className="checkout-left">
              <span> Billing Address</span>
              <label htmlFor="addressBill1">Address 1: </label>
              <input
                onChange={this.handleChange}
                name="addressBill1"
                type="text"
              />
              <label htmlFor="addressBill2">Address 2: </label>
              <input
                onChange={this.handleChange}
                name="addressBill2"
                type="text"
              />
              <label htmlFor="cityBill">City: </label>
              <input onChange={this.handleChange} name="cityBill" type="text" />
              <label htmlFor="zipBill">Zip Code: </label>
              <input onChange={this.handleChange} name="zipBill" type="text" />
              <label htmlFor="countryBill">Country: </label>
              <input
                onChange={this.handleChange}
                name="countryBill"
                type="text"
              />
            </div>
          </div>
          <div className="checkout-right">
            <label htmlFor="creditCard">Credit Card: </label>
            <input onChange={this.handleChange} name="creditCard" type="text" />

            <label htmlFor="expire">Expiration MM/YY: </label>
            <input onChange={this.handleChange} name="expire" type="text" />

            <label htmlFor="cvv">CVV: </label>
            <input onChange={this.handleChange} name="cvv" type="text" />
          </div>

          <button type="submit">Order Now!</button>
        </form>
      </div>
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
