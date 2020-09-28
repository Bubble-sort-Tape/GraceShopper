/* global describe beforeEach afterEach it */

import {expect} from 'chai'
import {fetchCartItems, addCartItem, editCartItem, removeCartItem} from './cart'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('Cart Redux', () => {
  let store
  let mockAxios

  const initialClientCart = {
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

  const initialServerCart = [
    {
      id: 1,
      name: 'beans',
      price: '$1',
      imageUrl: 'https://i.imgur.com/DLrwUP7.png',
      OrderItem: {
        quantity: 2,
        price: 200,
      },
    },
    {
      id: 2,
      name: 'a wand',
      price: '$10',
      imageUrl: 'https://i.imgur.com/jim3MSJ.png',
      OrderItem: {
        quantity: 1,
        price: 250,
      },
    },
  ]
  let fakeCart = []

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(initialClientCart)
    fakeCart = Array.from(initialServerCart)
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
    it('returns an updated cart', async () => {
      const targetId = 4

      mockAxios.onPost(`/api/orders/cart/${targetId}`).reply(function (config) {
        const {quantity} = JSON.parse(config.data)
        const id = targetId

        const newProd = fakeProductsList.find((prod) => prod.id === id)

        newProd.OrderItem = {quantity, price: newProd.price}

        return [201, newProd]
      })
      await store.dispatch(addCartItem(targetId, 1))
      const actions = store.getActions()
      expect(actions[0].type).to.equal('UPDATED_CART')
      expect(actions[0].item.id).to.equal(4)
      expect(actions[0].item.OrderItem.quantity).to.equal(1)
    })
  })

  describe('editCartItem', () => {
    it('correcty modified the item quantity', async () => {
      let targetId = 1

      mockAxios.onPut(`/api/orders/cart/${targetId}`).reply(function (config) {
        const id = targetId
        const {quantity} = JSON.parse(config.data)

        const prod = fakeCart.find((prod) => prod.id === id)

        prod.OrderItem.quantity = quantity

        return [201, prod]
      })
      await store.dispatch(editCartItem(targetId, 3))
      const actions = store.getActions()
      expect(actions[0].type).to.equal('UPDATED_CART')
      expect(actions[0].item.OrderItem.quantity).to.deep.equal(3)
    })
  })

  describe('removeCartItems', () => {
    it('deletes the correct item', async () => {
      //workaround for lack of route params in mockaxios
      let targetId = 1

      mockAxios.onDelete(`/api/orders/cart/${targetId}`).reply(function () {
        //this is where req.params would go
        const id = targetId
        fakeCart = fakeCart.filter((prod) => prod.id !== id)
        return [204]
      })

      await store.dispatch(removeCartItem(targetId))
      const actions = store.getActions()
      expect(actions[0].type).to.equal('REMOVED_FROM_CART')
      expect(actions[0].id).to.equal(targetId)
    })
  })
})
