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
export const fetchCartItems = (userId) => async (dispatch) => {
  try {
    const {data: cartItems} = await axios.get('/api/cart', {userId})
    dispatch(gotCart(cartItems))
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
      return action.cart
    default:
      return state
  }
}
