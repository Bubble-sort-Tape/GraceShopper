import {expect} from 'chai'
import {setSingleProduct} from './singleProduct'

describe('set/fetch product', () => {
  it('setSingleRobot action creator', () => {
    expect(
      setSingleProduct(product).to.deep.equal({
        type: 'SET_SINGLE_PRODUCT',
        product,
      })
    )
  })
})
