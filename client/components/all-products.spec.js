/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {mount, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {AllProducts} from './all-products'

const adapter = new Adapter()
enzyme.configure({adapter})

const products = [
  {
    id: 1,
    name: 'beans',
    price: '$1',
    imageURL: 'https://i.imgur.com/DLrwUP7.png',
  },
  {
    id: 2,
    name: 'a wand',
    price: '$10',
    imageURL: 'https://i.imgur.com/jim3MSJ.png',
  },
]

describe('AllProducts', () => {
  let allProducts

  beforeEach(() => {
    allProducts = mount(<AllProducts products={products} />)
  })

  it('renders all product names', () => {
    expect(allProducts.find('div')).to.have.lengthOf(2)
  })
})
