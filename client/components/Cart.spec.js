import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {Cart} from './Cart'

const adapter = new Adapter()
enzyme.configure({adapter})

const products = [
  {
    id: 1,
    name: 'beans',
    price: '1',
    imageUrl: 'https://i.imgur.com/DLrwUP7.png',
  },
  {
    id: 2,
    name: 'a wand',
    price: '10',
    imageUrl: 'https://i.imgur.com/jim3MSJ.png',
  },
]

describe('Cart Component', () => {
  let cart

  beforeEach(() => {
    cart = shallow(<Cart cart={cart} />)
  })

  it('renders all cart items', () => {
    expect(cart.find('CartItem')).to.have.lengthOf(products.length)
  })
})
