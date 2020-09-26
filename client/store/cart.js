import axios from 'axios'

/**
 * ACTION TYPES
 */
const GOT_CART = 'GOT_CART'

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
    const {data: cartItems} = await axios.post('/api/orders/cart', {
      id,
      quantity,
    })
    dispatch(gotCart(cartItems))
  } catch (error) {
    console.error(error)
  }
}

export const editCartItem = (id, quantity) => async (dispatch) => {
  try {
    const {data: cartItems} = await axios.put('/api/orders/cart', {
      id,
      quantity,
    })
    dispatch(gotCart(cartItems))
  } catch (error) {
    console.error(error)
  }
}
export const removeCartItem = (id) => async (dispatch) => {
  try {
    const {data: cartItems} = await axios.delete('/api/orders/cart', {id})
    dispatch(gotCart(cartItems))
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
    default:
      return state
  }
}
