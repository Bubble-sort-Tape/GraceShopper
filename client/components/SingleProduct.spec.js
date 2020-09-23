import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {SingleProduct} from './SingleProduct'

const adapter = new Adapter()
enzyme.configure({adapter})

const product = {
  id: 1,
  productName: 'Chocolate Frogs',
  description:
    'Chocolate frogs are a very popular sweet made from chocolate in the form of a frog. They come with a collectible card of a famous witch or wizard in each pack. The frogs are made of seventy percent Croakoa. Presumably, this substance is what allows them to act like an actual frog.',
  imageUrl:
    'https://cdn.shopify.com/s/files/1/0221/1146/products/ChocolateFrogPin1_large.png?v=1579875491',
  price: 4.5,
}

describe('SingleProduct', () => {
  let singleProduct

  beforeEach(() => {
    singleProduct = shallow(<SingleProduct product={product} />)
  })

  it('displays product name', () => {
    expect(singleProduct.html()).to.include(product.name)
  })
  it('displays product description', () => {
    expect(singleProduct.html()).to.include(product.description)
  })
  it('displays product image', () => {
    expect(singleProduct.html()).to.include(product.imageUrl)
  })
  it('displays product price', () => {
    expect(singleProduct.html()).to.include(product.price)
  })
})
