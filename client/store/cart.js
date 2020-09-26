import axios from 'axios'

/**
 * ACTION TYPES
 */
const GOT_CART = 'GOT_CART'
const GOT_CART_ITEMS = 'GOT_CART_ITEMS'

/**
 * INITIAL STATE
 */
const initialCart = {
  info: {},
  items: [],
}

/**
 * ACTION CREATORS
 */
export const gotCart = (info) => ({
  type: GOT_CART,
  info,
})

export const gotCartItems = (items) => ({
  type: GOT_CART_ITEMS,
  items,
})

/**
 * THUNK CREATORS
 */
export const fetchCart = () => async (dispatch) => {
  try {
    const {data: cart} = await axios.get(`/api/orders/cart`)
    dispatch(gotCart(cart))
  } catch (error) {
    console.log(error)
  }
}

export const fetchCartItems = () => async (dispatch) => {
  try {
    const {data: cartItems} = await axios.get('/api/orders/cart')
    dispatch(gotCartItems(cartItems))
  } catch (error) {
    console.log(error)
  }
}

/**
 * REDUCER
 */
export default function (state = initialCart, action) {
  switch (action.type) {
    case GOT_CART:
      return {...state, info: action.info}
    case GOT_CART_ITEMS:
      return {...state, items: action.items}
    default:
      return state
  }
}
