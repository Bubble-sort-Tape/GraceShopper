import {expect} from 'chai'
import {
  setSingleProduct,
  fetchSingleProduct,
  SET_SINGLE_PRODUCT,
} from './singleProduct'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)
const initialState = {
  product: {},
}

describe('SingleProduct Redux', () => {
  const product = [
    {
      id: 1,
      name: 'beans',
      price: '$1',
      imageUrl: 'https://i.imgur.com/DLrwUP7.png',
    },
  ]

  describe('Redux', () => {
    let fakeStore
    beforeEach(() => {
      fakeStore = mockStore(initialState)
    })
    describe('set/fetch product', () => {
      it('setProduct action creator', () => {
        expect(setSingleProduct(product)).to.deep.equal({
          type: 'SET_SINGLE_PRODUCT',
          product,
        })
      })
    })
  })
})
