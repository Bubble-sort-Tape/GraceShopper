/* global describe beforeEach afterEach it */

import {expect} from 'chai'
import {fetchAllProducts} from './allProducts'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('AllProducts Redux', () => {
  let store
  let mockAxios

  const initialState = {allProducts: [{name: '', imageUrl: '', price: ''}]}
  const fakeProductsData = [
    {
      id: 1,
      name: 'beans',
      price: '$1',
      imageUrl: 'https://i.imgur.com/DLrwUP7.png',
    },
    {
      id: 2,
      name: 'a wand',
      price: '$10',
      imageUrl: 'https://i.imgur.com/jim3MSJ.png',
    },
  ]

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(initialState)
  })

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })

  describe('fetchAllProducts', () => {
    it('eventually dispatches the GOT PRODUCTS action', async () => {
      mockAxios.onGet('/api/products').replyOnce(200, fakeProductsData)
      await store.dispatch(fetchAllProducts())
      const actions = store.getActions()
      expect(actions[0].type).to.equal('GOT_PRODUCTS')
      expect(actions[0].products).to.deep.equal(fakeProductsData)
    })
  })
})
