import React, {Component} from 'react'

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
    }
  }
  render() {
    return (
      <div className="checkout">
        <form>
          <div className="checkout-left">
            <span> Shipping Address</span>
            <label htmlFor="addressShip1">Address 1: </label>
            <input name="addressShip1" type="text" />
            <label htmlFor="addressShip2">Address 2: </label>
            <input name="addressShip2" type="text" />
            <label htmlFor="cityShip">City: </label>
            <input name="cityShip" type="text" />
            <label htmlFor="zipShip">Zip Code: </label>
            <input name="zipShip" type="text" />
            <label htmlFor="countryShip">Country: </label>
            <input name="countryShip" type="text" />
          </div>
          <div className="checkout-mid">
            <div className="checkout-left">
              <span> Billing Address</span>
              <label htmlFor="addressBill1">Address 1: </label>
              <input name="addressBill1" type="text" />
              <label htmlFor="addressBill2">Address 2: </label>
              <input name="addressBill2" type="text" />
              <label htmlFor="cityBill">City: </label>
              <input name="cityBill" type="text" />
              <label htmlFor="zipBill">Zip Code: </label>
              <input name="zipBill" type="text" />
              <label htmlFor="countryBill">Country: </label>
              <input name="countryBill" type="text" />
            </div>
          </div>
          <div className="checkout-right">
            <label htmlFor="creditCard">Credit Card: </label>
            <input name="creditCard" type="text" />

            <label htmlFor="expire">Expiration MM/YY: </label>
            <input name="expire" type="text" />

            <label htmlFor="cvv">CVV: </label>
            <input name="cvv" type="text" />
          </div>

          <button type="submit">Order Now!</button>
        </form>
      </div>
    )
  }
}
