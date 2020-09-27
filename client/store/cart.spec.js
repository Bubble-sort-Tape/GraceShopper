/* global describe beforeEach afterEach it */

import {expect} from 'chai'
import {fetchCartItems, addCartItem, editCartItem, removeCartItem} from './cart'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import {fake} from 'faker'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('Cart Redux', () => {
  let store
  let mockAxios

  const initialCart = {
    items: [],
  }

  const fakeProductsList = [
    {
      id: 1,
      name: 'beans',
      price: 200,
      imageUrl: 'https://i.imgur.com/DLrwUP7.png',
    },
    {
      id: 2,
      name: 'a wand',
      price: 250,
      imageUrl: 'https://i.imgur.com/jim3MSJ.png',
    },
    {
      id: 3,
      name: 'frog',
      price: 330,
      imageUrl: 'https://i.imgur.com/jim3MSJ.png',
    },
    {
      id: 4,
      name: 'one muggle dollar',
      price: 150,
      imageUrl: 'https://i.imgur.com/jim3MSJ.png',
    },
  ]

  const fakeCart = [
    {
      id: 1,
      name: 'beans',
      price: '$1',
      imageUrl: 'https://i.imgur.com/DLrwUP7.png',
      OrdersProducts: {
        quantity: 2,
        price: 200,
      },
    },
    {
      id: 2,
      name: 'a wand',
      price: '$10',
      imageUrl: 'https://i.imgur.com/jim3MSJ.png',
      OrdersProducts: {
        quantity: 1,
        price: 250,
      },
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
      mockAxios.onGet('/api/orders/cart').replyOnce(200, fakeCart)
      await store.dispatch(fetchCartItems())
      const actions = store.getActions()
      expect(actions[0].type).to.equal('GOT_CART')
      expect(actions[0].cart).to.deep.equal(fakeCart)
    })
  })

  describe('addCartItem', () => {
    it('eventually dispatches the GOT CART action', async () => {
      mockAxios.onPost('/api/orders/cart').reply(201, fakeCart)
      await store.dispatch(addCartItem(4, 1))
      const actions = store.getActions()
      expect(actions[0].type).to.equal('GOT_CART')
    })

    it('returns an updated cart', async () => {
      mockAxios.onPost('/api/orders/cart').reply(function (config) {
        const {id, quantity} = JSON.parse(config.data)

        const newProd = fakeProductsList.find((prod) => {
          return prod.id === id
        })

        newProd.OrdersProducts = {quantity, price: newProd.price}
        fakeCart.push(newProd)

        return [201, fakeCart]
      })
      await store.dispatch(addCartItem(1, 1))
      const actions = store.getActions()
      expect(actions[0].type).to.equal('GOT_CART')
      expect(actions[0].cart[2].id).to.equal(4)
      expect(actions[0].cart[2].quantity).to.equal(1)
    })
  })

  /*
  describe('editCartItem', () => {
    it('eventually dispatches the GOT CART action', async () => {
      mockAxios.onPost('/api/orders/cart').replyOnce(200, fakeCart)
      await store.dispatch(editCartItem())
      const actions = store.getActions()
      expect(actions[0].type).to.equal('GOT_CART')
      expect(actions[0].cart).to.deep.equal(fakeCart)
    })
  })
  describe('removeCartItems', () => {
    it('eventually dispatches the GOT CART action', async () => {
      mockAxios.onPost('/api/orders/cart').replyOnce(200, fakeCart)
      await store.dispatch(removeCartItem())
      const actions = store.getActions()
      expect(actions[0].type).to.equal('GOT_CART')
      expect(actions[0].cart).to.deep.equal(fakeCart)
    })
  })
   */
})
