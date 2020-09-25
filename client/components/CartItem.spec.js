import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {CartItem} from './CartItem'

const adapter = new Adapter()
enzyme.configure({adapter})

const product = {
  id: 1,
  name: 'beans',
  price: '1',
  imageUrl: 'https://i.imgur.com/DLrwUP7.png',
}

describe('CartItem Component', () => {
  let cartItem

  beforeEach(() => {
    cartItem = shallow(<CartItem product={product} />)
  })

  it('displays product name', () => {
    expect(cartItem.html()).to.include(product.name)
  })
  it('displays product price', () => {
    expect(cartItem.html()).to.include(product.price)
  })
  it('displays product image', () => {
    expect(cartItem.html()).to.include(product.imageUrl)
  })
})
