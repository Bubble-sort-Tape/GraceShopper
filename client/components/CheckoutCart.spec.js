import {expect} from 'chai'
import React from 'react'
import {shallow} from 'enzyme'
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
