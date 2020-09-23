/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {AllProductsCard} from './all-products-card'

const adapter = new Adapter()
enzyme.configure({adapter})

const product = {
  id: 1,
  name: 'beans',
  price: '$1',
  imageUrl: 'https://i.imgur.com/DLrwUP7.png',
}

describe('AllProductsCard', () => {
  let productCard

  beforeEach(() => {
    productCard = shallow(<AllProductsCard product={product} />)
  })

  it('displays product name', () => {
    expect(productCard.html()).to.include(product.name)
  })
  it('displays product price', () => {
    expect(productCard.html()).to.include(product.price)
  })
  it('displays product image', () => {
    expect(productCard.find('img').prop('src')).to.equal(product.imageUrl)
  })
})
