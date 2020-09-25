/* global describe beforeEach afterEach it */

import {expect} from 'chai'
import {fetchCartItems} from './cart'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('AllProducts Redux', () => {
  let store
  let mockAxios

  const initialCart = {
    items: [],
  }
  const fakeCart = [
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
    store = mockStore(initialCart)
  })

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })

  describe('fetchCartItems', () => {
    it('eventually dispatches the GOT CART action', async () => {
      mockAxios.onGet('/api/cart').replyOnce(200, fakeCart)
      await store.dispatch(fetchCartItems())
      const actions = store.getActions()
      expect(actions[0].type).to.equal('GOT_CART')
      expect(actions[0].cart).to.deep.equal(fakeCart)
    })
  })
})
