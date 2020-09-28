import axios from 'axios'

/**
 * ACTION TYPES
 */
const GOT_CART = 'GOT_CART'
const UPDATED_CART = 'UPDATED_CART'
const REMOVED_FROM_CART = 'REMOVED_FROM_CART'

/**
 * INITIAL STATE
 */
const initialCart = {
  items: [],
}

/**
 * ACTION CREATORS
 */
export const gotCart = (cart) => ({
  type: GOT_CART,
  cart,
})

export const updatedCart = (item) => ({
  type: UPDATED_CART,
  item,
})

export const removedFromCart = (id) => ({
  type: REMOVED_FROM_CART,
  id,
})

/**
 * THUNK CREATORS
 */
export const fetchCartItems = () => async (dispatch) => {
  try {
    const {data: cartItems} = await axios.get('/api/orders/cart')
    dispatch(gotCart(cartItems))
  } catch (error) {
    console.log(error)
  }
}

export const addCartItem = (id, quantity) => async (dispatch) => {
  try {
    const {data: item} = await axios.post(`/api/orders/cart/${id}`, {
      quantity,
    })
    dispatch(updatedCart(item))
  } catch (error) {
    console.error(error)
  }
}

export const editCartItem = (id, quantity) => async (dispatch) => {
  try {
    const {data: item} = await axios.put(`/api/orders/cart/${id}`, {
      quantity,
    })
    dispatch(updatedCart(item))
  } catch (error) {
    console.error(error)
  }
}
export const removeCartItem = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/orders/cart/${id}`)
    dispatch(removedFromCart(id))
  } catch (error) {
    console.error(error)
  }
}

/**
 * REDUCER
 */
export default function (state = initialCart, action) {
  switch (action.type) {
    case GOT_CART:
      return action.cart
    case UPDATED_CART: {
      const newState = state.map((item) => {
        if (item.index === action.item.index) {
          return {...item, ...action.item}
        } else {
          return item
        }
      })
      return newState
    }
    case REMOVED_FROM_CART:
      return state.filter((item) => item.id === action.id)
    default:
      return state
  }
}
