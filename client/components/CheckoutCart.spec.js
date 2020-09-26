import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {CheckoutCart} from './CheckoutCart'

describe('Checkout Cart', () => {
  let checkout
  beforeEach(() => {
    checkout = shallow(<CheckoutCart />)
  })
  it('displays shipping address', () => {
    expect(checkout.html()).to.include('Shipping Address')
  })
  it('displays billing address', () => {
    expect(checkout.html()).to.include('Billing Address')
  })
})
